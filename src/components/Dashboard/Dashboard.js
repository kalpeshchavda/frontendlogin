import React from "react";
import {useLocation} from 'react-router-dom';
import './Dashboard.css';
import {useNavigate} from 'react-router-dom';


function Dashboard() {
    const navigate = useNavigate();
    const {state} = useLocation();
    
    //console.log(state.length);
    var count = Object.keys(state).length;
 
    return (
        <div id="wrapper">
            <center><h1>Welcome {state.userName},</h1></center>
            <div class="navigation">
  
	<a className="button" href="/">
    <img className="imgcls" src={state.image}/>
  
  <div className="logout">LOGOUT</div>

	</a>
  
</div>
        <h2>
        <p>First Name : {state.userName}</p>
        <p>Last Name : {state.userName}</p>
        <p>Email : {state.email}</p>
        <p>Profile Image : </p>
        <div>
          <img src={state.image} width="200" height="250" />
        </div>
        </h2>
        
        </div>
        
    )
}
export default Dashboard;