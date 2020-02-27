import React,{useState} from "react";

function Login() {
const [name, setName]=useState("");
const [password, setPassword]=useState("");

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
}

  return <div>
<h1>Login to Your Account</h1>
<form onSubmit={handleSubmit}>
<label>
Username or Email
<br></br>
<input
placeholder="Name"
type="text"
value={name}
onChange={handleNameChange}
/>
</label>
<br></br>
<label>
Password
<br></br>
<input 
placeholder="Password"
type="password"
name="password"
value={password}
onChange={handlePasswordChange}
/>    
</label>
<input type="submit" value="Submit"/>
</form>

  </div>;
}

export default Login;