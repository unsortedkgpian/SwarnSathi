import { NextRequest, NextResponse } from "next/server";

// Main backend URL from environment variable
const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

// OTP verification API
export async function POST(request: NextRequest) {
    try {
        console.log("Verify OTP is called - proxying to main backend");
        
        // Get request body
        const body = await request.json();
        const { phoneNumber, otp, genOtp } = body;
        
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

        console.log("Sending verification request to backend:", { phone: phoneNumber, otp });
        
        // Forward the request to the main backend
        const response = await fetch(`${BACKEND_URL}/api/be-our-partner/verify-otp`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                phone: phoneNumber, 
                otp: otp // Simplified - just send the entered OTP
            }),
        });

        // Parse the response
        const data = await response.json();
        console.log("Backend verification response:", data);
        
        // Return the response to the client
        return NextResponse.json(
            data,
            { status: response.status }
        );
    } catch (error) {
        console.error("Error verifying OTP:", error);
        return NextResponse.json(
            { success: false, message: "Failed to verify OTP" },
            { status: 500 }
        );
    }
}
