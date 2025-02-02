import React, { Component } from 'react'
import NewsItem from './NewsItem.js'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


class News extends Component {
    API_KEY = '67540537801d46e8880f390fd1a31e1a';
    PAGE_SIZE = 20;

    // Default Props 
    static defaultProps = {
        country: "us",
        category: "health"
    }

    // Prop Types
    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
    }


    // Constructor
    constructor() {
        super();

        // Defining All States here...
        this.state = {
            articles: [],
            totalArticles: 0,
            loading: true,
            page: 1
        };

    }

    // Use API to fetch data
    componentDidMount() {
        return new Promise(async (res, rej) => {
            console.log('Component Mounted');
            let articles = await this.fetchArticles();

            this.setState({
                articles,
                loading: false
            });
        });
    }

    // Render Method
    render() {
        return (
            <div className='container my-3'>

                <h4 className="text-center">US. TOP HEADLINES</h4>
                <hr className='mt-2 mb-5' />

                {this.state.loading && <div className="text-center">Loading...</div>}


                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.toggleNextArticles}
                    hasMore={this.state.articles.length !== this.state.totalArticles}
                    loader={<h4>Loading...</h4>}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                >
                    {
                        !this.state.loading && <div className="row">
                            {this.state.articles.map((article, i) => {
                                if (!article.urlToImage) return true;
                                return <NewsItem key={i} details={article} />
                            })}
                        </div>
                    }


                </InfiniteScroll>



                <div className="d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} className="btn btn-sm btn-primary" onClick={this.togglePrevArticles}>Prev</button>
                    <button disabled={this.state.page === Math.ceil(this.state.totalArticles / this.PAGE_SIZE)} className="btn btn-sm btn-primary" onClick={this.toggleNextArticles}>Next</button>
                </div>

            </div>
        )
    }

    // Fetch Articles
    async fetchArticles() {
        let page = this.state.page,
            url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.API_KEY}&page=${page}&pageSize=${this.PAGE_SIZE}`,
            response = await fetch(url);
        response = await response.json();

        this.setState({
            totalArticles: response.totalResults
        });
        return response.articles;
    }

    // Toggle Next
    toggleNextArticles = async () => {
        let page = this.state.page;
        page += 1;
        if (page > Math.ceil(this.state.totalArticles / this.PAGE_SIZE)) {
            this.setState({
                page: page
            });
            return false;
        }

        this.setState({
            page: page,
            loading: true
        }, async () => {
            let articles = await this.fetchArticles();
            this.setState({
                articles: this.state.articles.concat(articles),
                loading: false
            });
        });

    }
    // Toggle Prev
    togglePrevArticles = async () => {
        let page = this.state.page;
        page -= 1;

        this.setState({
            page: page,
            loading: true
        }, async () => {
            let articles = await this.fetchArticles();
            this.setState({
                articles,
                loading: false
            });
        });

    }

}





export default News;