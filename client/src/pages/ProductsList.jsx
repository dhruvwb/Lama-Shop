import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0" })}
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0" })}
`;

const Option = styled.option``;

const ProductsList = () => {
  const location = useLocation();
  console.log(location);
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Filter Your Categories</Title>

      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option style={{ fontWeight: "600" }} disabled selected>
              Color
            </Option>
            <Option>Red</Option>
            <Option>Yellow</Option>
            <Option>Bajra</Option>
            <Option>Macca</Option>
            <Option>Opium</Option>
          </Select>
          <Select>
            <Option>X</Option>
            <Option>L</Option>
            <Option>M</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option disabled selected>
              Food
            </Option>
            <Option>Newest</Option>
            <Option>Price</Option>
            <Option>Price Desc</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductsList;
