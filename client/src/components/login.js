import React, { useState } from "react";
import '../asserts/css/signup.css';
const Login = () => {
    const [signin,setSignIn] =useState(false)
    const [className,setClassName] = useState('sign-up-mode')
    const handleclick = () =>{
            setSignIn(prev => !prev)
        }
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [location, setlocation] = useState("")
    const [phone_number, setphone_number] = useState("")
    const [category, setcategory] = useState("")
    const onCheck = async e => {
        e.preventDefault();
        try {
            const body = { name, password };
            console.log(body);
            const res = await fetch("http://localhost:5000/login/", {
                method: "POST",
                headers: { "content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            const jsonData = await res.json();
            if(jsonData == 'producer'){
                window.location = "/producer";
            }else if(jsonData == 'consumer'){
                window.location = "/consumer";
            }else if(jsonData == 'exporter'){
                window.location = "/exporter";
            }else if(jsonData == 'trader'){
                window.location = "/trader";  
            }else{
                console.log("Error")
            }
        } catch (err) {
            console.error(err.message);
        }
    }
    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { name, email, password, location, phone_number, category };
            const response = await fetch("http://localhost:5000/todos/", {
                method: "POST",
                headers: { "content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            handleclick()
        } catch (err) {
            console.error(err.message);
        }
    }
    return (
        <div className={"container1 " + (signin ? className : null)}>
            <div class="forms-container">
                <div class="signin-signup">
                    <form class="sign-in-form" >
                        <h2 class="title1">Sign in</h2>
                        <div class="input-field">
                            <i class="fas fa-user"></i>
                            <input type="text" placeholder="Username" value={name} onChange={e => setname(e.target.value)} />
                        </div>
                        <div class="input-field">
                            <i class="fas fa-lock"></i>
                            <input type="password" placeholder="Password" value={password} onChange={e => setpassword(e.target.value)} />
                        </div>
                        <input type="submit" value="Login" class="btn solid" onClick={onCheck} />
                    </form>
                    <form onSubmit={onSubmitForm} class="sign-up-form">
                        <h2 class="title">Sign up</h2>
                        <div class="input-field">
                            <i class="fas fa-user"></i>
                            <input type="text" placeholder="Username" value={name} onChange={e => setname(e.target.value)} />
                        </div>
                        <div class="input-field">
                            <i class="fas fa-envelope"></i>
                            <input type="email" placeholder="Email" value={email} onChange={e => setemail(e.target.value)} />
                        </div>
                        <div class="input-field">
                            <i class="fas fa-lock"></i>
                            <input type="password" placeholder="Password" value={password} onChange={e => setpassword(e.target.value)} />
                        </div>
                        <div class="input-field">
                            <i class="fas fa-lock"></i>
                            <input type="password" placeholder="confirm Password" />
                        </div>
                        <div class="input-field">
                            <i class="fas fa-envelope"></i>
                            <input type="text" placeholder="Location" value={location} onChange={e => setlocation(e.target.value)} />
                        </div>
                        <div class="input-field">
                            <i class="fas fa-user"></i>
                            <input type="text" placeholder="Phone_number" value={phone_number} onChange={e => setphone_number(e.target.value)} />
                        </div>
                        <div class="input-field">
                            <i class="fas fa-cloud"></i>
                            <input type="text" placeholder="Category" value={category} onChange={e => setcategory(e.target.value)} />
                        </div>
                        <input type="submit" class="btn" value="Sign up" />               
                    </form>
                </div>
            </div>
            <div class="panels-container">
                <div class="panel left-panel">
                    <div class="content">
                        <h3>New here ?</h3>
                        <p>
                            Signup to join the most widest network in the world
                        </p>
                        <button class="btn transparent" id="sign-up-btn" onClick={handleclick} >
                            Sign up
                        </button>
                    </div>
                    <img src="img/log.svg" class="image" alt="" />
                </div>
                <div class="panel right-panel">
                    <div class="content">
                        <h3>One of us ?</h3>
                        <p>
                            Signin to start using the most widest network in the world
                        </p>
                        <button class="btn transparent" id="sign-in-btn" onClick={handleclick}>
                            Sign in
                        </button>
                    </div>
                    <img src="img/register.svg" class="image" alt="" />
                </div>
            </div>
        </div>
    );

}

export default Login;