import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import Pagination from "./Pagination";
import FeedNav from "./FeedNav";
import Tags from "./Tags";
let url = `https://conduitapi.onrender.com/api/articles`;

export default class Articles extends Component {
    state = {
        articles: null,
        error: "",
        articleCount: 15,
        articlesPage: 5,
        activePage: 1,
        activeTab: "",
    };
    removeTab = () => {
        this.setState({ activeTab: "" });
    };
    addTab = (value) => {
        this.setState({ activeTab: value });
    };
    componentDidMount() {
        this.fetchData();
        console.log("first time");
    }


    componentDidUpdate(_prevProps, prevStat) {
        if (prevStat.activePage !== this.state.activePage ||
            prevStat.activeTab !== this.state.activeTab) {
            this.fetchData();
        }
        console.log("prevstat.active", prevStat.activePage, "priveactiveTab", prevStat.activeTab, "activePage", this.state.activePage);
    }

    fetchData = () => {
        let limit = this.state.articlesPage;
        let offset = (this.state.activePage - 1) * limit;
        let tag = this.state.activeTab;

        fetch(url + `/?offset=${offset}&limit=${limit}` + (tag && `&tag=${tag}`))
            .then((res) => {
                if (!res.ok) {
                    throw new Error(res.statusText);
                }
                return res.json();
            })
            .then((data) => {
                this.setState({ articles: data.articles });
            })
            .catch((error) => {
                this.setState({ error: "not abel to fetch the articles" });
            });
    };

    updateCurrentPageIndex = (index) => {
        this.setState({ activePage: index }, this.fetchData);
    };

    componentWillUnmount() {
        this.fetchData(false);
    }

    render() {
        console.log(this.state.articles);
        const {
            articles,
            error,
            articleCount,
            articlesPage,
            activePage,
            activeTab,
        } = this.state;
        if (!this.state.articles) {
            return (
                <div className=" center">
                    <div className="loader"></div>
                </div>
            );
        }

        if (error) {
            return <p>{error}</p>;
        }
        if (articles.length < 1) {
            return <h2>no Artices found</h2>
        }

        return (
            <>
                <h2 className=" text-center">article</h2>
                <div className="flex justify-between w-fit">
                    <div className="pt-12 border-t dark:border-gray-700">
                        <FeedNav activeTab={activeTab} removeTab={this.removeTab} />
                        <hr />
                        {articles.map((d) => {
                            return (
                                <div className="dark:bg-gray-800 dark:text-gray-100">
                                    <div className=" container max-w-3xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-slate-50 m-4">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm dark:text-gray-400">
                                                {d.article.createdAt}
                                            </span>
                                            <Route>
                                                <NavLink
                                                    to="/tag"
                                                    rel="noopener noreferrer"
                                                    className="px-4 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900"
                                                >
                                                    {d.article.taglist + " "}
                                                </NavLink>
                                            </Route>
                                        </div>
                                        <div className="mt-3">
                                            <h2
                                                to="/#"
                                                rel="noopener noreferrer"
                                                className="text-2xl font-bold hover:underline"
                                            >
                                                {d.article.title}
                                            </h2>
                                            <p className="mt-2">{d.article.body}</p>
                                        </div>
                                        <div className="flex items-center justify-between mt-4">
                                            <Route>
                                                <NavLink
                                                    to={`/article/${d.article.slug}`}
                                                    rel="noopener noreferrer"
                                                    className="hover:underline dark:text-violet-400"
                                                >
                                                    Read more
                                                </NavLink>
                                            </Route>
                                            <div>
                                                <Route>
                                                    <NavLink
                                                        key={d}
                                                        to="/profile"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center"
                                                    >
                                                        <img
                                                            src={d.article.author.image}
                                                            alt="avatar"
                                                            className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500"
                                                        />
                                                        <span className="hover:underline dark:text-gray-400">
                                                            {d.article.author.username}
                                                        </span>
                                                    </NavLink>
                                                </Route>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                        <footer>
                            <Pagination
                                articleCount={articleCount}
                                articlesPage={articlesPage}
                                activePage={activePage}
                                updateCurrentPageIndex={this.updateCurrentPageIndex}
                            />
                        </footer>
                    </div>
                    <Tags addTab={this.addTab} />
                </div>
            </>
        );
    }
}
