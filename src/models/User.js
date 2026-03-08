import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    selectedProvince: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Province",
      required: true,
    },

    planType: {
      type: String,
      enum: ["standard", "premium"],
      default: "standard",
    },

    billingCycle: {
      type: String,
      enum: ["monthly", "yearly"],
      default: "monthly",
    },

    subscriptionStatus: {
      type: Boolean,
      default: false,
    },

    subscriptionStartDate: {
      type: Date,
    },

    subscriptionEndDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

/* Hash Password */
userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  this.password = await bcrypt.hash(this.password, 10);
});

/* Compare Password */
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.isSubscriptionActive = function () {
  if (!this.subscriptionEndDate) return false;
  return new Date() < this.subscriptionEndDate;
};

// prevent model recompilation when importing file multiple times
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;