import { useEffect, useState } from "react";
import { Container, Row, } from "react-bootstrap";
import { Article } from "../interfaces/Article";
import SingleArticle from "./SingleArticle";

const HomePage = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const getFetch = () => {
    return fetch("https://api.spaceflightnewsapi.net/v3/articles")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          alert("Error during fetch");
        }
      })
      .then((dato) => {
       // console.log(dato);
        setArticles(dato);
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };

  useEffect(() => {
    getFetch();
  }, []);

  return (
    <>
      <h1>Welcome to the Home Page</h1>
      <Container >
        <Row className="justify-content-center row-cols-1 row-cols-md-2 row-cols-xxl-3">
          {articles.map((article) => {
            return (
                <SingleArticle key={article.id} article={article}/>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
