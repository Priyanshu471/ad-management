import connect from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  await connect();
  const { email, password } = await request.json();
  try {
    const user = await User.findOne({ email, password });
    if (user) {
      return NextResponse.json<{ user: any }>({ user }, { status: 200 });
    }
    return new NextResponse("Email or password is incorrect", { status: 400 });
  } catch (err: any) {
    return new NextResponse(err, {
      status: 500,
    });
  }
};
