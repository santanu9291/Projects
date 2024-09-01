import React from "react";
import "./NewsPaper.css";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Image from "./news_default.png";
import News from "./News";
import 'bootstrap/dist/css/bootstrap.css';
function NewsPaper(props){
    
    let category = props.category;
    let [articles, setArticles] = useState([]);
    let [totalResults, setTotalResults] = useState(0);
    let [page, setPage] = useState(1);

    let resultNews = async () => {
        //const url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=79d5abbfbdea4dd5afbaeff8085fb0df";
        //const url ="https://newsapi.org/v2/everything?q=apple&from=2024-08-31&to=2024-08-31&sortBy=popularity&apiKey=79d5abbfbdea4dd5afbaeff8085fb0df";
        const url =`https://newsapi.org/v2/top-headlines?country=in&category=${category}&page=${page}&apiKey=ecfaf9eaaa8d40a5b5d769210f5ee616`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
    };
    useEffect(() => {
        resultNews();
    }, []);
    let fetchData = async () => {
        //const url = "https://newsapi.org/v2/everything?q=apple&from=2024-08-31&to=2024-08-31&sortBy=popularity&apiKey=79d5abbfbdea4dd5afbaeff8085fb0df";
        const url =`https://newsapi.org/v2/top-headlines?country=in&category=${category}&page=${page+1}&apiKey=ecfaf9eaaa8d40a5b5d769210f5ee616`;
        setPage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
    };
console.log(articles)
    return(
        <div className="bg-dark">
        <InfiniteScroll
            //This is important field to render the next data
            dataLength={articles.length}
            next={fetchData}
            hasMore={
                articles.length < totalResults
            }
            loader={
                <h4 className="text-center">
                    Loading...
                </h4>}
            endMessage={
                <p style={{ textAlign: "center" }}>
                    <b>Yay! You have seen it all</b>
                </p>
            }
        >
            <div className="container my-3 bg-dark">
                <div className="row">
                    {articles.map((element) => {
                        return (
                            <div className="col-md-4" >
                            <News
                                sourceName={element.source.name}
                                title={element.title}
                                desc={element.description}
                                imageURL=
                                {element.urlToImage ?
                                    element.urlToImage :
                                    Image}
                                newsUrl={element.url}
                            />
                        </div>
                               
                        );
                        
                    })}
                </div>
            </div>
        </InfiniteScroll>
        </div>
    );
  
}
export default NewsPaper;