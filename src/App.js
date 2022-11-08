import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";

export default class App extends Component {

    page_size=18 ;
    api_key = process.env.REACT_APP_NEWS_API ;
    render() {
        return (
            <div>
                <Router>
                    <NavBar />
                   
                    <Routes>
                        <Route exact path='/' element={<News page_size={this.page_size} country='in' category='general' api_key={this.api_key} />} />
                        
                        <Route exact path='/business' element={<News key="business" page_size={this.page_size} country='in' category='business'  api_key={this.api_key} />} />

                        <Route exact path='/entertainment' element={<News key="entertainment" page_size={this.page_size} country='in' category='entertainment'  api_key={this.api_key} />} />

                        <Route exact path='/health' element={<News key="health" page_size={this.page_size} country='in' category='health'  api_key={this.api_key} />}  />

                        <Route exact path='/science' element={<News key="science" page_size={this.page_size} country='in' category='science'  api_key={this.api_key} />}  />

                        <Route exact path='/sports' element={<News key="sports" page_size={this.page_size} country='in' category='sports'  api_key={this.api_key} />}  />

                        <Route exact path='/technology' element={<News key="technology" page_size={this.page_size} country='in' category='technology'  api_key={this.api_key}  />}      />
                    </Routes>
                </Router>
            </div>
        )
    }
}
