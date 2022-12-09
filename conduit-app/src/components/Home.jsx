
import Articles from './Articles'
import React, { Component } from 'react'

export default class Home extends Component {
    state = {

    }

    render() {
        return (
            <>
                <div>
                    <article className="max-w-3xl px-6 py-8 mx-auto space-y-12 dark:bg-gray-800 dark:text-gray-50">
                        <div className="dark:text-gray-100">
                            <Articles />
                        </div>
                    </article>
                </div>
            </>
        )
    }
}
