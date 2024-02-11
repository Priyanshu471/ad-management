import connect from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export const GET = async (request: any) => {
  await connect();
  try {
    const users = await User.find({});
    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
