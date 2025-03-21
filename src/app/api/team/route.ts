import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = await fetch("http://15.207.54.117:4000/api/team-members", {});

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();

        console.log({ data });
        if (data.data) {
            console.log("got data in data", data.data);
        }
        //@ts-ignore
        return NextResponse.json(data.data ? data.data : []);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch data" },
            { status: 500 }
        );
    }
}
