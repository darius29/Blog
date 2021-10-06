import React from "react";
import { CardType } from "../../Types";
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
} from "./CardStyles";
import Tilt from "react-parallax-tilt";


import { Link } from "react-router-dom";
export const Card = ({ title, date, imgUrl, content, details, info, test }: CardType) => {
  
  return (
    <Tilt>
      <CardWrapper>
        <CardImage background={imgUrl} />
        <CardTextWrapper>
          <CardTextDate>{date} days ago</CardTextDate>
          <CardTextTitle>{title}</CardTextTitle>
          
          <CardTextBody>
            {content}
          </CardTextBody>
        </CardTextWrapper>
        <CardStatWrapper>
          
          <CardStats>
            <Link to="/article">{details}</Link>
          </CardStats>
          <CardStats>
            <LinkText>
             <Link to="/info">{info}</Link>
            </LinkText>
          </CardStats>

        </CardStatWrapper>
      </CardWrapper>
    </Tilt>
  );
};
