import Link from "next/link";

const Menu = () => (
  <div>
    <ul>
      <li>
        <Link href="/page-a">
          <a>Page A</a>
        </Link>
      </li>
      <li>
        <Link href="/page-b">
          <a>Page B</a>
        </Link>
      </li>
      <li>
        <Link href="/page-c">
          <a>Page C</a>
        </Link>
      </li>
    </ul>
  </div>
);

export default Menu;
