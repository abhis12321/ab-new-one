import Link from "next/link";

export default function ActiveArticle({ article, cancelActive }) {
    return (
        <div className="flex flex-col gap-1 p-4 items-center justify-center">
            <div onClick={cancelActive} className="w-fit text-3xl font-semibold hover:font-normal font-mono cursor-pointer py-2 px-[17px] rounded-full ring-2 ring-red-600 text-red-600 hover:text-white bg-red-600/30 hover:bg-red-600">X</div>
            <div className="flex flex-col gap-4 p-4 bg-white shadow-[0_0_2px_gray] rounded-lg text-black">
                <img src={article.image || "./news.png"} className="rounded" />
                <h2 className="text-2xl font-extrabold font-serif">{article.title}</h2>
                <p className="text-sm font-mono font-semibold text-gray-700">{article.description}</p>
                <p className="text-sm font-mono font-semibold text-gray-700">{article.content}</p>
                <Link href={article.url} className="underline text-blue-800 hover:text-blue-600">visit the source</Link>
            </div>
        </div>
    )
}
