import useUser from "@/hooks/useUser";
import connect from "@/lib/mongodb";
import Campaign from "@/models/campaign";
import User from "@/models/user";
import { Request } from "express";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  await connect();
  const { title, description, objective, budget, duration, userId } =
    await request.json();
  const user = await User.findById(userId);
  console.log(
    "Data from request: ",
    title,
    description,
    objective,
    budget,
    duration,
    user
  );
  const newCampaign = new Campaign({
    title,
    description,
    objective,
    budget,
    duration,
    user,
  });
  try {
    await newCampaign.save();
    console.log("new campaign: ", newCampaign);
    return NextResponse.json<{ newCampaign: any }>(
      { newCampaign },
      { status: 200 }
    );
  } catch (err: any) {
    return new NextResponse(err, {
      status: 500,
    });
  }
};

export const GET = async (request: any) => {
  await connect();
  const campaigns = await Campaign.find({});
  return NextResponse.json<{ campaigns: any }>({ campaigns }, { status: 200 });
};

export const DELETE = async (request: any) => {
  await connect();
  const { id } = request.json();
  console.log(id);
  try {
    await Campaign.deleteOne({ _id: id });
    return NextResponse.json(
      { message: "Campaign deleted permanently" },
      { status: 200 }
    );
  } catch (err: any) {
    return new NextResponse(err, {
      status: 500,
    });
  }
};

export const PATCH = async (request: any) => {
  await connect();
  const { title, description, budget, duration, status } = request.json();
  console.log(title, description, budget, duration, status);
  try {
    await Campaign.updateOne(
      { title },
      { description, budget, duration, status }
    );
    return NextResponse.json({ message: "Campaign updated" }, { status: 200 });
  } catch (err: any) {
    return new NextResponse(err, { status: 500 });
  }
};
