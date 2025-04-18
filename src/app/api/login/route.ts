import { NextRequest, NextResponse } from "next/server";

// Main backend URL from environment variable
const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

// Login API proxy
export async function POST(request: NextRequest) {
    try {
        console.log("Login API is called - proxying to main backend");
        
        // Get request body
        const body = await request.json();
        const { phone, password } = body;
        
        // Validate inputs
        if (!phone || !password) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Phone number and password are required",
                },
                { status: 400 }
            );
        }

        // Forward the request to the main backend
        const response = await fetch(`${BACKEND_URL}/api/be-our-partner/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ phone, password }),
        });

        // Parse the response
        const data = await response.json();
        
        // Return the response to the client
        return NextResponse.json(
            data,
            { status: response.status }
        );
    } catch (error) {
        console.error("Error during login:", error);
        return NextResponse.json(
            { success: false, message: "Login failed. Please try again." },
            { status: 500 }
        );
    }
} 