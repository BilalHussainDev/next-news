export default function NewsDetails({ params }) {
  const newsId = params.id;
  return (
    <>
      <h1>News Details Page</h1>
      <p>News ID: {newsId}</p>
    </>
  );
}
