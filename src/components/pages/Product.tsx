import React from 'react';



import {
  CardWrapper,
  CardImage,
  CardTextWrapper,
  CardTextDate,
  CardTextTitle,
  CardTextBody,
  CardStatWrapper,
  CardStats,
  LinkText
} from "../Card/CardStyles";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";

import styled from "styled-components";
const Separator = styled.span`
  margin-left: 10px;
  margin-right: 10px;
`;

export const Product= ({ product}:any) =>{
   return (

    
    <Tilt>
      <CardWrapper>
        <CardImage background={product.image} />
        <CardTextWrapper>
          <CardTextDate>{product.date} days ago</CardTextDate>
          <CardTextTitle>{product.title}</CardTextTitle>
          
          <CardTextBody>
            {product.content}
          </CardTextBody>
        </CardTextWrapper>
        <CardStatWrapper>
          
          <CardStats>
            <Link to="/article">{product.details}</Link>
          </CardStats>
          <CardStats>
            <LinkText>
             <Link to="/info">{product.info}</Link>
            </LinkText>
          </CardStats>
        </CardStatWrapper>
      </CardWrapper>
          < Separator/>
    </Tilt>





    
)
}

  

export default Product;