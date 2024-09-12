"use client"
import { useState } from 'react'
import NewsCard from './NewsCard'

export default function NewsContainer({ articles , len}) {
    const [paginationatin , setPagination] = useState(0);
  return (
    <>
        
      {
        articles?.slice(paginationatin*12 , paginationatin*12+12)?.map((news , index) => <NewsCard key={index} article={news}>hello</NewsCard>)
      }
      
    </>
  )
}
