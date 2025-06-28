
import { getAll } from "../api/project";

export default async function Page() {
    const items: Project[] = await getAll();
    return (
        <div className="min-h-screen  bg-gray-100/50 dark:bg-gray-900/50 max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
                {items.map((item) => (
                    <div key={item.id} className="max-w-lg h-full flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <a href={item.links}>
                            <img className="rounded-t-lg" src={'/images/' + item.image} alt="" />
                        </a>
                        <div className="p-5 grow">
                            <a href={item.links}>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                            </a>
                            <p className="mb-3 text-sm text-gray-700 dark:text-gray-400 grow">{item.description}</p>
                        </div>
                        <div className="px-5 pb-3 flex justify-end">
                            <a href={item.links} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                More details
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}