import React from "react";
import { StyledCard } from "./styles/Card.styled";

function Card({ item: { title, body, image }, imgRound }) {
  // const [image, setImage] = useState("");
  // const imageName = () => {
  //   import(`../components/assets/img/${image}`).then((name) => setImage(name));
  // };
  // imageName();

  return (
    <StyledCard imgRound={imgRound ? true : false}>
      <img src={`./assets/img/${image}`} />
      <div className="title">{title}</div>
      <p>{body}</p>
    </StyledCard>
  );
}

export default Card;
