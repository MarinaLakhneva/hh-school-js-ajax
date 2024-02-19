import './App.css';
import {Helmet} from "react-helmet";
import {GetData} from './request';
import logo from './bar.jpg';
import {useEffect} from "react";

export let checklist = [localStorage.getItem("index1"), localStorage.getItem("index2"), localStorage.getItem("index3")]

function App() {
  useEffect(() => {
      if(localStorage.getItem("index1") === null){
        checklist = [];
      }
      const check = checklist.map((list)=>{
        return "<li onclick='selectInput(this)'>" + list + "</li>";
      });
      document.getElementById("local").innerHTML = "<ul>" + check.join('') + "</ul>";
    }, []);
  
  return (
    <div className="App">
      <div className="store">
        <p>Requests:</p>
        <p id="local"></p>
      </div>
      <div className="search-box">
        <div className="row">
          <input
             type="text"
             id="input-box"
             placeholder="Searching for the ingredients of your favorite booze"
             autoComplete="off"/>
          <button onClick={GetData}><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
        <div className="suggest-box"></div>
        <div className="result-box"></div>
        <Helmet>
          <script src="auto.js"></script>
        </Helmet>
      </div>
      <div className="info">
        <p id="ingredients"></p>
        <img id="pic" src={logo} width={300}/>
      </div>
    </div>
  );
}

export default App;


