import { NextRequest, NextResponse } from "next/server";

// Main backend URL from environment variable
const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

// Get user data API proxy
export async function GET(request: NextRequest) {
    try {
        console.log("Get user data API is called - proxying to main backend");
        
        // Get authorization header
        const authHeader = request.headers.get('Authorization');
        
        // Validate authorization
        if (!authHeader) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Authorization required",
                },
                { status: 401 }
            );
        }

        // Forward the request to the main backend
        const response = await fetch(`${BACKEND_URL}/api/be-our-partner/get-me`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': authHeader,
            },
        });

        // Parse the response
        const data = await response.json();
        
        // Return the response to the client
        return NextResponse.json(
            data,
            { status: response.status }
        );
    } catch (error) {
        console.error("Error fetching user data:", error);
        return NextResponse.json(
            { success: false, message: "Failed to fetch user data" },
            { status: 500 }
        );
    }
} 