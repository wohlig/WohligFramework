var schema = new Schema(
    {
        name: { type: String, index: true },
        email: { type: String },
        status: {
            type: String,
            enum: ["enabled", "disabled", "archived"],
            default: "enabled",
            index: true
        }
    },
    {
        timestamp: true
    }
)
schema.index({ name: 1, email: 1 }, { unique: true })
export default mongoose.model("Person", schema)
