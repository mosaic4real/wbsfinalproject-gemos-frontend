import styled from "styled-components";
import { mobile } from "../responsive";
import {Link} from "react-router-dom";

const Container = styled.div`
  

    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
  

`;

const Image = styled.img`
  width: 75%;
  height: 75%;
  object-fit: cover;
  ${mobile({ display: "none" })}
  
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`;

const Title = styled.h1`
    color:black;
    margin-bottom: 20px;
    
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    
    color:gray;
    cursor: pointer;
    font-weight: 600;
    justify-content: center;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to ={`/products/${item.cat}`}>
      <Image src= {item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
