"use client"
import { useRouter } from "next/navigation";

export default function Header() {
    const router = useRouter();

    return (
        <header className="border-gray-200">
            <nav>
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="/Portfolio/logoNew.png" className="h-18 md:h-24" alt="Jessie Logo" />
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium text-background flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:border-gray-700">
                            <li>
                                <div onClick={() => router.push('/')} className="hover:text-background-dark" aria-current="page">Home</div>
                            </li>
                            <li>
                                <div onClick={() => router.push('/about')} className="hover:text-background-dark">About</div>
                            </li>
                            <li>
                                <div onClick={() => router.push('/examples')} className="hover:text-background-dark">Examples</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
