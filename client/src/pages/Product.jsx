import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import {mobile} from "../responsive";


const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
${mobile({ padding : "10px" , flexDirection:"column"})}

`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
${mobile({ height: "60vh"})}

`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
${mobile({ padding : "10px"})}

`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 30px 0;
${mobile({ width: "100%"})}

`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 5px;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
width: 50%;
display: flex;
align-items:center;
justify-content:space-between;
${mobile({ width: "100%"})}

`;

const AmountContainer = styled.div`
display: flex;
align-items:center;
font-weight: 700;
`;

const Amount = styled.span`
width:30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
margin: 0 5px;
justify-content: center;

`;


const  Button = styled.button`
padding:14px;
border: 2px solid teal;
font-weight: 500;
background-color: white;
cursor: pointer;

&:hover{
    background-color: #f8f4f4;
}
`;





const Product = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            The portal shall work tirelessly not only for the consumer
            convenience and benefit, but will also play a key role in providing
            transparent markets for all the wonderful medium and small scale
            industries located in our beautiful state. Traditionally, the state
            is not very well known for its entrepreneurial zeal.
          </Desc>
          <Price>$ 50</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>

              <AmountContainer>
                <Remove />
                <Amount>1</Amount>
                <Add/>
              </AmountContainer>

              <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
