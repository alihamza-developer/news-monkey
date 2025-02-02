import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem.js'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from './Loader.js';

const News = ({ apiKey, country = 'us', category = 'health', setProgress }) => {

    const PAGE_SIZE = 20;

    // States
    const [loading, setLoading] = useState(true),
        [articles, setArticles] = useState([]),
        [total, setTotalArticles] = useState(0),
        [page, setPage] = useState(1);

    useEffect(() => {
        (async () => {

            let articles = await fetchArticles();

            setArticles(articles);
            setLoading(false);
        })();

    }, []);

    // Toggle Next
    const toggleNextArticles = async () => {

        if ((page + 1) > Math.ceil(total / PAGE_SIZE)) {
            setPage(page);
            return false;
        }

        setPage(page + 1);
        setLoading(true);

        let articles = await fetchArticles();

        setArticles(articles);
        setLoading(false);
    }

    // Toggle Prev
    const togglePrevArticles = async () => {
        if (page < 1) return false;
        setPage(page - 1);
        setLoading(true);
        let articles = await fetchArticles();

        setArticles(articles);
        setLoading(false);
    }

    // Fetch Articles
    const fetchArticles = async () => {
        setProgress(40);

        let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${PAGE_SIZE}`,
            response = await fetch(url);
        response = await response.json();


        setTotalArticles(response.totalArticles);

        setProgress(100);

        return response.articles;
    }


    return (
        <div className='container my-3'>

            <h4 className="text-center">US. TOP HEADLINES</h4>
            <hr className='mt-2 mb-5' />

            {loading && <Loader />}


            <InfiniteScroll
                dataLength={articles.length}
                next={toggleNextArticles}
                hasMore={page < Math.ceil(total / PAGE_SIZE)}
                loader={<Loader />}
            >
                {
                    !loading && <div className="row w-100">
                        {articles.map((article, i) => {
                            if (!article.urlToImage) return true;
                            return <NewsItem key={i} info={article} />
                        })}
                    </div>
                }
            </InfiniteScroll>



            <div className="d-flex justify-content-between">
                <button disabled={page <= 1} className="btn btn-sm btn-primary" onClick={togglePrevArticles}>Prev</button>
                <button disabled={page === Math.ceil(total / PAGE_SIZE)} className="btn btn-sm btn-primary" onClick={toggleNextArticles}>Next</button>
            </div>
        </div>
    )
}

// PropTypes
News.prototype = {
    category: PropTypes.string,
    country: PropTypes.string,
    apiKey: PropTypes.string.isRequired,
}

export default News;

