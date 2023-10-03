// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import Loader from '../components/Loader';
// import Error from '../components/Error';

// function Loginscreen() {

//     const [email, setemail] = useState('')
//     const [password, setpassword] = useState('')
//     const [loading, setloading] = useState(false) //variables 
//     const [error, seterror] = useState()


//     async function Login() {

//         const user = {

//             email,
//             password,
//         }

//         try{
//             setloading(true);
//             const result = await axios.post('/api/users/login', user).data
//             setloading(false);

//             localStorage.setItem('currentUser', JSON.stringify(result));
//             window.location.href="/home";

//           }catch(error){
//               console.log(error)
//               setloading(false)
//               seterror(true)
//           }

//     }

//     return (

//         <div>
//              {loading && (<Loader />)}


//             <div className="row justify-content-center mt-5">

//                 <div className='col-md-5 mt-15'>
//                 {error && (<Error message ="Invalid Credentionals"/>)}

//                     <div className='bs'>
//                         <h2>Login</h2>


//                         <input type="text" className="form-control" placeholder="email"
//                             value={email} onChange={(e) => { setemail(e.target.value) }} />

//                         <input type="text" className="form-control" placeholder="password"
//                             value={password} onChange={(e) => { setpassword(e.target.value) }} />

//                         <button className='btn mt-3' onClick={Login}>Login</button>

//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Loginscreen



































// //import e from 'express'
// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import Loader from '../components/Loader';
// import Error from '../components/Error';

// function Loginscreen() {

//   useEffect(() => {

//   }, []);

//   const [email, setemail] = useState('')
//   const [password, setpassword] = useState('')

//   const [loading, setloading] = useState(false)
//   const [error, seterror] = useState()

//   async function login() {
//       const user = {

//         email: email,
//         password: password,

//       }

//       try {
//         setloading(true);
//         const result = await axios.post('/api/users/login', user).data
//         //await axios.post('/api/users/login', user)
//         setloading(false);

//         localStorage.setItem('currentUser', JSON.stringify(result));
//         window.location.href = '/home';

//       } catch (error) {
//         console.log(error)
//         setloading(false);
//         seterror(true)
//       }
//   }

//   return (
//     <div>
//       {loading && (<Loader/>)}
//       <div className="row justify-content-center mt-5">
//         <div className="col-md-5 mt-5">
//         {error && (<Error message='Invalid Credentions'/>)}

//           <div className='bs'>
//             <h2>Login</h2>

//             <input type="text" className="form-control" placeholder="email" value={email} onChange={(e) => { setemail(e.target.value) }} />
//             <input type="text" className="form-control" placeholder="password" value={password} onChange={(e) => { setpassword(e.target.value) }} />

//             <button className='btn btn-primary mt-3' onClick={login}>Login</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Loginscreen



import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Loader from '../components/Loader'
import Error from '../components/Error'

function Loginscreen() {

    useEffect(() => {
        
    }, []);

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState()

    async function Login() {

        const user = {
            email,
            password,
        }
        try {
            setloading(true)
            const { data, status } = await axios.post('/api/users/login', user)
            setloading(false)

            if (status === 200) {
                localStorage.setItem('currentUser', JSON.stringify(data));
                window.location.href = '/home'
            } else {
                seterror(true);
            }
        } catch (error) {
            console.log(error)
            setloading(false)
            seterror(true)
        }
    }

    return (
        <div>
            {loading && (<Loader />)}
            <div className="row justify-content-center mt-5">
                <div className='col-md-5 '>
                    {error && (<Error message='Invalid Credentials' />)}
                    <div className='bs'>
                        <h1 className='bigh'>Login</h1>
                        <input type="text" className="form-control" placeholder='Email'
                            value={email} onChange={(e) => { setemail(e.target.value) }} />
                        <input type="text" className="form-control" placeholder='Password'
                            value={password} onChange={(e) => { setpassword(e.target.value) }} />
                    </div>

                    <button className='btn btn-primary mt-3' onClick={Login}>Login</button>

                    <div className="mt-5">
                        <p className="mb-0 text-muted">Not registered yet? Click here to <a className='alha' href="/register">Register</a></p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Loginscreen