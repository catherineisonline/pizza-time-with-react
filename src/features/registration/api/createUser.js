const ENVIRONMENT = import.meta.env.MODE;
import { USERS_URL } from "../../../data/constants";

export const createUser = async (user) => {
  try {
    const response = await fetch(USERS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (response.status === 429) {
      throw new Error("Too many requests. Please wait and try again later.");
    }
    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message);
    }
    return { success: true };
  } catch (error) {
    if (ENVIRONMENT === "development") console.log("Error in createUser:", error.message);
    return { success: false, message: "Server error: failed to create user. Please try again later." };
  }
};
