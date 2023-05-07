import Link from "next/link";
import TvCards from "./TvCards";

const TvDisplay = ({ tv, pageid = 1 }) => {
  const pagenum = Array.from({ length: 10 }, (_, i) => i + 1);
  return (
    <div className="popular-movies md:mx-24">
      <div className="flex flex-wrap overflow-hidden sm:-mx-2 pl-2 md:-mx-2 lg:-mx-2 xl:-mx-2">
        {tv.map((TvCard) => {
          return <TvCards key={TvCard.id} TvCard={TvCard} />;
        })}
      </div>
      <div className="flex justify-center mt-8 space-x-4 mb-10">
        <Link
          legacyBehavior
          href={`/movie/popular/page/${Number(pageid) - 1}`}
          passHref
        >
          <a className="bg-gray-800 text-gray-300 rounded-full px-4 py-2 hover:bg-gray-700">
            &laquo; Prev
          </a>
        </Link>
        {pagenum.map((element) => {
          return (
            <Link
              legacyBehavior
              key={element}
              href={`/tv/popular/page/${element}`}
              passHref
            >
              <a
                className={`bg-gray-800 text-gray-300 rounded-full px-4 py-2 hover:bg-gray-700 ${
                  pageid == element ? "bg-gray-700" : ""
                }`}
              >
                {element}
              </a>
            </Link>
          );
        })}
        <Link
          legacyBehavior
          href={`/tv/popular/page/${Number(pageid) + 1}`}
          passHref
        >
          <a className="bg-gray-800 text-gray-300 rounded-full px-4 py-2 hover:bg-gray-700">
            Next &raquo;
          </a>
        </Link>
      </div>
    </div>
  );
};

export default TvDisplay;
