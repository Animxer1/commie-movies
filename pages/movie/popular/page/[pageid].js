import Shell from "../../../../components/Shell";
import MovieDisplay from "../../../../components/MovieDisplay";

const fetcher = (url) => fetch(url).then((res) => res.json());

async function getServerSideProps({ query }) {
  const apiKey = process.env.API_KEY;
  const { pageid } = query;
  const data = await fetcher(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${pageid}`
  );

  return {
    props: {
      TopRatedPage: data?.results || [],
    },
  };
}

export default function TopPage({ TopRatedPage }) {
  return (
    <div className="top-rated-movies bg-zinc-900">
      <Shell>
        <MovieDisplay movie={TopRatedPage} />
      </Shell>
    </div>
  );
}

export { getServerSideProps };
