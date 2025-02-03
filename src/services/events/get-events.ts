import api from "../api";

export const getEvents = async () => {
  try {
    const response = await api.get("/events");
    return response.data;
  } catch (error) {
    console.error("Erro no getEvents:", error);
    throw error;
  }
};

export const getEventById = async (id: number) => {
  console.log("getEventById", id);
  try {
    const response = await api.get(`/events/${id}`);
    console.log(response.data);
    return response.data;

  } catch (error) {
    console.error("Erro no getEventById:", error);
    throw error;
  }
};
