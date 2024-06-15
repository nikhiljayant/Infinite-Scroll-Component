import axios from "axios";
import "./App.css";
import Card from "./components/Card.jsx";
import { useEffect, useState } from "react";
import LoadingComponent from "./components/LoadingComponent.jsx";

function App() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?_limit=9&page=${page}`)
      .then((res) => {
        setData((prev) => [...prev, ...res?.data]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setPage((prev) => prev + 1);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

  return (
    <>
      <Card data={data} />
      {loading && <LoadingComponent />}
    </>
  );
}

export default App;
