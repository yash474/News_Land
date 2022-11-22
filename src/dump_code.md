// async componentDidMount() {
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api_key}&page=${this.state.page}&pageSize=${this.props.page_size}`;
    //     this.setState({
    //         loading: true
    //     })
    //     // fetch return a promise , await before fetch means we are waiting for promise
    //     let data = await fetch(url);
    //     let parsed_data = await data.json();
    //     // console.log(parsed_data);

    //     this.setState({
    //         articles: parsed_data.articles,
    //         total_Res: parsed_data.totalResults,
    //         loading: false
    //     });
    // }
    
    

    // goPrevious = async () => {

    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api_key}&page=${this.state.page - 1}&pageSize=${this.props.page_size}`;
    //     this.setState({
    //         loading: true
    //     })
    //     // fetch return a promise , await before fetch means we are waiting for promise
    //     let data = await fetch(url);
    //     let parsed_data = await data.json();
    //     // console.log(parsed_data);

    //     // this.scrollTop();
    //     this.setState({
    //         articles: parsed_data.articles,
    //         page: this.state.page - 1,
    //         loading: false
    //     });


    // }

    // goNext = async () => {

    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api_key}&page=${this.state.page + 1}&pageSize=${this.props.page_size}`;
    //     this.setState({
    //         loading: true
    //     })
    //     // fetch return a promise , await before fetch means we are waiting for promise
    //     let data = await fetch(url);
    //     let parsed_data = await data.json();
    //     // console.log(parsed_data);

    //     this.setState({
    //         articles: parsed_data.articles,
    //         page: this.state.page + 1,
    //         loading: false
    //     });
    //     // this.scrollTop();
    // }
