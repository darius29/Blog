import "./styles.css";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Home from "./components/pages/Home";
import Article from "./components/pages/Article";
import Info from "./components/pages/Info";


import img1 from "./Assets/images/img1.jpg";


export default function App() {
  return (
    <div className="App">
      <h1>Card component</h1>
      <h2>props: title, date, and img, content</h2>
    
     
      
      <Router>
        <div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/article" component={Article}/>
        {/* <Route  path="info" component={Info}/> */}
          <Route path="/info">
            <Info title={"Hello world"} date={1} imgUrl={img1}
            content={"Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor, Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor,Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor,Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor"} />
          </Route>
        </Switch>
        </div>

      </Router>

    </div>
  );
}
