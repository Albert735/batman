import React from "react";
import { movie } from "../MovieCard"; // Assuming movies is an array

const Movie = ({ items }) => {
  return (
    <div id="movie" className="flex flex-wrap flex-col justify-center items-center bg-[#0E0F10] ">
      <div className="mt-5">
        <h1 className="batmfa text-[2rem] text-yellow-400">Top Movies</h1>
      </div>
      <div className="flex flex-col md:grid-cols-2  xl:flex-row justify-center items-center gap-10">
        {movie.map((movie) => (
          <div
            key={movie.id}
            className="my-[5rem] flex-row  w-[23rem] md:w-[20rem] bg-black p-3 rounded-xl hover:scale-105 hover:ease-in-out hover:delay-50 hover:duration-100 drop-shadow-xl"
          >
            {" "}
            {/* Use movie.id as the key */}
            <div className="flex justify-center items-center">
              <img
                src={movie.image}
                alt={movie.title}
                className="h-[25rem] w-full brightness-125 "
              />{" "}
              {/* Add alt text */}
            </div>
            <div className="w-[18rem] text-white text-justify space-y-4">
              <h1 className="font-mono font-semibold">{movie.title}</h1>
              {/* <p>{movie.description}</p> */}
            </div>
            <button className="bg-yellow-400 py-1 px-4 rounded-md">
              Watch
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movie;
