import mongoose, { Schema, models } from "mongoose";

const campaignSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    objective: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "Active",
    },
    impressions: {
      type: Number,
    },
    click: {
      type: Number,
    },
    ctr: {
      type: String,
    },
    budget: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Campaign = models.Campaign || mongoose.model("Campaign", campaignSchema);
export default Campaign;
