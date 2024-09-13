"use client"

export default function NewsCard({ article, setActive }) {
  return (
    <div className='w-full max-w-[400px] flex flex-col rounded overflow-hidden bg-white shadow-[0_0_2px_gray_inset] hover:shadow-[0_0_3px_black] hover:scale-[1.01]'>
      <img src={article.image} />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{article.title}</h2>
        <p className="text-sm">{article.description.substring(0 , 80)}...<span className="underline text-blue-800 cursor-pointer hover:text-blue-600" onClick={() => setActive(article)}>read more</span></p>      
      </div>
    </div>
  )
}
