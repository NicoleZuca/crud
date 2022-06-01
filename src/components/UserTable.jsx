import React from "react";

const UserTable = (props) => {
  //aqui recibe el props que creamos en app.js

  console.log(props.users);
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          //si el tamaño de este array de usuarios es mayor a cero entonces muestra todo lo que está dentro del primer tr y se hace la iteración de los props
          props.users.length > 0 ? (
            props.users.map(user => (
              <tr key={user.id}>
                {/*llamamos a name y username que son las propiedades que obtenemos en el listado*/}
                <td>
                  {user.id} - {user.name}
                </td>
                <td>{user.username}</td>
                <td>
                  <button
                    className="button muted-button"
                    onClick={() => {
                      props.editRow(user);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="button muted-button"
                    onClick={() => {
                      props.deleteUser(user.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            // en caso se que el array sea menor a cero muestre lo que está en este tr
            <tr>
              <td colSpan={3}>No users</td>
            </tr>
          )
        }
      </tbody>
    </table>
  );
};

export default UserTable;
