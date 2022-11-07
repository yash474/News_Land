import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export default class News extends Component {

    // article is an array of newws 
    articles = [];



    // note the first stattement in constructer should always be super() call 
    constructor( props ) {
        super( props );
        this.state = {
            articles: this.articles,
            loading: false,  // this will be use to show spinner when the content is being loaded
            page: 1,
        }

        // dynamic title change based on current page
        if( props.category==='general' ){
            document.title="NewsLand - Trending News 🔥" ;
        }
        else{
            document.title=`${props.category.charAt(0).toUpperCase()}${props.category.slice(1)} - NewsLand 🔥` ;
        }
    }

    // async function can wait in its body for resolving of some promise 
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api_key}&page=${this.state.page}&pageSize=${this.props.page_size}`;
        this.setState({
            loading: true
        })
        // fetch return a promise , await before fetch means we are waiting for promise
        let data = await fetch(url);
        let parsed_data = await data.json();
        // console.log(parsed_data);

        this.setState({
            articles: parsed_data.articles,
            total_Res: parsed_data.totalResults,
            loading: false
        });
    }
    
    

    goPrevious = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api_key}&page=${this.state.page - 1}&pageSize=${this.props.page_size}`;
        this.setState({
            loading: true
        })
        // fetch return a promise , await before fetch means we are waiting for promise
        let data = await fetch(url);
        let parsed_data = await data.json();
        // console.log(parsed_data);

        // this.scrollTop();
        this.setState({
            articles: parsed_data.articles,
            page: this.state.page - 1,
            loading: false
        });


    }

    goNext = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api_key}&page=${this.state.page + 1}&pageSize=${this.props.page_size}`;
        this.setState({
            loading: true
        })
        // fetch return a promise , await before fetch means we are waiting for promise
        let data = await fetch(url);
        let parsed_data = await data.json();
        // console.log(parsed_data);

        this.setState({
            articles: parsed_data.articles,
            page: this.state.page + 1,
            loading: false
        });
        // this.scrollTop();
    }

    

    render() {

        return (
            <div className="container  my-3 ">
                
                {/* dynamic page heading change based on current page */}
                <h1 className='text-center'>{this.props.category==='general'?"NewsLand - Trending News Of The Day !! " : `NewsLand - Trending ${this.props.category.charAt(0).toUpperCase()}${this.props.category.slice(1)} News Of The Day !!`}</h1>

                {this.state.loading && <Spinner />}
                <div className="row row-col-1 row-cols-md-3 ">
                    {!this.state.loading && this.state.articles.map((elt) => {
                        return <NewsItem key={elt.url} title={elt.title ? elt.title.slice(0, 45) : "Sorry data not available"} description={elt.description ? elt.description.slice(0, 58) : "Sorry data not available"} img_url={elt.urlToImage} full_news={elt.url} author={elt.author} date={elt.publishedAt} source={elt.source.name} />

                    })}

                    {/* key={elt.url} -> means when we should provide each child a unique key and in out json elt image url is unique for each news article*/}
                </div > 
                <div className='d-flex justify-content-around'>

                    <button disabled={this.state.page <= 1 ? true : false} type="button" className="btn btn-primary btn-sm" onClick={this.goPrevious}>👈 Previous</button>

                    <span className="badge bg-primary text-center my-1">⋘  {this.state.page}  ⋙</span>

                    <button /* disable condition*/ disabled={(this.state.page >= Math.ceil(this.state.total_Res / this.props.page_size)) ? true : false} /* */ type="button" className="btn btn-primary btn-sm" onClick={this.goNext}>Next 👉</button>

                </div>
            </div>
        )
    }
}

News.defaultProps = {
    page_size: 18,
    country: 'in',
    category: 'general'
}

News.propTypes = {
    country: PropTypes.string,
    page_size: PropTypes.number,
    category: PropTypes.string
}



