import { useEffect, useState } from "react";
import { IProduct } from "../model/IProduct";
import Header from "./Header";
import { Container } from "@mui/material";
import { Outlet } from "react-router";

function App() {

 

  return (
    <>
      <Header />
      <Container>
         <Outlet/>
      </Container>
    </>
  )
}

export default App
