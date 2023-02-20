import React, { ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Custom Carousel Demo</title>
        <meta name="description" content="A demo page for a custom carousel" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" href="/">
              Logo
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className={`nav-link${
                      router.pathname == "/" ? " active" : ""
                    }`}
                    aria-current="page"
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Single Items
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" href="/single">
                        Simple
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/singleControls">
                        with Controls
                      </Link>
                    </li>

                    <li>
                      <Link className="dropdown-item" href="/singleIndicators">
                        with Indicators
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="dropdown-item disabled"
                        href="/singleControlsLessIndicators"
                        aria-disabled
                      >
                        with Less Indicators
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        href="/singleImageIndicators"
                      >
                        with Image Indicators
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="dropdown-item"
                        href="/singleControlsIndicators"
                      >
                        with Controls &amp; Indicators
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="dropdown-item disabled"
                        href="/singleControlsLessIndicators"
                        aria-disabled
                      >
                        with Controls &amp; Less Indicators
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        href="/singleControlsImageIndicators"
                      >
                        with Controls &amp; Image Indicators
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown2"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Multiple Items
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown2"
                  >
                    <li>
                      <Link className="dropdown-item" href="/multiple">
                        Simple
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/multipleControls">
                        with Controls
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="dropdown-item"
                        href="/multipleIndicators"
                      >
                        with Indicators
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="dropdown-item"
                        href="/multipleLessIndicators"
                      >
                        with Less Indicators
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="dropdown-item disabled"
                        href="/multipleImageIndicators"
                        aria-disabled
                      >
                        with Image Indicators
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="dropdown-item"
                        href="/multipleControlsIndicators"
                      >
                        with Controls &amp; Indicators
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="dropdown-item"
                        href="/multipleControlsLessIndicators"
                      >
                        with Controls &amp; Less Indicators
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="dropdown-item disabled"
                        href="/multipleControlsImageIndicators"
                        aria-disabled
                      >
                        with Controls &amp; Image Indicators
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
}
