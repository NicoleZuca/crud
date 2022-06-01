import React from "react";
import { set, useForm } from 'react-hook-form'

const EditUserForm = (props) => {

  //console.log(props.currentUser)

    const {register, handleSubmit, setValue, formState: { errors }} = useForm({
      //recibe los valores por defecto que va a tener el formulario en este caso el input del name y el input del username
      defaultValues: props.currentUser
    });

    //Los setValue van a ir detectando si algún campo cambia por medio del props.currentUser
    setValue('name', props.currentUser.name);
    setValue('username', props.currentUser.username);    

    const onSubmit = (data, e) => {
        //esta data lo que contiene es el user el cual viaja a la función addUser y se le va a agregar el id
        console.log(data); 
        data.id = props.currentUser.id
        
        //al presionar el botón de edit user nos modifica la información
        props.updateUser(props.currentUser.id, data) 

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
      <button>Edit user</button>
    </form>
  );
};

export default EditUserForm;