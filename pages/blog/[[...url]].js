import { MainLayout } from '../../components/layout';
import { useRouter } from 'next/router';
export default function Post() {
  const route = useRouter();
  const { url, action } = route.query;
  console.log(route.query);
  return (
    <div className='container'>
      <h1>Post - {url}</h1>
      <p>It is a long established fact that a reader.</p>
    </div>
  );
}
Post.Layout = MainLayout;
