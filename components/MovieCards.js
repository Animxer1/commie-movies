import Link from "next/link";

const MovieCards = ({ MovieCard }) => {
  let poster_path = `https://image.tmdb.org/t/p/w342${
    MovieCard.poster_path ?? "/wjVuAGb.png"
  }`;
  return (
    <div className="my-2 px-2 w-full overflow-hidden sm:my-2 sm:px-2 sm:w-1/2 md:my-2 md:px-2 md:w-1/4 lg:my-2 lg:px-2 lg:w-1/5 xl:my-2 xl:px-2 xl:w-1/5">
      <div className="rounded-md overflow-hidden">
        <Link
          legacyBehavior
          key={MovieCard.id}
          href="/movie/[id]"
          as={`/movie/${MovieCard.id}`}
        >
          <a title={MovieCard.title}>
            <img
              className="w-full h-auto hover:opacity-70 rounded-md"
              title={MovieCard.title}
              src={poster_path}
              alt={MovieCard?.title}
            />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default MovieCards;
