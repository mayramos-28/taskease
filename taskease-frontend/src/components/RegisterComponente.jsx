import React from 'react';
import { Formik, Field, Form, ErrorMessage  } from 'formik';
import * as Yup from 'yup';

export const RegisterComponent = ({user, onSubmit}) => {

 return(
    <Formik
       initialValues={{...user}}
       validationSchema={Yup.object({
         name: Yup.string()
           .max(15, 'Must be 15 characters or less')
           .required('Required'),
           password: Yup.string()
           .min(6, 'Must be 6 characters or more')
           .required('Required'),
         email: Yup.string().email('Invalid email address').required('Required'),
       })}
       onSubmit={onSubmit}
     >
       <Form>
         <label htmlFor="firstName">Nombre Completo</label>
         <Field name="name" type="text" />
         <ErrorMessage name="name" />
         
 
         <label htmlFor="email">Email</label>
         <Field name="email" type="email" />
         <ErrorMessage name="email" />

         <label htmlFor="password">Contraseña</label>
         <Field name="password" type="password" />
         <ErrorMessage name="password" />
 
         <button type="submit">Registro</button>
       </Form>
     </Formik>
 )
};