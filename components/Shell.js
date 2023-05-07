// Import the Link component from Next.js
import Link from "next/link";

// Define the Layout component that wraps its children with the layout
export default function Layout({ children }) {
  return (
    <>
      {/* The drawer component containing the navigation and the children components */}
      <div className="drawer">
        {/* The input that toggles the drawer on smaller screens */}
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

        {/* The main content of the drawer, including the navigation and children */}
        <div className="drawer-content flex flex-col">
          {/* The navbar at the top of the drawer */}
          <div className="w-full navbar bg-base-300">
            {/* The button for toggling the drawer on smaller screens */}
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
            {/* The title of the website */}
            <div href="/" className="flex-1 px-2 mx-2">
              CommieMovies
            </div>
            {/* The navigation menu for larger screens */}
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                <li className="rounded-md">
                  <Link legacyBehavior className="rounded-md" href="/">
                    Movies
                  </Link>
                </li>
                <li className="rounded-md">
                  <Link legacyBehavior className="rounded-md" href="/tv">
                    Tv
                  </Link>
                </li>
                <li className="rounded-md">
                  <Link legacyBehavior className="rounded-md" href="/search">
                    Search
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Render the children components within the layout */}
          {children}
        </div>

        {/* The side navigation for smaller screens */}
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100">
            <li>
              <Link legacyBehavior href="/">
                Movies
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/tv">
                Tv
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/search">
                Search
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
