import NewsContainer from './__components/NewsContainer';
const url = `https://gnews.io/api/v4/search?q=example&lang=en&country=us&apikey=${process.env.API_KEY}`;

export default async function page() {
  const articles = await fetch(url)
                          .then(res => res.json())
                          .then(data => data.articles);  
                          
  return (
    <div className="min-h-screen flex flex-wrap p-4 gap-4 itemscenter justify-center bg-gray-100">
      <NewsContainer articles={articles} max={Math.ceil(articles.length / 12)}/>
    </div>
  )
}
