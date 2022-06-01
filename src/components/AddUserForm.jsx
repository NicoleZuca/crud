import React from "react";
import { useForm } from 'react-hook-form'

const AddUserForm = (props) => {

    const {register, handleSubmit, formState: { errors }} = useForm();

    const onSubmit = (data, e) => {
        //esta data lo que contiene es el user el cual viaja a la función addUser y se le va a agregar el id
       // console.log(data); 

        props.addUser(data)

        //limpiar campos
        e.target.reset();
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input type="text" name="name" autoComplete="off"
          {...register("name", {
            required: {
              value: true, message: "Campo Requerido",
            },
          })}
        />
        <div>
            {errors?.name?.message}
        </div>
      <label>Username</label>
      <input type="text" name="username" autoComplete="off"         
          {...register("username", {
            required: {
              value: true, message: "Campo Requerido",
            },
          })}
        />
        <div>
            {errors?.username?.message}
        </div>
      <button>Add new user</button>
    </form>
  );
};

export default AddUserForm;
