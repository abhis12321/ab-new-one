"use client"
import { useEffect, useState } from 'react'
import NewsCard from './NewsCard'

export default function NewsContainer({ articles , max}) {
    const [paginationatin , setPagination] = useState(0);
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
      
      <div className="w-full flex items-center justify-around text-white font-bold text-sm">
        <button className="w-[100px] py-2 text-center rounded-full bg-blue-600/80 hover:bg-blue-600" onClick={handlePrevious} >previous</button>
        <button className="w-[100px] py-2 text-center rounded-full bg-blue-600/80 hover:bg-blue-600" onClick={handleNext}>next</button>
      </div>
    </>
  )
}
