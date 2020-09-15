module.exports = mongoose => {
    const Equipment = mongoose.model(
      "equipment",
      mongoose.Schema(
        {
          type: String,
          description: String,
          borrowed: Boolean
        },
        { timestamps: true }
      )
    );
  
    return Equipment;
  };
