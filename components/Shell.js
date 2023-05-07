import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="w-full navbar bg-base-300">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                className="btn btn-square btn-ghost animate-pulse"
                style={{ "--animation-duration": "1s" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div href="/" className="flex-1 px-2 mx-2">
              CommieMovies
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                <li className="rounded-md">
                  <Link className="rounded-md" href="/">
                    Movies
                  </Link>
                </li>
                <li className="rounded-md">
                  <Link className="rounded-md" href="/tv">
                    Tv
                  </Link>
                </li>
                <li className="rounded-md">
                  <Link className="rounded-md" href="/search">
                    Search
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {children}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100">
            <li>
              <Link href="/">Movies</Link>
            </li>
            <li>
              <Link href="/tv">Tv</Link>
            </li>
            <li>
              <Link href="/search">Search</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
