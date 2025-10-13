const ENVIRONMENT = import.meta.env.MODE;
import { USERS_URL } from "../../../data/constants";

export const deleteUser = async (id) => {
  try {
    const response = await fetch(`${USERS_URL}/${id}`, {
      method: "DELETE",
      credentials: "include",
    });
    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message);
    }
    return { success: true };
  } catch (error) {
    if (ENVIRONMENT === "development") console.log("Error in deleteUser:", error.message);
    return { success: false, message: "Server error: failed to delete user. Please try again later." };
  }
};
