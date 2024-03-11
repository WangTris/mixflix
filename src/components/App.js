import React from "react";
import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";

// components
import { Actors, MovieInformation, Movies, NavBar, Profile } from "./index";

// styles
import { Root, Content, Toolbar } from "./styles";

const App = () => {
  return (
    <Root>
      <CssBaseline />
      <NavBar />
      <Content>
        <Toolbar />
        <Routes>
          <Route exact path="/" element={<Movies />} />
          <Route exact path="/movie/:id" element={<MovieInformation />} />
          <Route exact path="/actors/:id" element={<Actors />} />
          <Route exact path="/profile/:id" element={<Profile />} />
        </Routes>
      </Content>
    </Root>
  );
};

export default App;
