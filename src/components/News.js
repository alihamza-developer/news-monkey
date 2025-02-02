import React, { Component } from 'react'
import NewsItem from './NewsItem.js'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from './Loader.js';

class News extends Component {

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
        apiKey: PropTypes.string.isRequired,
    }


    // Constructor
    constructor() {
        super();
        // this.API_KEY = this.props.apiKey;
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
            let articles = await this.fetchArticles();

            this.setState({
                articles,
                loading: false
            });
        });
    }

    // Render Method
    render() {
        this.API_KEY = this.props.apiKey;

        return (
            <div className='container my-3'>

                <h4 className="text-center">US. TOP HEADLINES</h4>
                <hr className='mt-2 mb-5' />

                {this.state.loading && <Loader />}


                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.toggleNextArticles}
                    hasMore={this.state.page < Math.ceil(this.state.totalArticles / this.PAGE_SIZE)}
                    loader={<Loader />}
                >
                    {
                        !this.state.loading && <div className="row w-100">
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
        this.props.setProgress(40);

        let page = this.state.page,
            url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.API_KEY}&page=${page}&pageSize=${this.PAGE_SIZE}`,
            response = await fetch(url);
        response = await response.json();

        this.setState({
            totalArticles: response.totalResults
        });
        this.props.setProgress(100);

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