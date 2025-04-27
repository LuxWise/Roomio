import { api } from "@/lib/AxiosInstance";
import OperatingSystem from "@/utils/OSType";
import { AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "email and password are required" },
        { status: 400 }
      );
    }

    const response = await api.post("/auth/login", {
      email,
      password,
    });

    const res = NextResponse.json({ message: "success" }, { status: 200 });
    res.cookies.set("auth_token", response.data.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: OperatingSystem() === "iOS" ? "lax" : "strict",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

    return res;
  } catch (e) {
    const error = e as AxiosError;

    if (error.response) {
      const status = error.status;
      const message = status === 401 ? "Unauthorized" : error.message;

      return NextResponse.json({ error: message });
    }
  }
}
