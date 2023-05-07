import { useState, useEffect } from "react";
import Link from "next/link";

const EpisodeInfo = ({ EpisodeDetail, seasonid, epid, showid }) => {
  const embedUrl = process.env.EMBED_URL;
  const [prevEp, setPrevEp] = useState(null);
  const [nextEp, setNextEp] = useState(null);

  useEffect(() => {
    setPrevEp(epid > 1 ? epid - 1 : null);
    setNextEp(parseInt(epid) + 1);
  }, [epid]);

  return (
    <div className="episode-details container mx-auto px-4 py-11 md:mx-24">
      <div className="flex flex-col md:flex-row episode-container justify-center items-center">
        <div className="w-full md:w-1/2 md:mr-10">
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">
            {seasonid} x {epid} : {EpisodeDetail.name}
          </h2>
          <div className="text-gray-500 text-sm mb-4">
            {EpisodeDetail.air_date}
          </div>
          <p className="text-gray-700 text-lg leading-7 mb-8">
            {EpisodeDetail.overview}
          </p>
          <div className="flex items-center text-gray-500 text-sm mb-4">
            <span>{EpisodeDetail.vote_average}</span>
            <span className="mx-2">|</span>
            <span>{EpisodeDetail.vote_count} votes</span>
          </div>
          <div className="flex justify-center">
            {prevEp && (
              <Link href={`/tv/${showid}/season/${seasonid}/${prevEp}`}>
                <a className="bg-gray-900 text-white px-6 py-3 rounded-md mr-4">
                  Previous Episode
                </a>
              </Link>
            )}

            {nextEp && (
              <Link href={`/tv/${showid}/season/${seasonid}/${nextEp}`}>
                <a className="bg-gray-900 text-white px-6 py-3 rounded-md">
                  Next Episode
                </a>
              </Link>
            )}
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full rounded-lg aspect-video"
              src={`https://www.2embed.to/embed/tmdb/tv?id=${showid}&s=${seasonid}&e=${epid}`}
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EpisodeInfo;
