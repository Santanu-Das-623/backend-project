import mongoose from "mongoose"

const performanceSchema = new mongoose.Schema(
    {
        uptime
    }
)

export const Performance =mongoose.model("Performance",performanceSchema)

//Uptime, Downtime, Maintenance Costs, Failure Rate, Efficiency.