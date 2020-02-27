import React,{useState} from "react";

function Sign() {
const [name, setName]=useState("");
const [password, setPassword]=useState("");
const [email, setEmail]=useState("");

const handleNameChange = event => {
    const value= event.target.value;
    setName(value);
};
const handlePasswordChange = event => {
    const value = event.target.value;
    setPassword(value);
  };

const handleSubmit = event => {
    event.preventDefault();
    console.log(name, password);
};
const handleEmailChange = event => {
    const value = event.target.value;
    setEmail(value);
  };

  return <div>
<h1>Join the Cow Community</h1>
<form onSubmit={handleSubmit}>
<label>
Username*
<br></br>
<input
placeholder="Username"
type="text"
value={name}
onChange={handleNameChange}
/>
</label>
<br></br>
<label>
Password*
<br></br>
<input 
placeholder="Password"
type="password"
name="password"
value={password}
onChange={handlePasswordChange}
/>    
</label>
<br></br>
<label>
 Your Email*
 <br></br>
<input
placeholder="Email"
type="text"
name="email"
value={email}
onChange={handleEmailChange}
/>
</label>
<br></br>
<input type="submit" value="Sign up"/>
</form>

  </div>;
}

export default Sign;