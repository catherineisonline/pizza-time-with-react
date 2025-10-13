const ENVIRONMENT = import.meta.env.MODE;
import { UPDATE_URL } from "../data/constants";

export const updateUser = async (user) => {
  try {
    const response = await fetch(UPDATE_URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(user),
    });
    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message);
    }
    return { success: true, user: result.data };
  } catch (error) {
    if (ENVIRONMENT === "development") console.log("Error in updateUser:", error.message);
    return { success: false, message: "Server error: failed to update profile. Please try again later." };
  }
};
