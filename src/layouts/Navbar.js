import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="uk-navbar-container uk-margin-bottom" uk-navbar="true">
        <div className="uk-navbar-left">
          <div className="uk-container">
          <ul className="uk-navbar-nav">
            <li>
              <Link
                className="uk-navbar-item uk-logo uk-text-capitalize uk-text-bold"
                to="/recent-now"
              >
               <span uk-icon="icon: album"></span> awesome news
              </Link>
            </li>
            <li>
              <Link
                to="/recent-now"
                className="uk-text-capitalize uk-text-normal"
              >
                Recent News
              </Link>
            </li>
            <li>
              <Link
                to="/top-rated"
                className="uk-text-capitalize uk-text-normal"
              >
                Top rated
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="uk-text-capitalize uk-text-normal"
              >
                categories
              </Link>
            </li>
          </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
