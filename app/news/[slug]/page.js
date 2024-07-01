import { DUMMY_NEWS } from "@/dummy-news";

export default function NewsDetails({ params }) {
  const newsSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((item) => item.slug === newsSlug);
  return (
    <article>
      <header className="news-article">
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}
