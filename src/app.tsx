import React from "react";

import { useVeezoo } from "@fakeveezoo/react";

import "./milo.css";

const App = () => {
  const veezoo = useVeezoo();

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-md navbar-light bg-white absolute-top">
          <div className="container">
            <button
              className="navbar-toggler order-2 order-md-1"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse"
              aria-controls="navbar-left navbar-right"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse order-3 order-md-2"
              id="navbar-left"
            >
              <ul className="navbar-nav me-auto">
                <li className="nav-item dropdown active">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="dropdown01"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Home
                  </a>
                  <div className="dropdown-menu" aria-labelledby="dropdown01">
                    <a className="dropdown-item" href="home-onecolumn.html">
                      One column
                    </a>
                    <a className="dropdown-item" href="home-twocolumn.html">
                      Two column
                    </a>
                    <a className="dropdown-item" href="home-threecolumn.html">
                      Three column
                    </a>
                    <a className="dropdown-item" href="home-fourcolumn.html">
                      Four column
                    </a>
                    <a className="dropdown-item" href="home-featured.html">
                      Featured posts
                    </a>
                    <a className="dropdown-item" href="home-fullwidth.html">
                      Full width
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="dropdown02"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Posts
                  </a>
                  <div className="dropdown-menu" aria-labelledby="dropdown02">
                    <a className="dropdown-item" href="post-image.html">
                      Image
                    </a>
                    <a className="dropdown-item" href="post-video.html">
                      Video
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="dropdown03"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Components
                  </a>
                  <div className="dropdown-menu" aria-labelledby="dropdown03">
                    <a className="dropdown-item" href="doc-alerts.html">
                      Alerts
                    </a>
                    <a className="dropdown-item" href="doc-buttons.html">
                      Buttons
                    </a>
                    <a className="dropdown-item" href="doc-cards.html">
                      Cards
                    </a>
                    <a className="dropdown-item" href="doc-carousel.html">
                      Carousel
                    </a>
                    <a className="dropdown-item" href="doc-forms.html">
                      Forms
                    </a>
                    <a className="dropdown-item" href="doc-icons.html">
                      Icons
                    </a>
                    <a className="dropdown-item" href="doc-modals.html">
                      Modals
                    </a>
                    <a className="dropdown-item" href="doc-offcanvas.html">
                      Offcanvas
                    </a>
                    <a className="dropdown-item" href="doc-pagination.html">
                      Pagination
                    </a>
                    <a className="dropdown-item" href="doc-tables.html">
                      Tables
                    </a>
                    <a className="dropdown-item" href="doc-typography.html">
                      Typography
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <a
              className="navbar-brand mx-auto order-1 order-md-3"
              href="index.html"
            >
              Milø
            </a>

            <div
              className="collapse navbar-collapse order-4 order-md-4"
              id="navbar-right"
            >
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="page-about.html">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="page-contact.html">
                    Contact
                  </a>
                </li>
              </ul>
              <form className="form-inline" role="search">
                <input
                  className="search js-search form-control form-control-rounded me-sm-2"
                  type="text"
                  title="Enter search query here.."
                  placeholder="Search.."
                  aria-label="Search"
                />
              </form>
            </div>
          </div>
        </nav>
      </header>

      <main className="main">
        <div className="site-preview-intro">
          <div className="container">
            <div className="pt-4 pb-4 text-center">
              <h1 className="mb-3">
                Choose any of these &amp; create your own beautiful blog.
              </h1>
              <p className="mb-4">
                All of the sample layouts are included with your download.
                Select an example layout below to preview!
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <a
                  onClick={() => veezoo?.showDialog()}
                  className="btn btn-success btn-lg"
                >
                  Ask Veezoo!
                </a>
                <a
                  onClick={() => veezoo?.showSidebar()}
                  className="btn btn-success btn-lg"
                >
                  Open Sidebar
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="site-preview-choices">
          <div className="container">
            <div className="row">
              <div className="col-md-11 col-lg-12 mx-auto">
                <div className="row">
                  <div className="col-md-6 col-xl-4">
                    <article className="card mb-4">
                      <header className="card-header">
                        <a href="home-onecolumn.html">
                          <h4 className="card-title">
                            One column &amp; Sidebar
                          </h4>
                        </a>
                      </header>
                      <a href="home-onecolumn.html">
                        <img
                          className="card-img card-img-border"
                          src="img/screenshots/onecolumn.jpg"
                          alt="One column Bootstrap blog template"
                        />
                      </a>
                      <div className="card-body">
                        <p className="card-text">
                          One column magazine/blog layout with a sidebar on the
                          right.
                        </p>
                      </div>
                    </article>
                  </div>

                  <div className="col-md-6 col-xl-4">
                    <article className="card mb-4">
                      <header className="card-header">
                        <a href="home-twocolumn.html">
                          <h4 className="card-title">
                            Two columns &amp; Sidebar
                          </h4>
                        </a>
                      </header>
                      <a href="home-twocolumn.html">
                        <img
                          className="card-img card-img-border"
                          src="img/screenshots/twocolumn.jpg"
                          alt="Two column Bootstrap blog template"
                        />
                      </a>
                      <div className="card-body">
                        <p className="card-text">
                          Two column magazine/blog layout with a sidebar on the
                          right.
                        </p>
                      </div>
                    </article>
                  </div>

                  <div className="col-md-6 col-xl-4">
                    <article className="card mb-4">
                      <header className="card-header">
                        <a href="home-threecolumn.html">
                          <h4 className="card-title">Three columns</h4>
                        </a>
                      </header>
                      <a href="home-threecolumn.html">
                        <img
                          className="card-img card-img-border"
                          src="img/screenshots/threecolumn.jpg"
                          alt="Three column Bootstrap blog template"
                        />
                      </a>
                      <div className="card-body">
                        <p className="card-text">
                          Three column magazine/blog layout without sidebar.
                        </p>
                      </div>
                    </article>
                  </div>

                  <div className="col-md-6 col-xl-4">
                    <article className="card mb-4">
                      <header className="card-header">
                        <a href="home-fourcolumn.html">
                          <h4 className="card-title">Four columns</h4>
                        </a>
                      </header>
                      <a href="home-fourcolumn.html">
                        <img
                          className="card-img card-img-border"
                          src="img/screenshots/fourcolumn.jpg"
                          alt="Four column Bootstrap blog template"
                        />
                      </a>
                      <div className="card-body">
                        <p className="card-text">
                          Four column magazine/blog layout without sidebar.
                        </p>
                      </div>
                    </article>
                  </div>

                  <div className="col-md-6 col-xl-4">
                    <article className="card mb-4">
                      <header className="card-header">
                        <a href="home-featured.html">
                          <h4 className="card-title">Featured posts</h4>
                        </a>
                      </header>
                      <a href="home-featured.html">
                        <img
                          className="card-img card-img-border"
                          src="img/screenshots/featured.jpg"
                          alt="Bootstrap blog template with featured post"
                        />
                      </a>
                      <div className="card-body">
                        <p className="card-text">
                          Two column magazine/blog layout with featured posts
                          and a sidebar.
                        </p>
                      </div>
                    </article>
                  </div>

                  <div className="col-md-6 col-xl-4">
                    <article className="card mb-4">
                      <header className="card-header">
                        <a href="home-fullwidth.html">
                          <h4 className="card-title">Full width</h4>
                        </a>
                      </header>
                      <a href="home-fullwidth.html">
                        <img
                          className="card-img card-img-border"
                          src="img/screenshots/fullwidth.jpg"
                          alt="Full width Bootstrap blog template"
                        />
                      </a>
                      <div className="card-body">
                        <p className="card-text">
                          Full width magazine/blog layout with four columns.
                        </p>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="site-footer bg-dark">
        <div className="container">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Privacy policy
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Terms
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Feedback
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Advertise
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="page-contact.html">
                Contact
              </a>
            </li>
          </ul>
          <div className="copy">
            © Milo 2022
            <br />
            All rights reserved
          </div>
        </div>
      </footer>

      <script src="js/app.js"></script>
    </>
  );
};

export default App;
