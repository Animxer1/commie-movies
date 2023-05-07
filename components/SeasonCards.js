import Link from "next/link";

const SeasonCards = ({ seasonCards, tvDetail }) => {
  return (
    <div className="season-cards flex flex-row flex-wrap justify-start">
      {seasonCards.map((season, index) => {
        const { poster_path, season_number, name } = season;
        const posterUrl = poster_path
          ? `https://image.tmdb.org/t/p/w342${poster_path}`
          : "https://i.imgur.com/wjVuAGb.png";

        return (
          <div
            key={index}
            className="my-2 px-2 w-full overflow-hidden sm:my-2 sm:px-2 sm:w-1/2 md:my-2 md:px-2 md:w-1/4 lg:my-2 lg:px-2 lg:w-1/5 xl:my-2 xl:px-2 xl:w-1/5"
          >
            <div className="rounded-md overflow-hidden">
              <Link
                legacyBehavior
                href={`/tv/${tvDetail.id}/season/${season_number}`}
                as={`/tv/${tvDetail.id}/season/${season_number}`}
              >
                <a>
                  <img
                    className="w-full hover:opacity-70"
                    src={posterUrl}
                    alt={name}
                  />
                  <div className="flex text-white justify-center text-xl leading-0 font-semibold py-2">
                    {name}
                  </div>
                </a>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SeasonCards;
