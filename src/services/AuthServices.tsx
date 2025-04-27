import axios from "axios";

const api = axios.create({
  baseURL: "api/auth",
});

export const login = async (email: string, password: string) => {
  try {
    const response = await api.post("/login", {
      email,
      password,
    });

    if (response.status === 200) {
      const { token } = response.data;
      localStorage.setItem("token", token);
      return token;
    } else {
      throw new Error("Login failed. Please check your credentials.");
    }
  } catch (error) {
    console.error("Login error:", error);
    throw new Error("Login failed. Please try again.");
  }
};

export const logout = async () => {
  try {
    const response = await api.post("/logout");
    return response.data;
  } catch (error) {
    console.error("Logout error:", error);
    throw new Error("Logout failed. Please try again.");
  }
};
