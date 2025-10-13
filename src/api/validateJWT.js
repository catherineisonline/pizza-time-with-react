const ENVIRONMENT = import.meta.env.MODE;
import { AUTH_URL } from "../data/constants";

export const validateJWT = async () => {
  try {
    const response = await fetch(AUTH_URL, {
      method: "GET",
      credentials: "include",
    });
    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message);
    }
    return { success: true, user: result.user };
  } catch (error) {
    if (ENVIRONMENT === "development") console.log("Error when validating JWT:", error.message);
    return { success: false };
  }
};
