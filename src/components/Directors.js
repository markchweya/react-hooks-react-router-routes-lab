import React from "react";
import { directors } from "../data";

function Directors() {
  return <div>{/*{code here}*/}</div>;
}

const Directors = () => {
  const directorItems = directors.map((director) => (
    <div key={director.name}>
      <h2>{director.name}</h2>
      <ul>
        {director.movies.map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
  ));


export default Directors;

return (
  <div>
    <h1>Directors Page</h1>
    {directorItems}
  </div>
);
};

