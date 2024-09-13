"use client"
import { useState } from 'react'
import NewsCard from './NewsCard'
import Pagination from './Pagination'
import ActiveArticle from './ActiveArticle'

export default function NewsContainer({ articles, max }) {
  const [active, setActive] = useState();
  const [pagination, setPagination] = useState(0);

  const handlePrevious = () => {
    setPagination(prev => (prev - 1 + max) % max)
  }

  const handleNext = () => {
    setPagination(prev => (prev + 1) % max)
  }

  return (
    <>

      {
        active ? <ActiveArticle article={active} cancelActive={() => setActive(null)} />
          :
          <>
            {
              articles?.slice(pagination * 12, pagination * 12 + 12)?.map((news, index) => <NewsCard key={index} article={news} setActive={setActive} />)
            }

            <Pagination pagination={pagination} setPagination={setPagination} max={max} handleNext={handleNext} handlePrevious={handlePrevious} />
          </>
      }

    </>
  )
}
