import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Article } from "../interfaces/Article";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const DetailPage = () => {
  const params = useParams().id;
  //console.log(params);

  const [Singlearticle, setSingleArticle] = useState<null | Article>(null);

  const getFetch = () => {
    return fetch(`https://api.spaceflightnewsapi.net/v3/articles/${params}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          alert("Error during fetch");
        }
      })
      .then((dato) => {
        //console.log(dato);
        setSingleArticle(dato);
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };

  useEffect(() => {
    getFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //console.log(Singlearticle);
  return (
    <>
      {Singlearticle && (
        <>
          <Card className="bg-dark text-white articlebg">
            <Card.Img src={Singlearticle.imageUrl} />
            <Card.ImgOverlay>
              <p className="article-p card-title h3 mb-0">
                {Singlearticle.title}...
              </p>
              <Card.Text>
                <>Updated At:{Singlearticle.updatedAt}</>
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
          <Card>
            <Card.Body>
              <Card.Text>{Singlearticle.summary} - from: <cite>{Singlearticle.newsSite}</cite> - <Link to={Singlearticle.url} target='_blank'>find more</Link> </Card.Text>
            </Card.Body>
          </Card>
        </>
      )}
    </>
  );
};

export default DetailPage;
