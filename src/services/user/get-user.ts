import api from "../api";

export const loginUser = async (name: string,email: string, password: string) => {
  try {
    const response = await api.post("/user", {name, email, password });
    return response.data;
  } catch (error) {
    console.error("Erro no loginUser:", error);
    throw error;
  }
};
