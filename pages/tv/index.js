import Head from "next/head";
import dynamic from "next/dynamic";
import Shell from "../../components/Shell";
import TvDisplay from "../../components/TvDisplay";

export async function getServerSideProps() {
  const apiKey = process.env.API_KEY;
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`
  );
  const data = await res.json();
  if (res.ok) {
    return {
      props: {
        popularTV: data.results,
      },
    };
  }
}

export default function tvHome({ popularTV }) {
  return (
    <>
      <Head>
        <title>TV - commiemovies.ml</title>
      </Head>
      <div className="popular-tv bg-zinc-900">
        <Shell>
          <TvDisplay tv={popularTV} />
        </Shell>
      </div>
    </>
  );
}
