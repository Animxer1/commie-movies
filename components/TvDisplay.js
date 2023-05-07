// Import required components
import Link from "next/link";
import TvCards from "./TvCards";

// TvDisplay component definition
const TvDisplay = ({ tv, pageid = 1 }) => {
  // Create an array of page numbers for pagination
  const pagenum = Array.from({ length: 10 }, (_, i) => i + 1);

  // Return the JSX for the TvDisplay component
  return (
    <div className="popular-movies md:mx-24">
      {/* Display a grid of TV cards */}
      <div className="flex flex-wrap overflow-hidden sm:-mx-2 pl-2 md:-mx-2 lg:-mx-2 xl:-mx-2">
        {tv.map((TvCard) => (
          <TvCards key={TvCard.id} TvCard={TvCard} />
        ))}
      </div>
      {/* Create pagination navigation */}
      <div className="flex justify-center mt-8 space-x-4 mb-10">
        {/* Previous page link */}
        <Link
          legacyBehavior
          href={`/movie/popular/page/\\${Number(pageid) - 1}`}
          passHref
        >
          <a className="bg-gray-800 text-white rounded-full px-4 py-2 hover:bg-gray-700">
            &laquo; Prev
          </a>
        </Link>
        {/* Page number links */}
        {pagenum.map((element) => (
          <Link
            legacyBehavior
            key={element}
            href={`/tv/popular/page/\\${element}`}
            passHref
          >
            <a
              className={`bg-gray-800 text-white rounded-full px-4 py-2 hover:bg-gray-700 ${
                pageid == element ? "bg-gray-700" : ""
              }`}
            >
              {element}
            </a>
          </Link>
        ))}
        {/* Next page link */}
        <Link
          legacyBehavior
          href={`/tv/popular/page/\${Number(pageid) + 1}`}
          passHref
        >
          <a className="bg-gray-800 text-white rounded-full px-4 py-2 hover:bg-gray-700">
            Next &raquo;
          </a>
        </Link>
      </div>
    </div>
  );
};

// Export TvDisplay component as default
export default TvDisplay;
