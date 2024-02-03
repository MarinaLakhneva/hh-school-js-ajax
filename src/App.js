import './App.css';
import {Helmet} from "react-helmet";
import {GetData} from './request';
import logo from './bar.jpg';
function App() {
  return (
    <div className="App">
      <div className="store">
        <p>Requests</p>
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
