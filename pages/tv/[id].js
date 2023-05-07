import Shell from '../../components/Shell';
import TvInfo from '../../components/TvInfo';
import Head from 'next/head';

export async function getServerSideProps({ query }) {
  const { id } = query;
  const apiKey = process.env.API_KEY;

  const res = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=en-US`);
  const data = await res.json();

  const genreArr = data.genres.map((genre) => genre.name);

  return {
    props: {
      tvDetail: data,
      genreArr,
    },
  };
}

export default function TvDetail({ tvDetail, genreArr }) {
  return (
    <>
      <Head>
        <title>
          {tvDetail.name} ({tvDetail.first_air_date.substr(0, 4)}) - commiemovies.ml
        </title>
      </Head>

      <div className="popular-tv bg-zinc-900">
        <Shell>
          <TvInfo tvDetail={tvDetail} genreArr={genreArr} />
        </Shell>
      </div>
    </>
  );
}
