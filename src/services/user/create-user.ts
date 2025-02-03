import api from "../api";

export const createUser = async (userData: { name: string; email: string; password: string }) => {
    try {
      const response = await api.post("/user", userData);
      return response.data;
    } catch (error) {
      console.error("Erro no createUser:", error);
      throw error;
    }
  };
  