import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

// OTP verification API
export async function POST(request: NextRequest) {
    try {
        const { phoneNumber, otp, genOtp } = await request.json();

        // Validate inputs
        if (!phoneNumber || !otp) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Phone number and OTP are required",
                },
                { status: 400 }
            );
        }

        // In a real app, you would retrieve the stored OTP from your database
        // Here we'll verify against the hash and rely on client-side verification with localStorage

        // Generate the hash that would match the one stored client-side
        // const secret = process.env.OTP_SECRET || 'your-secret-key';
        // const calculatedHash = crypto
        //   .createHmac('sha256', secret)
        //   .update(`${otp}:${phoneNumber}`)
        //   .digest('hex');

        // The client will send both the entered OTP and the hash from localStorage
        // Here we'd typically verify against a database record
        // For this demo, the client will do the actual verification using localStorage
        if (genOtp == otp) {
            return NextResponse.json(
                {
                    success: true,
                    message: "OTP verification successful",
                    // verificationHash: calculatedHash  // Client can use this to verify
                },
                { status: 200 }
            );
        }

        return NextResponse.json({
            success: false,
            message: "OTP is incorect",
        },
        { status: 400 }
    );
    } catch (error) {
        console.error("Error verifying OTP:", error);
        return NextResponse.json(
            { success: false, message: "Failed to verify OTP" },
            { status: 500 }
        );
    }
}
