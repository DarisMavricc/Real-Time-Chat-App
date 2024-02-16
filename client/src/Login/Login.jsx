import "./Login.css"
import {useFormik} from 'formik'
import * as Yup from "yup";

export const Login = () => {

    const formik = useFormik({
        initialValues: {
          username: "",
          password: "",
        },
    
        validationSchema: Yup.object().shape({
            username: Yup.string().required("Username is required!").min(4,"Minimum lenght of your Username must be 5 characters!"),
            password: Yup.string().required("Password is required!").min(5,"Minimum lenght of your Password must be 5 characters!"),
        }),
    
        onSubmit: async () => {
            const data = {
                username: formik.values.username,
                password: formik.values.password
            };
            console.log(data);
            /*try {
                await register(data);
                navigate('/');
              } catch (err) {
                setErr(err.response.data);
            }*/
          
    }});

    return (
        <div className="login">
            <h1>Chatter</h1>
            <input type="text" placeholder="Username" name="username" onChange={formik.handleChange}/>
            {formik.errors.username && formik.touched.username ? (<p className="error">{formik.errors.username}</p>) : null}
            <input type="password" placeholder="Password" name="password" onChange={formik.handleChange}/>
            {formik.errors.password && formik.touched.password ? (<p className="error">{formik.errors.password}</p>) : null}
            <button onClick={formik.handleSubmit}>LOG IN</button>
                <span>DONT HAVE AN ACCOUNT? <a href="/register">CREATE ONE</a></span>
        </div>
    )
    
}