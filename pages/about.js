import { MainLayout } from '../components/layout';
import { useRouter } from 'next/router';
export default function About() {
  const route = useRouter();
  const back = () => {
    route.push('/about', '?test=asa', { shallow: true });
  };
  return (
    <div className='container'>
      <h1>About Us</h1>
      <button onClick={() => back()}>Back</button>
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here, content here, making it look
        like readable English. Many desktop publishing packages and web page
        editors now use Lorem Ipsum as their default model text.
      </p>
    </div>
  );
}
About.Layout = MainLayout;
