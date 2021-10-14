import React from 'react';

import "./styles.css";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Home from "./components/pages/Home";

import Info from "./components/pages/Info";


import img1 from "./Assets/images/img1.jpg";
import './App.css';

import { getCards } from '../src/components/services/cardService';
import {CardList} from './components/Card/CardList';


export default function App() {
  const [cards, setCards] = React.useState([])
  React.useEffect(() => {
    getCards().then(setCards)
  }, [])

  function handleRemove(id:number) {
    setCards(existing => existing.filter((c:any) => c.id !== id))
  }

  // function handleAdd(card:any) {
  //   setCards((existing:any) => [...existing, card])
  // }

  function handleUpdate(card:any) {
    setCards((existing: any) => existing.map((c:any) => (c.id === card.id ? card : c)))
  }

  return (
    <div className="App">
      <h1>Card component</h1>
      <h2>props: title, date, and img, content</h2>
    
      
      
     
      
      <Router>
        <div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/details" component={Info}/>
          <Route>

          <CardList
              path="/cards"
              cards={cards}
              // onAdd={handleAdd}
              onUpdate={handleUpdate}
              onRemove={handleRemove}
              />
          </Route>
        {/* <Route  path="info" component={Info}/> */}
          <Route exact path="/edit">
            <Info title={"Hello world"} date={1} imgUrl={img1}
            content={"Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor, Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor,Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor,Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor"} />
          </Route>
        </Switch>
        </div>

      </Router>

    </div>
  );
}
