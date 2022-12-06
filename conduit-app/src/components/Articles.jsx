import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom'
import Pagination from "./Pagination"

let url = 'https://conduitapi.onrender.com/api/articles'

export default class Articles extends Component {
    state = {
        articles: null,
    }

    componentDidMount() {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                this.setState({ articles: data.articles });
            });
    }

    render() {
        console.log(this.state.articles);
        if (!this.state.articles) {
            return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-green-400"></div>
        }

        return (
            <>
                <h2 className=' text-center'>article</h2>
                <div className="pt-12 border-t dark:border-gray-700">
                    {
                        this.state.articles.map(d => {
                            return <div className="dark:bg-gray-800 dark:text-gray-100">
                                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-slate-50 m-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm dark:text-gray-400">{d.article.createdAt}</span>
                                        <Route>
                                            <NavLink to='/tag' rel="noopener noreferrer" className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">{d.article.taglist}</NavLink>
                                        </Route>
                                    </div>
                                    <div className="mt-3">
                                        <h2 to='/#' rel="noopener noreferrer" className="text-2xl font-bold hover:underline">{d.article.title}</h2>
                                        <p className="mt-2">{d.article.body}</p>
                                    </div>
                                    <div className="flex items-center justify-between mt-4">
                                        <Route>
                                            <NavLink to='/Article' rel="noopener noreferrer" className="hover:underline dark:text-violet-400">Read more</NavLink>
                                        </Route>
                                        <div>
                                            <Route>
                                                <NavLink to='/profile' rel="noopener noreferrer" className="flex items-center">
                                                    <img src={d.article.author.image} alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                                                    <span className="hover:underline dark:text-gray-400">{d.article.author.username}</span>
                                                </NavLink>
                                            </Route>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                    <footer>
                        <Pagination />
                    </footer>
                </div>
            </>
        )
    }
}

