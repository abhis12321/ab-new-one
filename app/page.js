import { articles } from './__components/articles';
import NewsCard from './__components/NewsCard';
import NewsContainer from './__components/NewsContainer';
const url = `https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=${process.env.API_KEY}`;
// const url = `https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=20&apikey=1855f8ce894cbf07951326030e9fb99b`;

export default async function page() {
  // const data = await fetch(url)
  //                         .then(res => res.json())
  //                         .then(data => data.articles);  
  return (
    <div className="flex flex-wrap p-4 gap-4 itemscenter justify-center bg-gray-100">
      <NewsContainer articles={articles} len={articles.length}/>
    </div>
  )
}
