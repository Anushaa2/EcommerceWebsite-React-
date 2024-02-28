import React from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup';
import { Helmet } from 'react-helmet';


const Register = () => {
  return (
    <>
    <Helmet>
        <title>Login</title>
    </Helmet>
    <Formik
    initialValues={{email:'',password:''}}
     validationSchema={Yup.object({
       
     

        email:Yup.string()
        .required('Email is mandatory'),
        
        password:Yup.string()
        .required('Please enter your password'),
       

   
        

    })}
    
    
    
    
 
    >
        <div className="container my-3">
            <div className="row d-flex justify-content-center">
                <div className="col-md-5 shadow">
                    <Form>
                        <div className="mb-2">
                            <label htmlFor="email">Email</label>
                            <Field type="email" name="email"id="email" className='form-control'/>
                            <ErrorMessage name="email">
                                {msg=><div style={{color:'red'}}>{msg}</div>}
                            </ErrorMessage>
                        </div> 
                        <div className="mb-2">
                            <label htmlFor="password"> Password</label>
                            <Field type="password" name="password" id="password" className='form-control'/>
                            <ErrorMessage name="password">
                                {msg=><div style={{color:'red'}}>{msg}</div>}
                            </ErrorMessage>
                        </div> 
                       
                        <div className="mb-2">
                            <button className='btn btn-primary'>
                                Login
                            </button>
                        </div>
                    </Form>
                </div>


            </div>

        </div>
    </Formik>


    {/* login signup garne */}

    
    
    
    </>
  )
}

export default Register