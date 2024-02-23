import { useState, useEffect } from "react";
import AxiosInstance from "../api/http";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchEquipmentData = async () => {
    try {
      setIsLoading(true);
      const response = await AxiosInstance.get(url);
      if (response) {
        setData(response);
        setIsLoading(false);
      } else {
        console.error("API response is not in expected format");
      }
    } catch (error) {
      console.error("Error in API request:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEquipmentData();
  }, []);

  return [data, isLoading]
};

export default useFetch

