import navStyles from "../styles/Nav.module.css";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/photos'>
            <a>Photos</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
