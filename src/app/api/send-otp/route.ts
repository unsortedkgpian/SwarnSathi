import { NextRequest, NextResponse } from "next/server";
import https from "https";
import crypto from "crypto";

// TextLocal API configuration
const API_KEY = process.env.TEXTLOCAL_API_KEY || "";
const SENDER = process.env.TEXTLOCAL_SENDER || "TXTLCL";

export async function POST(request: NextRequest) {
    try {
        console.log("Send OTP is called");
        const {
            phoneNumber,
            pincode,
            loanType = "gold-loan",
        } = await request.json();
        console.log("Request data:", { phoneNumber, pincode, loanType });

        // Validate phone number (Indian format - 10 digits)
        if (!phoneNumber || !/^[6789]\d{9}$/.test(phoneNumber)) {
            return NextResponse.json(
                { success: false, message: "Invalid phone number" },
                { status: 400 }
            );
        }

        // Validate pincode
        if (!pincode || !/^\d{6}$/.test(pincode)) {
            return NextResponse.json(
                { success: false, message: "Invalid pincode" },
                { status: 400 }
            );
        }

        // Generate a 6-digit OTP
        const otp = generateOTP();

        // Store OTP and timestamp (used for verification and expiry)
        const timestamp = Date.now();
        const otpData = {
            otp,
            timestamp,
            attempts: 0,
            pincode,
            loanType, // Include loan type in the stored data
        };

        // In production, use a database. For demo purposes, we'll use browser localStorage in the frontend
        // The backend will generate a hash of the OTP data
        const otpHash = generateOtpHash(otp, phoneNumber);

        // Customize message based on loan type
        let loanTypeText = "gold loan";
        if (loanType === "instant-gold-loan")
            loanTypeText = "instant gold loan";
        if (loanType === "secured-gold-loan")
            loanTypeText = "secured gold loan";
        if (loanType === "insured-gold-loan")
            loanTypeText = "insured gold loan";
        if (loanType === "flexible-repayment-loan")
            loanTypeText = "flexible repayment gold loan";
        if (loanType === "quick-gold-loan") loanTypeText = "quick gold loan";

        // Send OTP via TextLocal
        const message = `${otp} -is your six digit otp for swarn sathi mobile verification`;

        await sendSMS(phoneNumber, message);

        return NextResponse.json(
            {
                success: true,
                message: "OTP sent successfully",
                hash: otpHash,
                loanType: loanType, // Return the loan type
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error sending OTP:", error);
        return NextResponse.json(
            { success: false, message: "Failed to send OTP" },
            { status: 500 }
        );
    }
}

// Helper function to generate a 6-digit OTP
function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

// Helper function to generate a hash for OTP verification
function generateOtpHash(otp: string, phoneNumber: string) {
    const secret = process.env.OTP_SECRET || "your-secret-key";
    return crypto
        .createHmac("sha256", secret)
        .update(`${otp}:${phoneNumber}`)
        .digest("hex");
}

// Function to send SMS via TextLocal
function sendSMS(phoneNumber: string, message: string): Promise<any> {
    return new Promise((resolve, reject) => {
        // Prepare the message and encode it
        const encodedMessage = encodeURIComponent(message);

        // Format the phone number with country code if it doesn't have one
        // const formattedPhone = phoneNumber?.startsWith('+') ? phoneNumber : `91${phoneNumber}`;
        const formattedPhone = phoneNumber?.toString().startsWith("+")
            ? phoneNumber
            : `91${phoneNumber}`;

        // Prepare the data for the API request
        const data = `apikey=${API_KEY}&sender=${SENDER}&numbers=${formattedPhone}&message=${encodedMessage}`;

        // Define the options for the HTTPS request
        const options = {
            host: "api.textlocal.in",
            path: `/send?${data}`,
            method: "GET",
        };

        // Make the HTTPS request
        const req = https.request(options, (response) => {
            let responseData = "";

            response.on("data", (chunk) => {
                responseData += chunk;
            });

            response.on("end", () => {
                try {
                    const parsedData = JSON.parse(responseData);

                    if (parsedData.status === "success") {
                        resolve(parsedData);
                    } else {
                        // Better error extraction
                        const errorMessage =
                            typeof parsedData.errors?.[0] === "object"
                                ? JSON.stringify(parsedData.errors[0])
                                : parsedData.errors?.[0] ||
                                  "Failed to send SMS";

                        console.error("TextLocal API Error:", parsedData);
                        reject(errorMessage);
                    }
                } catch (error) {
                    reject(error);
                }
            });
        });

        req.on("error", (error) => {
            reject(error);
        });

        req.end();
    });
}
