const { Schema, model, Types } = require ("mongoose");

// const ETypeOrder = [ 
// [  ORDERED = "ORDERED"]
//  [ COMPLETED = "COMPLETED"]
//  [ DELIVERING = "DELIVERING"]
// ]
const ORDERED = "ORDERED";
const COMPLETED = "COMPLETED";
const DELIVERING = "DELIVERING";

const OrderSchema = new Schema(
  {
    user: { type: Types.ObjectId, ref: "User" },
    fullname: { type: String, required: true },
    email: String,
    address: { type: Types.ObjectId, required: "Address" },
    orderItems: [{ type: Types.ObjectId, ref: "Product" }],
    orderStatus: {
      type: String,
      default: ORDERED,
      enum: Object.values(ORDERED,COMPLETED,DELIVERING),
    },
    paymentID: { type: String },
  },
  { timestamps: true }
);

exports.OrderModel = model("Order", OrderSchema);