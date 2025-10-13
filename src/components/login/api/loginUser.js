const ENVIRONMENT = import.meta.env.MODE;
import { LOGIN_URL } from "../../../data/constants";

export const loginUser = async (email, password) => {
  try {
    const response = await fetch(LOGIN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });
    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message);
    }
    return { success: true, user: result.user };
  } catch (error) {
    if (ENVIRONMENT === "development") console.log("Error in loginUser:", error.message);
    return { success: false, message: "Server error: failed to login. Please try again later." };
  }
};
