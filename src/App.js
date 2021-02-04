
import axios from 'axios';
import { useState,useEffect } from 'react';
import './App.css';
import News from './News/News';

function App() {
    
    const [articles, setArticles] = useState([]);
    // useEffect(() =>{
    //     const url = 'http://newsapi.org/v2/everything?q=bitcoin&from=2020-12-02&sortBy=publishedAt&apiKey=cc4043e5c25a4cbc8dfbe41550decebc';
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(data => setArticles(data.articles))
    // },[]);
    useEffect(() => {
      const url = 'http://newsapi.org/v2/everything?q=bitcoin&from=2020-12-02&sortBy=publishedAt&apiKey=cc4043e5c25a4cbc8dfbe41550decebc';
      axios(url)
      .then(data => setArticles(data.data.articles))


    },[])
  return (
    <div>
       <h1>Top Headline : {articles.length} </h1>
      
      {
        articles.map(article => <News article={article}></News>)
      }
   </div>
  );
}

export default App;
