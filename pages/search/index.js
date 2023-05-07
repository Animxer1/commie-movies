import { useState, useEffect } from "react";
import Link from "next/link";
import Shell from "../../components/Shell";
import { useDebounce } from "use-debounce";
import Head from "next/head";

const Search = ({ apiKey }) => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState();
  const [value] = useDebounce(query, 1000);

  useEffect(() => {
    const fetchData = async () => {
      if (query) {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&page=1&query=${value}`
        );
        const { results: apiData } = await res.json();
        setData(apiData);
      }
    };
    fetchData();
  }, [value]);

  return (
    <div className="bg-zinc-900 min-h-screen">
      <Head>
        <title>Search - commiemovies.ml</title>
      </Head>

      <Shell>
        <div className="flex justify-center flex-grow text-white">
          <input
            className="h-10 rounded-full py-2 px-4 bg-zinc-800 text-white text-center border-none w-full md:w-auto"
            placeholder="🔍 Search movie or show"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="popular-movies grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
          {data?.map((movie) => {
            const {
              id,
              media_type,
              poster_path,
              title,
              name,
              first_air_date,
              release_date,
            } = movie;
            const posterPath = poster_path
              ? `https://image.tmdb.org/t/p/original${poster_path}`
              : "https://i.imgur.com/wjVuAGb.png";
            const year = (first_air_date ?? release_date)?.substr(0, 4) ?? "";
            const url = media_type === "movie" ? `/movie/${id}` : `/tv/${id}`;
            return (
              <div
                key={id}
                className="bg-zinc-800 rounded-lg overflow-hidden hover:opacity-70"
              >
                <Link legacyBehavior href={url}>
                  <a className="block">
                    <img
                      className="object-cover w-full h-80 sm:h-96"
                      src={posterPath}
                      alt={title || name}
                    />
                    <p className="px-2 py-1 text-white text-sm truncate">
                      {title || name}{" "}
                      <span className="text-gray-400 text-xs">{year}</span>
                    </p>
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </Shell>
    </div>
  );
};

export default Search;

export async function getServerSideProps() {
  return {
    props: {
      apiKey: process.env.API_KEY,
    },
  };
}
