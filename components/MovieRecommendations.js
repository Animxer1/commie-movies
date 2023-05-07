import Link from "next/link";
import { useState, useEffect } from "react";

const RecommendedMovies = ({ id }) => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  useEffect(() => {
    const fetchRecommendedMovies = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=04c908115dc6ff5e5aa3709b5a735393`
      );
      const { results } = await res.json();
      setRecommendedMovies(results);
    };
    fetchRecommendedMovies();
  }, [id]);

  const handleNextClick = () =>
    setCurrentMovieIndex(
      Math.min(currentMovieIndex + 5, recommendedMovies.length - 5)
    );
  const handlePrevClick = () =>
    setCurrentMovieIndex(Math.max(currentMovieIndex - 5, 0));

  return (
    <div className="recommended-movies py-4">
      <div className="flex items-center justify-between mb-4">
        <button
          className={`bg-gray-200 rounded-full p-2 ${
            !currentMovieIndex && "opacity-50 cursor-not-allowed"
          } hover:bg-gray-300`}
          onClick={handlePrevClick}
          disabled={!currentMovieIndex}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          className={`bg-gray-200 rounded-full p-2 ${
            currentMovieIndex === recommendedMovies.length - 5 &&
            "opacity-50 cursor-not-allowed"
          } hover:bg-gray-300`}
          onClick={handleNextClick}
          disabled={currentMovieIndex === recommendedMovies.length - 5}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      <div
        className="flex pb-4 recommended-movies-list animate-slide"
        style={{ width: "100%" }}
      >
        {recommendedMovies
          .slice(currentMovieIndex, currentMovieIndex + 5)
          .map(({ id, poster_path, title, overview, media_type }) => (
            <Link
              legacyBehavior
              href={media_type === "movie" ? `/movie/${id}` : `/tv/${id}`}
              key={id}
              passHref
            >
              <a
                className="focus:ring"
                style={{ flex: "1 1 20%", maxWidth: "20%" }}
              >
                <div className="pr-4">
                  <div className="bg-gray-900 shadow-lg rounded-lg aspect-square">
                    <img
                      className="w-full h-64 object-cover object-center aspect-square"
                      src={`https://image.tmdb.org/t/p/original${poster_path}`}
                      alt={title}
                      style={{ objectFit: "cover" }} // add this line
                    />

                    <div className="p-4">
                      <h3 className="font-medium text-white mb-2">{title}</h3>
                      <p className="text-white">{overview}</p>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default RecommendedMovies;
