import SeasonCards from "./SeasonCards";
import { useMemo } from "react";

const TvInfo = ({ tvDetail, genreArr }) => {
  const seasons = useMemo(() => tvDetail?.seasons ?? [], [tvDetail]);

  return (
    <div className="tv-details md:pr-24">
      <div className="container mx-auto px-4 py-11 flex flex-col md:flex-row movie-container">
        <div className="md:ml-24">
          <h2 className="text-4xl mt-4 md:mt-0 font-semibold text-gray-300">
            {tvDetail.name}
          </h2>
          <div className="flex flex-wrap items-center text-gray-300 text-sm my-4">
            <svg
              className="fill-current text-orange-500 w-4"
              viewBox="0 0 24 24"
            >
              <path
                d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z"
                data-name="star"
              />
            </svg>
            <span className="ml-1">{tvDetail.vote_average}</span>
            <span className="mx-2">|</span>
            <span>{tvDetail.first_air_date}</span>
            <span className="mx-2">|</span>
            <span>{`${tvDetail.episode_run_time[0]} minutes.`}</span>
            <span className="mx-2">|</span>
            <span>{genreArr.join(" , ")}</span>
          </div>

          <p className="text-gray-300 mt-8">{tvDetail.overview}</p>

          <div className="mt-12">
            <SeasonCards
              key={tvDetail.id}
              seasonCards={seasons}
              tvDetail={tvDetail}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TvInfo;
