import Link from 'next/link';
export default function Footer() {
  return (
    <>
      <footer>
        <ul>
          <li>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href='/blog'>
              <a>Blog</a>
            </Link>
          </li>
        </ul>
      </footer>
    </>
  );
}
