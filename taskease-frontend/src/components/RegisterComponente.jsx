import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, NavLink } from 'react-router-dom';

export const RegisterComponent = ({ user, onSubmit }) => {

  return (
    <Formik
      initialValues={{ ...user }}
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
      {({
        values,
        
        handleChange,
        handleBlur,
        handleSubmit,
    
        /* and other goodies */
      }) => (


        <Form>
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <img
                className="mx-auto h-10 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Crea una cuenta
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm space-y-6">

              <div >
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 Class Properties text-left">
                  Nombre
                </label>
                <div className="mt-2">
                  <input

                    name="name"
                    type="text"
                    autoComplete="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                < ErrorMessage name="email" />
              </div>

              <div >
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 Class Properties text-left">
                  Email
                </label>
                <div className="mt-2">
                  <input

                    name="email"
                    type="email"
                    autoComplete="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                < ErrorMessage name="email" />
              </div>



              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Contraseña
                  </label>
                 
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <ErrorMessage name="password" />
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Registrarme
                </button>
              </div>

            </div>
          </div>

        </Form>
      )}
    </Formik>
  )
};
