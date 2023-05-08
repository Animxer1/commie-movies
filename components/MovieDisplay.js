import Link from "next/link";
import MovieCard from "./MovieCards";

const MovieDisplay = ({ movie, pageid }) => {
  // Create an array of page numbers
  const pagenum = Array.from({ length: 10 }, (_, i) => i + 1);
  // Ensure pageid is a number and defaults to 1 if not
  pageid = isNaN(pageid) ? 1 : +pageid;

  // Render a single pagination item
  const renderPaginationItem = (element) => (
    <Link legacyBehavior key={element} href={`/movie/popular/page/${element}`} passHref>
      <a
        className={`bg-gray-800 text-white rounded-full px-4 py-2 hover:bg-gray-700 ${
          pageid === element ? "bg-gray-700" : ""
        }`}
      >
        {element}
      </a>
    </Link>
  );

  return (
    <div className="popular-movies md:mx-24">
      {/* Render movie cards */}
      <div className="flex flex-wrap overflow-hidden sm:-mx-2 pl-2 md:-mx-2 lg:-mx-2 xl:-mx-2">
        {movie?.map((movieCard) => (
          <MovieCard
            key={movieCard.id}
            MovieCard={movieCard}
            className="justify-center rounded-md"
          />
        ))}
      </div>
      {/* Render pagination */}
      <div className="flex justify-center mt-8 space-x-4 mb-10">
        <Link legacyBehavior href={`/movie/popular/page/${pageid - 1}`} passHref>
          <a className="bg-gray-800 text-white rounded-full px-4 py-2 hover:bg-gray-700">
            &laquo; Prev
          </a>
        </Link>
        {pagenum.map(renderPaginationItem)}
        <Link legacyBehavior href={`/movie/popular/page/${pageid + 1}`} passHref>
          <a className="bg-gray-800 text-white rounded-full px-4 py-2 hover:bg-gray-700">
            Next &raquo;
          </a>
        </Link>
      </div>
    </div>
  );
};

export default MovieDisplay;
