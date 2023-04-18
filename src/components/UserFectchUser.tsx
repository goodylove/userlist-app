import { useEffect, useState } from "react";

// interface user {
//   name: string;
//   email: string;
//   phone: number;
//   id: number;
//   address: string;
//   img: string;

//   // title: string;
// }
// [];
const useFetch = (url: string) => {
  const [data, setData] = useState<{
    name: string;
    email: string;
    phone: number;
    id: number;
    address: string;
    img: string;
    title: string;
  } | null>(null);

  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<any>(null);

  const fecthData = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
      setLoading(false);
      setErrorMessage(null);
      console.log(data);
    } catch (error) {
      setLoading(false);
      setErrorMessage(error);
    }
  };

  useEffect(() => {
    fecthData();
  }, [url]);

  return { data, loading, errorMessage };
};
export default useFetch;
