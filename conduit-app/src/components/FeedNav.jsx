
import { Link } from 'react-router-dom'
import React from 'react'

export default function FeedNav(props) {
    return (
        <>
            <div className="flex items-center dark:bg-gray-800 dark:text-gray-100">
                <li onClick={props.removeTab}>
                    <Link rel="noopener noreferrer" href="#" className={props.activeTab === "" && 'active'} to="/">Globel Feed</Link>
                </li>
                {
                    props.activeTab && (
                        <li>
                            <Link rel="noopener noreferrer" href="#" className={props.activeTab && 'active'} to="/">#{props.activeTab}  </Link>
                        </li>
                    )
                }
            </div>
        </>
    )
}
