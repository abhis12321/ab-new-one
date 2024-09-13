export default function Pagination({ pagination , setPagination, max, handleNext, handlePrevious }) {
    const pages = Array.from({ length: max })
  return (
    <div className="w-full flex flex-wrap items-center justify-around text-white font-bold text-sm">
      <button className={`py-[10px] px-5 text-4xl font-normal text-center rounded-full scale-y-125 shadow-[0_0_5px_white_inset] text-gray-300 ${pagination === 0 ? "bg-black/40 cursor-auto" : "bg-blue-600/80 hover:bg-blue-600 text-white"}`} onClick={handlePrevious} >&lt;</button>
      {
        pages.map((_, index) => <button className={`py-4 px-6 text-xl text-center rounded-lg ${pagination === index ? "ring-gray-950 ring-1 bg-green-700" : "bg-blue-600/80 hover:bg-blue-600"}`} onClick={() => setPagination(index)} key={index}>{index+1}</button>)
      }
      <button className={`py-[10px] px-5 text-4xl font-normal text-center rounded-full scale-y-125 shadow-[0_0_5px_white_inset] text-gray-300 ${pagination === max - 1 ? "bg-black/40 cursor-auto" : "bg-blue-600/80 hover:bg-blue-600 text-white"}`} onClick={handleNext}>&gt;</button>
    </div>
  )
}
