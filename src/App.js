import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./routes/navigation/navigation.component";
import User from "./routes/user/user.component";
import Users from "./routes/users/users.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Users />} />
        <Route path=":userId" element={<User />} />
      </Route>
    </Routes>
  );
}

export default App;
