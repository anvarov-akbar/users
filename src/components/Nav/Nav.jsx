import { NavLink } from "react-router-dom";
import useNav from "../../Hooks/useNav";

import HomeIcon from "../Img/icons/Home";
import Subscription from "../Img/icons/Subscription"
import Trending from "../Img/icons/Trending";
import Library from "../Img/icons/Library";
import History from "../Img/icons/History";
import Watch from "../Img/icons/Watch";
import Favourites from "../Img/icons/Favourites";
import Likes from "../Img/icons/Likes";
import Music from"../Img/icons/Music";
import Games from "../Img/icons/Games";
import ArrowDown from "../Img/icons/ArrowDown";

import "./Nav.css";

const Nav = () => {
  const [isOpen] = useNav();

  return (
    <nav className={`nav ${isOpen ? "nav--open" : ""}`}>
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink
            className={({ isActive }) => `nav__link ${isActive ? "nav__link--active" : ""}`}
            to={"/"}
          >
            <HomeIcon />

            <span className="nav__item__text">Home</span>
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink
            className={({ isActive }) => `nav__link ${isActive ? "nav__link--active" : ""}`}
            to={"/trending"}
          >
            <Trending />

            <span className="nav__item__text">Trending</span>
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink
            className={({ isActive }) => `nav__link ${isActive ? "nav__link--active" : ""}`}
            to={"/subscriptions"}
          >
            <Subscription />

            <span className="nav__item__text">Subscription</span>
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink
            className={({ isActive }) => `nav__link ${isActive ? "nav__link--active" : ""}`}
            to={"/library"}
          >
            <Library />

            <span className="nav__item__text">Library</span>
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink
            className={({ isActive }) => `nav__link ${isActive ? "nav__link--active" : ""}`}
            to={"/history"}
          >
            <History />

            <span className="nav__item__text">History</span>
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink
            className={({ isActive }) => `nav__link ${isActive ? "nav__link--active" : ""}`}
            to={"/watch-later"}
          >
            <Watch />

            <span className="nav__item__text">Watch later</span>
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink
            className={({ isActive }) => `nav__link ${isActive ? "nav__link--active" : ""}`}
            to={"/favourites"}
          >
            <Favourites />

            <span className="nav__item__text">Favourites</span>
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink
            className={({ isActive }) => `nav__link ${isActive ? "nav__link--active" : ""}`}
            to={"/liked-videos"}
          >
            <Likes />

            <span className="nav__item__text">Liked videos</span>
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink
            className={({ isActive }) => `nav__link ${isActive ? "nav__link--active" : ""}`}
            to={"/music"}
          >
            <Music />

            <span className="nav__item__text">Music</span>
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink
            className={({ isActive }) => `nav__link ${isActive ? "nav__link--active" : ""}`}
            to={"/games"}
          >
            <Games />

            <span className="nav__item__text">Games</span>
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink
            className={({ isActive }) => `nav__link ${isActive ? "nav__link--active" : ""}`}
            to={"/more"}
          >
            <ArrowDown />

            <span className="nav__item__text">Show more</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
