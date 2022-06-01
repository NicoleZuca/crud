import React, { useState } from "react";
import UserTable from "./components/UserTable";
import AddUserForm from "./components/AddUserForm";
import EditUserForm from "./components/EditUserForm";
import { v4 as uuidv4 } from 'uuid';

function App() {

  //se hace el listado
  const usersData = [ 
    { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
    { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
    { id: uuidv4(), name: 'Ben', username: 'benisphere' },
  ]

  // state
  const [users, setUsers] = useState(usersData);

  // Agregar usuario
  const addUser = (user) => {
    users.id = uuidv4() 
    //uuidv4 es el id
    setUsers([
      ...users,
      user 
    ])
  }

  // Eliminar Usuarios
  const deleteUser = (id) => {

    const arrayFiltrado = users.filter(user => user.id !== id);

    setUsers(arrayFiltrado); //hace un recorrido por todos los usuario, y si el usuario.id es distinto al id que estamos enviando lo guarda en ese filtro, cuando el id es igual al id que le enviamos, lo va a excluir y lo va a devolver en un array
  }

  // Editar Usuarios
  const [editing, setEditing] = useState(false);

  //objeto con las propiedades del usuario vacío porque tenemos que capturar los datos de la tabla
  const [currentUser, setCurrentUser] = useState({ 
    id: null, name: '', username: ''
  });

  //recibe el usuario que va a modificar y se la envia al currentUser para que tenga la información de dicho usuario
  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id, name: user.name, username: user.username
    })
  }

  // Actualizar Usuarios
  const updateUser = (id, updateUser) => {
    setEditing(false);

    //si el id coincide entonces usamos el nuevo usuario, el que se modificó, en caso contrario seguimos usando el usuario tradicional
    setUsers(users.map(user => (user.id === id ? updateUser : user)))
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">

          {
            editing ? (
              <div>
                <h2>Edit user</h2>
                <EditUserForm
                currentUser={currentUser}
                updateUser={updateUser}
                />
              </div>
            ) : (
              <div>
                <h2>Add user</h2>
                <AddUserForm addUser={addUser} />
              </div>
            )
          }
          
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          {/* se pasa el estado como props porque estos son los campos que están dentro de la tabla */}
          <UserTable 
            users={users} 
            deleteUser={deleteUser}
            editRow={editRow}  
          /> 
        </div>
      </div>
    </div>
  );
}

export default App;
