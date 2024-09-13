"use client"
import { useEffect, useState } from 'react'
import NewsCard from './NewsCard'

export default function NewsContainer({ articles , max}) {
    const [paginationatin , setPagination] = useState(0);
    const pages = Array.from({ length:max } , (_ , i) => i + 1);
    
    useEffect(() => {
        console.log(paginationatin , max , articles.length);
    }, [paginationatin]);

    const handlePrevious = () => {
        setPagination(prev => (prev - 1 + max) % max)
    }
    
    const handleNext = () => {
        setPagination(prev => (prev + 1) % max)
    }
    
  return (
    <>
        
      {
        articles?.slice(paginationatin*12 , paginationatin*12 + 12)?.map((news , index) => <NewsCard key={index} article={news} />)
      }
      
      <div className="w-full flex flex-wrap items-center justify-around text-white font-bold text-sm">
        <button className={`py-[10px] px-5 text-4xl font-normal text-center rounded-full scale-y-125 shadow-[0_0_5px_white_inset] text-gray-300 ${paginationatin === 0 ? "bg-black/40 cursor-auto" : "bg-blue-600/80 hover:bg-blue-600 text-white"}`} onClick={handlePrevious} >&lt;</button>
        {
          pages.map((pageNo , index) => <button className={`py-4 px-6 text-xl text-center rounded-lg ${paginationatin === index ? "ring-gray-950 ring-1 bg-green-700" : "bg-blue-600/80 hover:bg-blue-600"}`} onClick={() => setPagination(index)} key={index}>{ pageNo }</button>)
        }
        <button className={`py-[10px] px-5 text-4xl font-normal text-center rounded-full scale-y-125 shadow-[0_0_5px_white_inset] text-gray-300 ${paginationatin === max-1 ? "bg-black/40 cursor-auto" : "bg-blue-600/80 hover:bg-blue-600 text-white"}`} onClick={handleNext}>&gt;</button>
      </div>
    </>
  )
}
