import { NextResponse } from "next/server";

export async function POST() {
  try {
    const res = NextResponse.json({ message: "success" }, { status: 200 });
    res.cookies.set("auth_token", "", {
      httpOnly: true,
      maxAge: 0,
      path: "/",
    });

    return res;
  } catch (error) {
    return NextResponse.json(
      { error: `Server error ${error}` },
      { status: 500 }
    );
  }
}
