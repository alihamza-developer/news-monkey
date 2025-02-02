import React from 'react'

const NewsItem = (props) => {
    let { title, description, urlToImage, url, author } = props.info;

    return (
        <div className="col-md-3 mb-3">
            <div className="card">
                <img src={urlToImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title?.slice(0, 30)}</h5>
                    <p className="card-text">{description?.slice(0, 50)}</p>

                    <p className="card-text"><small className='text-muted'>By {author?.trim().length ? author.trim() : "Unknown"}</small></p>
                    <a href={url} className="btn btn-sm btn-primary">Read more...</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
