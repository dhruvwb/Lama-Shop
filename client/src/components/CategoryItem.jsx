// import { Link } from "@material-ui/core";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
const Container = styled.div`
  flex: 1;
  margin: 5px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "30vh", objectFit: "cover" })}
`;
const Info = styled.div`
  position: absolute;
  top: 140px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mobile({
    alignItem: "center",
    JustifyContent: "center",
    textAlign: "center",
    top: "20px",
    color: "white",
  })}
`;
const Title = styled.h1`
  font-weight: bolder;
  color: black;
  ${mobile({
    textAlign: "center",
    JustifyContent: "center",
    alignItem: "center",
    color: "white",
    objectFit: "contain",
  })}
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
  margin-top: 5px;
`;

const Categoryitem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default Categoryitem;
