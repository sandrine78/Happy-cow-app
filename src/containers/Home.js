import React from "react";
import Logo from "../components/Logo";
import piccow from "../assets/cow.png";
import picvegan from "../assets/vegan.jpg";
import List from "../components/List";
import Button from "../components/Button";
import Input from "../components/Input";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Home() {
  return (<div>
    <div className="container">
      <div className="list-bar">
      <Logo pic={piccow}/>
      <List name="Vegan" />
      <List name="Vegetarian" />
      <List name="Health stores" />
      <List name="Juice bars" />
      <List name="Ice creams" />
      </div>
      
      <div className="button">
        <Link to="/login">
      <Button title="Login"/></Link>
      <Link to="/sign">
    <Button title="Sign up"/></Link>
      </div>
    </div>
     <Input pic={picvegan}/>
     <Footer />
    </div>);

    
}

export default Home;