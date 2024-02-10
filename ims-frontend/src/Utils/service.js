import api from "./api";

export const handleRegister = async (value) => {
  try {
    const response = await api.post("/api/auth/register", value);
    if (response.statusCode === 200) {
      return true;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};
export const handleLogin = async (value) => {
    try {
      const response = await api.post("/api/auth/login", value);
      if (response.statusCode === 200) {
        return response;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  };
