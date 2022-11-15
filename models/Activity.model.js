const { Schema, model } = require("mongoose");

const ActivitySchema = {
  name: String,
  location: String,
  image: String,
  description: String,
  url: String,
  tags: {
    type: [String],
    enum: [
      "Museum",
      "Indoors",
      "Outdoors",
      "Bar",
      "Fancy",
      "Adventure",
      "Culture",
      "Art",
      "Show",
      "Romantic",
      "Landscape",
      "Secret Place",
      "Free",
      "Cheap",
      "Cocktails",
      "Music",
      "Cosy",
      "Ambiance",
      "Exotic",
      "Original",
      "Chill",
      "Sports",
      "Creative",
      "Touristic",
      "Food",
      "Walks",
      "Drinks",
      "Open Minded",
      "Craft",
      "Clubbing",
      "Intellectual"
    ],
  },
  price: String,
};

module.exports = model("Activity", ActivitySchema);
