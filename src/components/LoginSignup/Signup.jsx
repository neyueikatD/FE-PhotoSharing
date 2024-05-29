
import { useRef, useState } from "react";
import './styles.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "../Loading/Loading";

export default function SignUp(){
    const [isShowed] = useState(false);
    const [loading, setLoading] = useState(false)
    const goTo = useNavigate()
    const userNameRef = useRef(null)
    const passwordRef = useRef(null)
    const firstNameRef = useRef(null)
    const lastNameref = useRef(null)
    const occupationRef = useRef(null)
    const discriptionRef = useRef(null)
    const locationRef = useRef(null)
    const repasswordRef = useRef(null)

    const handleRegister = async () => {
        setLoading(true)
        if (!userNameRef.current.value 
            || !passwordRef.current.value 
            || !firstNameRef.current.value 
            || !lastNameref.current.value) {
            alert("Please fill in all input boxs!");
            setLoading(false)
            return;
        }
        if(passwordRef.current.value  !== repasswordRef.current.value){
            alert("Password and its repeat are not matched! Please try again")
            setLoading(false)
            return
        }
        const body = {
            user_name: userNameRef.current.value,
            password: passwordRef.current.value,
            first_name: firstNameRef.current.value,
            last_name: lastNameref.current.value,
            occupation: occupationRef.current.value,
            location: locationRef.current.value,
            description: discriptionRef.current.value
        }
        try{
            const res = await axios.post(
                "http://localhost:8080/api/admin/register",
                body
                )
            setLoading(false)
            alert("Account created successfully!")
            goTo("/login")
        }catch(e){
            setLoading(false)
            alert(e.response.data.message);
            console.error("Failed to create account!",e)
        }
    }

    return (
        <div className="login-container">
            <h2 className="sign-up-header">Sign Up</h2>
            <div className="input-box-container">
                <span className="input-discription">User name: </span>
                <div className="input-box">
                    <input 
                        type="text" 
                        className="username-input" 
                        placeholder="Enter user name"
                        ref={userNameRef}
                        required
                    />
                </div>
            </div>
            <div className="input-box-container">
                <span className="input-discription first-name">First name: </span>
                <div className="input-box name">
                    <input 
                        type="text" 
                        className="firstname-input" 
                        placeholder="Enter first name"
                        ref={firstNameRef}
                        required
                    />
                
                </div>
                <span className="input-discription name">Last name: </span>
                <div className="input-box name">
                    <input 
                        type="text" 
                        className="lastname-input" 
                        placeholder="Enter last name"
                        ref={lastNameref}
                        required
                    />
                </div>
            </div>
            <div className="input-box-container">
                <span className="input-discription">Occupation: </span>
                <div className="input-box">
                    <input 
                        type="text" 
                        className="ocupation-input" 
                        placeholder="Enter ocupation"
                        ref={occupationRef}
                        required
                    />
                </div>
            </div>
            <div className="input-box-container">
                <span className="input-discription">Location: </span>
                <div className="input-box">
                    <input 
                        type="text" 
                        className="ocupation-input" 
                        placeholder="Enter location"
                        ref={locationRef}
                        required
                    />
                </div>
            </div>
            <div className="input-box-container">
                <span className="input-discription">Discription: </span>
                <div className="input-box">
                    <textarea 
                        name="discription" 
                        id="discription" 
                        placeholder="Enter discription"
                        cols={15}
                        rows={5}
                        ref={discriptionRef}
                        required
                    >
                    </textarea>
                </div>
            </div>
            <div className="input-box-container">
                <span className="input-discription">Password: </span>
                <div className="input-box">
                    <input 
                        type={isShowed ? "text" : "password"} 
                        className="password-input"
                        placeholder="Password"
                        ref={passwordRef}
                        required
                    />
                </div>
            </div>
            <div className="input-box-container">
                <span className="input-discription">Repeat password: </span>
                <div className="input-box">
                    <input 
                        type={isShowed ? "text" : "password"} 
                        className="password-input"
                        placeholder="Password"
                        ref={repasswordRef}
                        required
                    />
                </div>
            </div>
            <div className="btn-login">
                <button onClick={handleRegister}>Register</button>
            </div>
            <span className="navigation-msg">
                Have an account? 
                <span className="link-text" onClick={() => goTo('/login')}> Log in</span>
            </span>
            {loading && <div className="authen">
                <Loading text="Registering..."/>
            </div>}
        </div>
    )
}