import React from "react";
import { useFormik } from "formik";
import { register } from "./schemas/schemas";
const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};
function Registration() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: register,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });
  console.log(errors);
  return (
    <div className="card border p-3 w-50 mx-auto mt-5"  style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'}} >
      <h1 className="mb-3">Registration with Formik and Yup</h1>
      <form onSubmit={handleSubmit} >
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            name
          </label>
          <input
            type="text"
            name="name"
            className="form-control" 
            id="exampleInputName"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touched.name ? (
            <p className="form-error">{errors.name}</p>
          ) : null}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-describedby="emailHelp"
          />
          {errors.email && touched.email ? (
            <p className="form-error">{errors.email}</p>
          ) : null}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.password && touched.password ? (
            <p className="form-error">{errors.password}</p>
          ) : null}
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            name="confirmPassword"
            required
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.confirmPassword && touched.confirmPassword ? (
            <p className="form-error">{errors.confirmPassword}</p>
          ) : null}
        </div>
        <button type="button" class="btn btn-outline-success">Signup</button>
      </form>
      <hr />
     <span>Already have i account <button type="button" class="btn btn-outline-secondary">Login</button> </span>  
    </div>
  );
}

export default Registration;
