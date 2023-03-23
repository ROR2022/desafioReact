import { useState } from "react";
import { RouterProvider } from "react-router";
import "./App.css";
import DevtoFooter from "./components/DevtoFooter/DevtoFooter";
import DevtoNavbar from "./components/DevtoNavBar/DevtoNavbar";

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
    <div>
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
        <DevtoNavbar/>
        <RouterProvider router={router} />
        <DevtoFooter/>
      </DevtoContext.Provider>
    </div>
  );
}

export default App;
