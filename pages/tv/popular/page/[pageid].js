import Shell from "../../../../components/Shell";
import TvDisplay from "../../../../components/TvDisplay";

export async function getServerSideProps({ query }) {
  const { pageid } = query;
  const apiKey = process.env.API_KEY;
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=${pageid}`
  );
  const data = await res.json();
  return {
    props: {
      PopulartvPage: data.results,
      pageid,
    },
  };
}

export default function PopulartvPage({ PopulartvPage, pageid }) {
  return (
    <div className="popular-tv bg-zinc-900">
      <Shell>
        <TvDisplay tv={PopulartvPage} pageid={pageid} />
      </Shell>
    </div>
  );
}
