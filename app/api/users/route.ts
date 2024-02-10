import connect from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export const GET = async (request: any) => {
  await connect();
  const users = await User.find({ role: "creator" && "advertiser" });
  return NextResponse.json<{ users: any }>({ users }, { status: 200 });
};
