import React from 'react';
import {
    InfoWrapper,
    InfoImage,
    InfoTextWrapper,
    InfoTextDate,
    InfoTextTitle,
    InfoTextBody,
   // InfoStatWrapper,
    //InfoStats,
    //LinkText
  } from "../Card/InfoStyles"

import styled from "styled-components";

const InfoContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1f2229;
  overflow: hidden;
`;

const AboutMe = ({title, date, imgUrl, content, details, info}: any) => {

  return (
    <>
        <InfoContainer >
        <InfoWrapper>
        <InfoImage background={imgUrl} />
        <InfoTextWrapper>
          <InfoTextDate>{date} days ago</InfoTextDate>
          <InfoTextTitle>{title}</InfoTextTitle>
          
          <InfoTextBody>
            {content}
          </InfoTextBody>
        </InfoTextWrapper>
       
          
          {/* <InfoStats>
            <Link to="/add">{details}</Link>
          </InfoStats>
          <InfoStats>
             <Link to="/edit">{info}</Link>
          </InfoStats> */}
          
        
      </InfoWrapper>
      
      </InfoContainer>
    </>
  );
};
export default AboutMe;
