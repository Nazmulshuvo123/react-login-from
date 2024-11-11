import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.init";
import { useState } from "react";


const SignUp = () => {

    const [errorMassage, setErrorMassage] = useState('');
    const [success, setSuccess] = useState(false);
 const handleSignUp = (event) =>{
    event.preventDefault();
    const email  = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);

    //reset error and status
    setErrorMassage( ' ' );
    setSuccess( false );

    if(password.length < 6){
        setErrorMassage("Password should be six character")
        return;
    }

    //create user with email and password
    createUserWithEmailAndPassword(auth, email, password)
     .then(result => {
        console.log(result.user)
        setSuccess(true)
     })
     .catch(error => {
        console.log('Error', error.message);
        setErrorMassage(error.message);
        setSuccess(false)
        
      })
}


  return (
    <div className="mx-auto card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-5xl font-bold">Sign up now!</h1>

      <form onSubmit={handleSignUp} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      {
        errorMassage && <p className="font-bold text-center text-sm text-red-500">{errorMassage}</p>
      }
      {
        success && <p className="font-bold text-center text-sm text-green-500"> Sign Up Successful </p>
      }
    </div>
  );
};

export default SignUp;
