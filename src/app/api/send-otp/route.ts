import { NextRequest, NextResponse } from "next/server";

// Main backend URL from environment variable
const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export async function POST(request: NextRequest) {
    try {
        console.log("Send OTP is called - proxying to main backend");
        
        // Get request body
        const body = await request.json();
        const { phone, pincode, loanType = "gold-loan" } = body;
        
        console.log("Request data:", { phone, pincode, loanType });

        // Validate phone number (Indian format - 10 digits)
        if (!phone || !/^[6789]\d{9}$/.test(phone)) {
            return NextResponse.json(
                { success: false, message: "Invalid phone number" },
                { status: 400 }
            );
        }

        // Forward the request to the main backend
        const response = await fetch(`${BACKEND_URL}/api/be-our-partner/send-otp`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ phone, pincode, loanType }),
        });

        // Parse the response
        const data = await response.json();
        console.log("Backend OTP response:", data);
        
        // For development environments, we might want to see the OTP
        // The backend doesn't send the actual OTP in the response for security reasons
        // This is just for testing and should be removed in production
        if (process.env.NODE_ENV === 'development') {
            console.log("Note: In development mode. If OTP is not received via SMS, check backend logs for the generated OTP.");
        }
        
        // Return the response to the client
        return NextResponse.json(
            data,
            { status: response.status }
        );
    } catch (error) {
        console.error("Error sending OTP:", error);
        return NextResponse.json(
            { success: false, message: "Failed to send OTP" },
            { status: 500 }
        );
    }
}
