import axios from "axios";

export const checkConnectivity = async () => {
  try {
    await axios.get("/");
    return true;
  } catch (error) {
    return false;
  }
};
