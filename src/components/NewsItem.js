import React, { Component } from 'react'

class NewsItem extends Component {
    render() {
        let { title, description, urlToImage, url } = this.props.details;

        return (
            <>
                <div className="col-md-3 mb-3">
                    <div className="card">
                        <img src={urlToImage} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title.slice(0, 30)}</h5>
                            <p className="card-text">{description.slice(0, 50)}</p>
                            <a href={url} className="btn btn-sm btn-primary">Read more...</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsItem;