import "./Register.css"
import {useFormik} from 'formik'
import { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import { AuthContext } from "../Context/AuthContext";

export const Register = () => {

    

    const [err,setErr] = useState(null);

    const navigate = useNavigate();

    const {currentUser} = useContext(AuthContext);
    const {register} = useContext(AuthContext);

    useEffect(() => {
        if(currentUser) {
            navigate('/');
        }
    },[])

    const formik = useFormik({
        initialValues: {
          fullName: "",
          email: "",
          username: "",
          password: "",
        },
    
        validationSchema: Yup.object().shape({
            fullName: Yup.string().required("Full Name is required!").min(7,"Minimum lenght of your Full Name must be 7 characters!"),
            email: Yup.string().required("Email is required!").email("Your email is not valid!"),
            username: Yup.string().required("Username is required!").min(4,"Minimum lenght of your Username must be 5 characters!"),
            password: Yup.string().required("Password is required!").min(5,"Minimum lenght of your Password must be 5 characters!"),
        }),
    
        onSubmit: async () => {
            const data = {
                full_name: formik.values.fullName,
                email: formik.values.email,
                username: formik.values.username,
                password: formik.values.password
            };
            try {
                await register(data);
                navigate('/');
              } catch (err) {
                setErr(err.response.data);
            }
          
    }});

    return (
        <div className="register">
            <h1>Chatter</h1>
            {err && err}
            <input type="text" placeholder="Full Name" name="fullName" onChange={formik.handleChange}/>
            {formik.errors.fullName && formik.touched.fullName ? (<p className="error">{formik.errors.fullName}</p>) : null}
            <input type="email" placeholder="Email" name="email" onChange={formik.handleChange}/>
            {formik.errors.email && formik.touched.email ? (<p className="error">{formik.errors.email}</p>) : null}
            <input type="text" placeholder="Username" name="username" onChange={formik.handleChange}/>
            {formik.errors.username && formik.touched.username ? (<p className="error">{formik.errors.username}</p>) : null}
            <input type="password" placeholder="Password" name="password" onChange={formik.handleChange}/>
            {formik.errors.password && formik.touched.password ? (<p className="error">{formik.errors.password}</p>) : null}
            <button onClick={formik.handleSubmit}>REGISTER</button>
                <span>ALREADY HAVE AN ACCOUNT? <a href="/login">LOG IN</a></span>
        </div>
    )
    
}