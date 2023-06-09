import axios from "axios";

export const checkConnectivity = async () => {
  try {
    axios.get("/");
    return true;
  } catch (error) {
    return false;
  }
};
