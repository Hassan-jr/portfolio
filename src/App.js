import Nav from "./components/nav";
import './App.css'
import Header from "./components/Header";
import About from "./components/About";
import Myskills from "./components/Myskills";
import Bodynav from "./components/Bodynav";
import Interest from "./components/Interest"

//  react router
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Work from "./components/work";
import Edu from "./components/Edu";
import Projects from "./components/projects";
import Review from "./components/Review";
import Contact from "./components/Contact";

function Wpp() {
  return (
    < Router>
    <div >
      <Nav/>  
      <Header />
      < About/>
      < Bodynav/>

      {/* router */}

      
      < Routes>
      <Route exact path ="/" element={ < Work/>} > </Route>
      < Route  path = "/skills" element= {< Myskills/>} > </Route>
      < Route exact path = "/interest" element= {<Interest/>} > </Route>
      < Route exact path = "/edu" element= {< Edu/>} > </Route>
      </Routes>

      {/* End of routes */}

     < Projects/>
     < Review />
     <Contact/>
     
       
        </div>
        </Router>
  );
}

export default Wpp;
