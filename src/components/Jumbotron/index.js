
import React from "react";
import "./style.css";

function Jumbotron(props) {

  return <div class="jumbotron jumbotron-fluid border border-primary">
            <div class="container">
              <p class="h1">{props.children}</p>
              <p class="lead">Click on each character once to score points, if you click on all 12.. You Win!<br></br>However, if you click on the same character twice.. you lose.</p>
            </div>
          </div>



{/* </div><h1 className="title">{props.children}</h1>; */}
  
}

export default Jumbotron;
