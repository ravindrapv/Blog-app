import React, { Component } from 'react'
let url = 'https://conduitapi.onrender.com/api/articles'
export default class SingelPage extends Component {
    state = {
        article: '',
        error: '',
    }

    componentDidMount() {
        let slug = this.props.match.params.slug;
        fetch(url + "/" + slug)
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.statusText)
                }
                return res.json()
            })
            .then(data => {
                this.setState({ article: data.article });
            }).catch((error) => {
                this.setState({ error: "not abel to fetch the articles" })
            })
    }
    render() {
        const { article, error } = this.state
        if (error) {
            return <p>{error}</p>
        }
        if (!article) {
            return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-green-400"></div>
        }
        console.log(this.state.article);
        return (
            <>
                <div className="max-w-md p-6 overflow-hidden rounded-lg shadow dark:bg-gray-900 dark:text-gray-100 text-center">
                    <article>
                        <h2 className="text-xl font-bold">S{article.title}</h2>
                        <p className="mt-4 dark:text-gray-400">Morbi porttitor mi in diam scelerisque commodo. Proin sed laoreet libero. Fusce faucibus porttitor lacus, at blandit mauris blandit eget. Donec facilisis lorem et risus commodo, quis auctor nulla varius. Pellentesque facilisis feugiat turpis, id molestie augue semper quis. Nunc ornare eget est sit amet elementum.</p>
                        <div className="flex items-center mt-8 space-x-4">
                            <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-10 h-10 rounded-full dark:bg-gray-500" />
                            <div>
                                <h3 className="text-sm font-medium">Leroy Jenkins</h3>
                                <time datetime="2021-02-18" className="text-sm dark:text-gray-400">Feb 18th 2021</time>
                            </div>
                        </div>
                    </article>
                </div>
            </>
        )
    }
}
