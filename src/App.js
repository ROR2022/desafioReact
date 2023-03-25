import { useState } from "react";
import { RouterProvider } from "react-router";
import "./App.css";

import DevtoContext from "./context/DevtoContext";
import { router } from "./router/router";

const initialDataUser = {
  avatarUrl: "",
  name: "",
  email: "",
  password: "",
  posts:[]
};

const initialDataPosts = [];

function App() {
  const [dataUser, setDataUser] = useState(initialDataUser);
  const [dataPosts, setDataPosts] = useState(initialDataPosts);
  return (
<<<<<<< HEAD
    <div style={{backgroundColor:'#dddddd70'}}>
=======

    <div>
>>>>>>> footer
      <DevtoContext.Provider
        value={[
          dataPosts,
          setDataPosts,
          dataUser,
          setDataUser,
          initialDataPosts,
          initialDataUser,
        ]}
      >
<<<<<<< HEAD
        

        <RouterProvider router={router} />

        
        
=======
        <DevtoNavbar/>
        <RouterProvider router={router} />
>>>>>>> footer
      </DevtoContext.Provider>
      <DevtoFooter />
    </div>

  );
}

export default App;
