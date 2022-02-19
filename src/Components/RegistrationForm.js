import React from 'react'
// import { Formik, Form } from 'formik'
// import { Link } from "react-router-dom"
// import TextField from './TextField'
import * as Yup from 'yup'
// import axios from 'axios'

function RegistrationForm() {
  // const validate = Yup.object({
  //   firstName: Yup.string()
  //     .max(15, 'Must be 15 characters or less')
  //     .required('Required'),
  //   lastName: Yup.string()
  //     .max(20, 'Must be 20 characters or less')
  //     .required('Required'),
  //   email: Yup.string()
  //     .email('Email is invalid!')
  //     .required('Email is required'),
  //   password: Yup.string()
  //     .min(6, 'Password must be at least 6 characters')
  //     .required('Password is required'),
  //   confirmPassword: Yup.string()
  //     .oneOf([Yup.ref('password'), null], 'Password must match')
  //     .required('Confirm Password is required'),
  // });

//   return <Formik
//     initialValues={{
//       firstName: '',
//       lastName: '',
//       email: '',
//       password: '',
//       confirmPassword: ''
//     }}
//     validationSchema={validate}
//     onSubmit={async (values) => {
//       console.log(values)

//       const userDimnsion = {
//         "firstName": values.firstName,
//         "lastName": values.lastName,
//         "userName": values.userName,
//         "password": values.password,
//         "favoriteGenres": "favoriteGenres",
//         "avgReadingHrsDaily": 5
//       }

//       await axios({
//         method: 'POST',
//         url: 'http://localhost:8080/api/user/register',
//         body: JSON.stringify(userDimnsion)
//       })
//         .then((response) => {
//           console.log("Register Successfull!")
//         })
//         .catch((error) => {
//           console.log(error)
//         })
//     }}
//   >
//     {formik => (
//       <div>
//         <h1 className="text-center text-4xl text-gray-500 mb-10">Register</h1>
//         <Form action="" className="flex justify-center flex-col self-center shadow-md bg-white rounded px-8 pt-6 pb-8 mb-4 font-['Roboto]">
//           <div className="flex gap-4 mb-3">
//             <div className="flex-1">
//               <TextField type="text"
//                 name="firstName"
//                 label="First Name"
//                 value={Formik.firstName}
//               />
//             </div>
//             <div className="flex-1">
//               <TextField type="text"
//                 name="lastName"
//                 label="Last Name"
//                 value={Formik.lastName}
//               />
//             </div>
//           </div>
//           <div className="flex gap-4 mb-3">
//           <div className="flex-1">
//             <TextField type="email"
//               name="email"
//               label="Email Address"
//               value={Formik.email}
//             />
//           </div>
//           <div className="flex-1">
//             <TextField type="text"
//               name="userName"
//               label="User Name"
//               value={Formik.userName}
//             />
//           </div>
//           </div>
//           <div className="flex-1">
//             <TextField type="password"
//               name="password"
//               label="Password"
//               value={Formik.password}
//             />
//           </div>
//           <div className="mb-3">
//             <TextField type="password"
//               name="confirmPassword"
//               label="Confirm Password"
//             />
//           </div>
//           <div className="flex items-center">
//             <button type="submit" className="text-white w-full rounded-full bg-blue-500 hover:bg-blue-700:text-white font-bold py-2 px-4 round">Register</button>
//           </div>
//           <div className="mt-14 text-center">
//             Already have an account? <Link to="/login" className="text-bold text-blue-500">Login Here</Link>
//           </div>
//         </Form>
//       </div>
//     )}
//   </Formik>
// }

return <>
const handleSubmit = function() {
  axios({
    method: 'POST',
    url: 'http://localhost:8080/api/user/register',
    body: {
      "firstName": "Prasad",
      "lastName": "Thakur",
      "username": "prasad.th16@gmail.com",
      "password": "12345678",
      "favoriteGenres": "Sci-Fi,Thriller",
      "avgReadingHrsDaily": 2
  }
  })
    .then(response, () => {
      console.log("working!")
    })
}

<div className="w-full max-w-xs">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    {/* <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        Username
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        Password
      </label>
      <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
      <p className="text-red-500 text-xs italic">Please choose a password.</p>
    </div> */}
    <div className="flex items-center justify-between">
      <button type="submit" onSubmit={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </button>
      <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </div>
  </form>
  <p className="text-center text-gray-500 text-xs">
    &copy;2020 Acme Corp. All rights reserved.
  </p>
</div>
</>
}

export default RegistrationForm;
