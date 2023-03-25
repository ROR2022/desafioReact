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
    <div style={{backgroundColor:'#dddddd70'}}>
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
        

        <RouterProvider router={router} />

        
        
      </DevtoContext.Provider>
     
    </div>

  );
}

export default App;
