import React from 'react';

import styled from "styled-components";

import { Card } from '../Card';
import img1 from "../../Assets/images/img1.jpg";
import img2 from "../../Assets/images/img2.jpg";
import img3 from "../../Assets/images/img3.jpg";
import { data } from "../../Data";
import Product from './Product';
import { CardPreview } from '../Card/CardPreview';
import { CardForm } from '../Card/CardForm';
import { CardList } from '../Card/CardList';

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

 function Home({title, date, imgUrl, details, edit}:any) {
 
     return (
       
       
       <div className="home">
        
        <CardContainer>

         <CardForm />

        </CardContainer>

    <CardContainer>
      
     
      <Card title={"Hello world"} date={1} imgUrl={img1} details={"details"} edit={"edit"} test={''}
      content={"Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor"} />
    
      

      <Card title={"My Card"} date={2} imgUrl={img2} details={"details"} edit={"edit"} test={''}
      content={"Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor"}/>
   
      

      <Card title={"Your card"} date={3} imgUrl={img3} details={"details"} edit={"edit"} test={''}
      content={"Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor"}/>

      

     
       
      


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
