import React, { Component } from 'react'
import default_pic from "./default.jpg"

export default class NewsItem extends Component {


    render() {

        let { title, description, img_url, full_news, author, date , source } = this.props; // this is destructuring
        return (
            <div >
                <div className="card my-4" style={{ width: "18rem" }}>

                    <img src={img_url ? img_url : default_pic} className="card-img-top w-100" alt="😑" height={170} />
                    <div className="card-body text-center">
                        {/* "text-center" makes the content appare in center  */}
                        <h5 className="card-title">{title}...<span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger" style={{zIndex:"1" }}>{source}</span></h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {author ? author : "YKP"} On {new Date(date).toGMTString()}</small></p>
                        
                        <a href={full_news} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm ">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}


