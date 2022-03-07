import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Trending() {
  const [content, setContent] = useState([]);

  const API_KEY = "0cd84998c93ed913012040a5864651ee";
  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
    );
    setContent(data.results);
  };
  useEffect(() => {
    fetchTrending();
  }, []);
  return (
    <div>
      <span className="pageTitle">{process.env.REACT_APP_API_KEY}</span>
    </div>
  );
}
