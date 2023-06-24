import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useGlobalContext } from "../context/Context";
const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}&query=`;
const Gallery = () => {
  const { searchTerm } = useGlobalContext();
  const { isLoading, error, data } = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      return data.results;
    },
  });
  if (isLoading) {
    return (
      <div
        className="loading"
        style={{ margin: "0 auto", marginTop: "15px" }}
      ></div>
    );
  }
  if (!data || !Array.isArray(data)) {
    return <div>No data available</div>;
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "5px",
        alignContent: "center",
        textAlign: "center",
        marginTop: "20px",
        rowGap: "25px",
        marginBottom: "20px",
      }}
    >
      {data.map((images) => {
        const { id, urls, likes, alt_description } = images;
        return (
          <article key={id}>
            <img
              src={urls.full}
              alt={alt_description}
              style={{ width: "280px", height: "250px" }}
            />
            <div style={{ marginTop: "2px" }}>Likes: {likes}👍</div>
          </article>
        );
      })}
    </div>
  );
};

export default Gallery;
