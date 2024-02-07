import connect from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import { Request } from "express";

export const POST = async (request: any) => {
  await connect();
  const { name, email, password, role } = await request.json();
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return new NextResponse("Email is already in use", { status: 400 });
  }
  const newUser = new User({ name, email, password, role });
  try {
    await newUser.save();
    console.log("new user: ", newUser);
    return NextResponse.json<{ newUser: any }>({ newUser }, { status: 200 });
  } catch (err: any) {
    return new NextResponse(err, {
      status: 500,
    });
  }
};
