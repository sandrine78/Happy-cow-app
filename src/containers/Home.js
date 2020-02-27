import React from "react";
import Logo from "../components/Logo";
import piccow from "../assets/cow.png";
import picvegan from "../assets/vegan.jpg";
import List from "../components/List";
import Button from "../components/Button";
import Input from "../components/Input";
import Footer from "../components/Footer";

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
      <Button title="Login"/>
    <Button title="Sign up"/>
      </div>
    </div>
     <Input pic={picvegan}/>
     <Footer />
    </div>);

    
}

export default Home;