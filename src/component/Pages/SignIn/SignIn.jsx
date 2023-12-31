import { Link, useNavigate } from 'react-router-dom';
import img from '../../../assets/other/login.png'
import { useContext } from "react";
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../../../Shared/SocialLogin';
import logo from "../../../assets/logo/logo.png"
import { Helmet } from 'react-helmet';


const SignIn = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate()
  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        if (loggedUser) {
          Swal.fire(
            'Good job!',
            'Login Successful',
            'success'
          )
          navigate('/');
        }
      })
      // .catch(error => {
      //   console.log(error);
      // })

  }
  return (
    <div className="card lg:card-side bg-base-100 shadow-2xl w-[80%] mx-auto  rounded-3xl h-[50%] my-20">

      {/* Title */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Soulmate | Sign In</title>
      </Helmet>
      
      <figure className='w-[50%]'><img className='object-cover -ml-24 h-[750px] ' src={img} alt="" /></figure>
      <div className="card-body">
        <div className='text-center mb-5'>
        <img className='w-52 mx-auto mt-10' src={logo} alt="" />
        </div>
        <p className='text-center text-[#a2a2a2] text-xl'>Welcome to SoulMate</p>
        <form onSubmit={handleSignIn} className='flex flex-col gap-6 mx-4 md:mx-0' action="">

          {/* Email field*/}
          <div>
            <div className="relative z-0">
              <input name='email' type="email" id="standard_success" aria-describedby="standard_success_help" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-[#a2a2a2] appearance-none dark:text-white dark:border-gray-500 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-[#a2a2a2] peer" placeholder=" " required />
              <label htmlFor="standard_success" className="absolute text-sm text-[#a2a2a2] dark:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">User name or Email</label>
            </div>
            {/* This paragraph is for input validation. if user inter invalid email or password this paragraph will be shown and text color will be red */}
            <p id="standard_success_help" className="hidden mt-2 text-xs text-[#a2a2a2] dark:text-gray-400"><span className="font-medium">Well done!</span> Some success message.</p>
          </div>

          {/* password field*/}
          <div>
            <div className="relative z-0">
              <input name='password' type="password" id="standard_success" aria-describedby="standard_success_help" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-[#a2a2a2] appearance-none dark:text-white dark:border-gray-500 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-[#a2a2a2] peer" placeholder=" " required />
              <label htmlFor="standard_success" className="absolute text-sm text-[#a2a2a2] dark:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
            </div>
            {/* This paragraph is for input validation. if user inter invalid email or password this paragraph will be shown and text color will be red */}
            <p id="standard_success_help" className="hidden mt-2 text-xs text-[#a2a2a2] dark:text-gray-400"><span className="font-medium">Well done!</span> Some success message.</p>
          </div>
          <p className='text-sm text-[#a2a2a2] text-right'><Link className='red-text'>Forgot password?</Link> </p>
          <button className='btn bg-gray-500 text-gray-300 w-[40%] md:w-[25%] rounded-full mx-auto hover:text-black'>SignIn</button>
        </form>

        <div className='text-center text-[#a2a2a2] flex justify-center items-center gap-4 '> <hr className='w-full ml-8 ' /><span>or</span><hr className='w-full mr-8' /> </div>
        <div className="flex justify-center items-center gap-4">
         <SocialLogin></SocialLogin>
        </div>
        <p className='text-center text-[#a2a2a2] '>New to soulmate? <Link className='red-text' to="/signup">Create an account</Link></p>
      </div>
    </div>
  );
};

export default SignIn;