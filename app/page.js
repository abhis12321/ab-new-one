import axios from 'axios';
// const url = `https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=${process.env.API_KEY}`;
const url = `https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=1855f8ce894cbf07951326030e9fb99b`;

export default async function page() {
  const data = await fetch(url)
                          .then(res => res.json())
                          .then(data => data.articles);
  console.log(data);
  
  return (
    <div className="">
      {
        data?.map((news , index) => <div key={index}>hello</div>)
      }
    </div>
  )
}
