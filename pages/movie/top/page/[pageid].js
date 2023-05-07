import Shell from "../../../../components/Shell";
import MovieDisplay from "../../../../components/MovieDisplay";

async function getServerSideProps({ query }) {
  const apiKey = process.env.API_KEY;
  const { pageid } = query;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=${pageid}`
  );
  const data = await res.json();
  return {
    props: {
      TopRatedPage: data.results || [],
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
