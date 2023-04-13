import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Article } from "../interfaces/Article";

interface articles {
  article: Article;
}

const SingleArticle = (props: articles) => {
  return (
    <Col className="p-2">
      <Card className="border ">
        <Link to={`/details/${props.article.id}`}><Card.Img variant="top" className="articlePic" src={props.article.imageUrl} /> </Link>
        <Card.Body>
        <Link to={`/details/${props.article.id}`}><div className="article-p card-title h5">{props.article.title}...</div> </Link> 
        </Card.Body>
      </Card>
      
    </Col>
  );
};

export default SingleArticle;
