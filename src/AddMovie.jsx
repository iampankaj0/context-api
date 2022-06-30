import React, { useContext, useState } from "react";
import { myContext } from "./MovieContext";

const AddMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [movies, setMovies] = useContext(myContext);

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updatePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMovies((prevMovie) => [...prevMovie, { name: name, price: price }]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={name} onChange={updateName} />
        <input type="text" name="price" value={price} onChange={updatePrice} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddMovie;
