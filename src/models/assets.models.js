import mongoose from "mongoose"

const assetSchema = new mongoose.Schema(
    {
        asset_id: {
            type: Number,
            required: true,
            unique: true
        },
        asset_name: {
            type: String,
            required: true,
            unique: true
        },
        asset_type: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        purchase_date: {
            type: Date,
            required: true
        },
        initial_cost: {
            type: Number,
            required: true
        },
        operational_status: {
            type: String,
            enum:["Active", "Inactive", "Under Maintenance", "Retired"],
            default: "Active"
        }


    }
)

export const Asset =mongoose.model("Asset",assetSchema)

//Asset ID, Asset Name, Asset Type,
// Location, Purchase Date, Initial Cost, Operational Status.