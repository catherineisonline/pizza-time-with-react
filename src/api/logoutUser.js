const ENVIRONMENT = import.meta.env.MODE;
import { LOGOUT_URL } from "../data/constants";

export const logoutUser = async () => {
  try {
    const response = await fetch(LOGOUT_URL, {
      method: "POST",
      credentials: "include",
    });
    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message);
    }
    return { success: true };
  } catch (error) {
    if (ENVIRONMENT === "development") console.log("Error when logging out:", error.message);
    return { success: false, message: "Server error: failed to log out user. Please try again later." };
  }
};
