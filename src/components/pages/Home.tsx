import React from 'react';

import styled from "styled-components";

import { Card } from '../Card';
import img1 from "../../Assets/images/img1.jpg";
import img2 from "../../Assets/images/img2.jpg";
import img3 from "../../Assets/images/img3.jpg";
import { data } from "../../Data";
import Product from './Product';

const CardContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1f2229;
  overflow: hidden;
`;

const Separator = styled.span`
  margin-left: 10px;
  margin-right: 10px;
`;

 function Home() {
 
     return (
       
  
       <div className="home">
      

    <CardContainer>

      <Card title={"Hello world"} date={1} imgUrl={img1} details={"details"} info={"info"} test={''}
      content={"Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor"} />
    
      <Separator />

      <Card title={"My Card"} date={2} imgUrl={img2} details={"details"} info={"info"} test={''}
      content={"Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor"}/>
   
      <Separator />

      <Card title={"Your card"} date={3} imgUrl={img3} details={"details"} info={"info"} test={''}
      content={"Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor"}/>

      <Separator/>

     
       
      <Separator/>


    </CardContainer>

    <CardContainer>
    {data.map(product => (
      
      <Product key={product.id} product={product} />
      
      )
      )
    } 
    < Separator/>

    </CardContainer>
    
  </div>
)};


export default Home;
