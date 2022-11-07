👉 News API :
    username : bajrang77@protonmail.com
    passwd : Ykp@0755
    
👉 Your API key is: 0a1a554eeb5e447f8923637f1145558a

👉 100 req for a day for free developer account 

// https://newsapi.org/v2/everything?q=tesla&from=2022-10-03&sortBy=publishedAt&apiKey=0a1a554eeb5e447f8923637f1145558a
// https://newsapi.org/v2/top-headlines?country=in&apiKey=0a1a554eeb5e447f8923637f1145558a

future plan :
    aapan country wise news dikha sktey hai to udhar flag ka use krenge beside country name and that flag can be spinner "https://icons8.com/preloaders/en/flags_animated" is link pe country falg ka spinner lana ,


   async componentDidMount() {
        this.updateNews() ;
    }
    
     updateNews = async() => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0a1a554eeb5e447f8923637f1145558a&page=${this.state.page}&pageSize=${this.props.page_size}`;
        this.setState({
            loading: true
        })
        // fetch return a promise , await before fetch means we are waiting for promise
        let data = await fetch(url);
        let parsed_data = await data.json();
        
        this.setState({
            articles: parsed_data.articles,           
            loading: false
        });
    }

    goPrevious =  () => {
        this.setState({            
            page: this.state.page - 1           
        });
        this.updateNews() ;
    }

    goNext =  () => {
        this.setState({
            page: this.state.page + 1
        });
        this.updateNews() ;
    }