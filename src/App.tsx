import "./styles.css";
import { Card } from "./components/Card";
import styled from "styled-components";
import img1 from "./Assets/images/img1.jpg";
import img2 from "./Assets/images/img2.jpg";
import img3 from "./Assets/images/img3.jpg";


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

export default function App() {
  return (
    <div className="App">
      <h1>Card component</h1>
      <h2>props: title, date, and img</h2>
      <CardContainer>
        <Card title={"Hello world"} date={1} imgUrl={img1} />
        <Separator />
        <Card title={"My Card"} date={2} imgUrl={img2} />
        <Separator />
        <Card title={"Your card"} date={3} imgUrl={img3}/>
        <Separator/>
      
      </CardContainer>

    </div>
  );
}
