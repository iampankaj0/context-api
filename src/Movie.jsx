import React from "react";

const Movie = ({ name, price }) => {
  return (
    <tr>
      <td>{name}</td> <td>{price}</td>
    </tr>
  );
};

export default Movie;
