// Import React library
import React from "react";

// Define MovieInfo functional component
const MovieInfo = ({ MovieDetail, genreArr, id }) => {
  // Destructure properties from MovieDetail object
  const { title, vote_average, release_date, runtime, overview } = MovieDetail;

  return (
    <>
      {/* Container for movie details */}
      <div className="movie-details container mx-auto px-4 py-11 md:mx-24">
        {/* Flex container for movie information and video */}
        <div className="flex flex-col md:flex-row movie-container justify-center items-center">
          {/* Movie information container */}
          <div className="w-full md:w-1/2 md:mr-10">
            {/* Movie title */}
            <h2 className="text-4xl font-semibold text-white mb-4">{title}</h2>
            {/* Movie details (rating, release date, runtime, genres) */}
            <div className="flex items-center text-white text-sm mb-4">
              <svg
                className="fill-current text-orange-500 w-4 h-4 mr-1"
                viewBox="0 0 24 24"
              ></svg>
              <span>{vote_average}</span>
              <span
                className={`text-white text-sm mb-4 \\${
                  vote_average && "mx-2"
                }`}
              >
                |
              </span>
              <span>{release_date}</span>
              <span className="mx-2">|</span>
              <span>{runtime} minutes</span>
              <span className="mx-2">|</span>
              <span>{genreArr.join(", ")}</span>
            </div>
            {/* Movie overview */}
            <p className="text-white text-lg leading-7 mb-8">{overview}</p>
          </div>
          {/* Video container */}
          <div className="w-full md:w-1/2">
            <div className="aspect-w-16 aspect-h-9">
              {/* Video iframe */}
              <iframe
                className="w-full h-full rounded-lg aspect-video"
                src={`https://www.2embed.to/embed/tmdb/movie?id=${id}`}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Export MovieInfo component
export default MovieInfo;
