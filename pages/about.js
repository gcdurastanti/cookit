import Link from 'next/link';
import NavBar from '../components/NavBar';

export default function About() {
  return (
    <div>
      <NavBar />
      <div>
        Welcome to the about page. Go to the{' '}
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        page.
      </div>
    </div>
  );
}
