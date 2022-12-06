import React from "react";

export default function Hero() {
    return (
        <>
            <section className="dark:bg-gray-800 dark:text-gray-100 bg-indigo-600">
                <div className="container mx-auto flex flex-col items-center px-4 py-8 text-center md:py-12 md:px-10 lg:px-12 xl:max-w-2xl">
                    <h1 className="text-4xl font-bold leading-none sm:text-5xl">conduit
                        <span className="dark:text-violet-400">  A place to share your </span>knowledge.
                    </h1>
                    <p className="px-8 mt-8 mb-12 text-lg">Don't focus on having a great blog. Focus on producing a blog that's great for your readers!</p>
                </div>
            </section>
        </>
    );
}
