import Header from '../header';
export default function SingleLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
