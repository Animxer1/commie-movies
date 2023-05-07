// Import required components and libraries
import Link from "next/link";
import MovieCard from "./MovieCards";

// MovieDisplay component takes movie data and pageid as props
const MovieDisplay = ({ movie, pageid }) => {
  // Create an array of 10 pages for pagination
  const pagenum = Array.from({ length: 10 }, (_, i) => i + 1);
  // Ensure pageid is a valid number, otherwise set it to 1
  pageid = isNaN(pageid) ? 1 : +pageid;

  // Return the JSX structure for the MovieDisplay component
  return (
    <div className="popular-movies md:mx-24">
      {/* Display movie cards in a responsive grid */}
      <div className="flex flex-wrap overflow-hidden sm:-mx-2 pl-2 md:-mx-2 lg:-mx-2 xl:-mx-2">
        {movie.map((movieCard) => (
          <MovieCard
            key={movieCard.id}
            MovieCard={movieCard}
            className="justify-center rounded-md"
          />
        ))}
      </div>
      {/* Pagination */}
      <div className="flex justify-center mt-8 space-x-4 mb-10">
        {/* Previous page link */}
        <Link legacyBehavior href={`/movie/popular/page/\${pageid - 1}`} passHref>
          <a className="bg-gray-800 text-white rounded-full px-4 py-2 hover:bg-gray-700">
            &laquo; Prev
          </a>
        </Link>
        {/* Page number links */}
        {pagenum.map((element) => (
          <Link legacyBehavior key={element} href={`/movie/popular/page/\${element}`} passHref>
            <a
              className={`bg-gray-800 text-white rounded-full px-4 py-2 hover:bg-gray-700 ${
                pageid === element ? "bg-gray-700" : ""
              }`}
            >
              {element}
            </a>
          </Link>
        ))}
        {/* Next page link */}
        <Link legacyBehavior href={`/movie/popular/page/\${pageid + 1}`} passHref>
          <a className="bg-gray-800 text-white rounded-full px-4 py-2 hover:bg-gray-700">
            Next &raquo;
          </a>
        </Link>
      </div>
    </div>
  );
};

// Export the MovieDisplay component
export default MovieDisplay;
