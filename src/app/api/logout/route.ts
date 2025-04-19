import { NextRequest, NextResponse } from "next/server";

// Main backend URL from environment variable
const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

// Logout API proxy
export async function POST(request: NextRequest) {
    try {
        console.log("Logout API is called - proxying to main backend");
        
        // Get request body and authorization header
        const body = await request.json();
        const { token } = body;
        const authHeader = request.headers.get('Authorization');
        
        // Validate token
        if (!token && !authHeader) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Token is required for logout",
                },
                { status: 400 }
            );
        }

        // Forward the request to the main backend
        const response = await fetch(`${BACKEND_URL}/api/be-our-partner/logout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': authHeader || `Bearer ${token}`,
            },
            body: JSON.stringify({ token }),
        });

        // Parse the response
        const data = await response.json();
        
        // Return the response to the client
        return NextResponse.json(
            data,
            { status: response.status }
        );
    } catch (error) {
        console.error("Error during logout:", error);
        return NextResponse.json(
            { success: false, message: "Logout failed. Please try again." },
            { status: 500 }
        );
    }
} 