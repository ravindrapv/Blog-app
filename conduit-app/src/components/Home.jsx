import React from 'react'
import Articles from './Articles'
import Tags from './Tags'

export default function Home() {
    return (
        <>
            <div className=' flex flex-wrap justify-center'>
                <article className="max-w-3xl px-6 py-8 mx-auto space-y-12 dark:bg-gray-800 dark:text-gray-50">
                    <div className="dark:text-gray-100">
                        <p>Global Feed...</p>
                        <hr />
                        <Articles />
                    </div>
                </article>
                <Tags />
            </div>
        </>
    )
}
