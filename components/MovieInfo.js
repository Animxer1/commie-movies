import { useState, useEffect } from "react";

const MovieInfo = ({ MovieDetail, genreArr, id }) => {
  const embedUrl = process.env.EMBED_URL;

  return (
    <div className="movie-details container mx-auto px-4 py-11 md:mx-24">
      <div className="flex flex-col md:flex-row movie-container justify-center items-center">
        <div className="w-full md:w-1/2 md:mr-10">
          <h2 className="text-4xl font-semibold text-white mb-4">
            {MovieDetail.title}
          </h2>
          <div className="flex items-center text-white text-sm mb-4">
            <svg
              className="fill-current text-orange-500 w-4 h-4 mr-1"
              viewBox="0 0 24 24"
            >
              <path d="M12 18.2l-5.1 2.7a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.13 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.17z" />
            </svg>
            <span>{MovieDetail.vote_average}</span>
            <span className="mx-2">|</span>
            <span>{MovieDetail.release_date}</span>
            <span className="mx-2">|</span>
            <span>{MovieDetail.runtime} minutes</span>
            <span className="mx-2">|</span>
            <span>{genreArr.join(", ")}</span>
          </div>

          <p className="text-white text-lg leading-7 mb-8">
            {MovieDetail.overview}
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <div className="aspect-w-16 aspect-h-9">
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
  );
};

export default MovieInfo;
