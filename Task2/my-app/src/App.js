import React, { useState }  from 'react' ;
import './App.css' ;
import logo from './logo.png'

const App = () => {
  const [users, setUsers] = useState();
  const getUsers = async () => {
    const response = await fetch("https://reqres.in/api/users?page=1");
    const data = await response.json();
    setUsers(data.data);
  }
  

  return (
    <>
      <header className="Navbar">
       <img src={logo} alt="" />
       <button className="btn " onClick={getUsers} >Get Users</button>
      </header>
      <div className="heading">
       <h1>LGMVIP Users</h1>
      </div>
      <div className="container">
        {users?.map((present, index) => {
          return (
            <div className="card" key={index}>
              <img src={present.avatar} alt="..." />
              <div className="card-body">
                <h3 className="card-title">
                  {present.first_name} {present.last_name}
                </h3>
                <h4 className="card-text">{present.email}</h4>
              </div>             
            </div>
          );
        })}
      </div>
    </>
  )
}

export default App

