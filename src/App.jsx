import { BrowserRouter, Routes, Route } from "react-router-dom" 
import Layout from "./components/Layout"
import Products from "./pages/Products"
import StoreContextProvider from "../context/StoreContext"
export default function App(){

  return(
    <>
    <BrowserRouter>
    <StoreContextProvider>
    <Layout>
      <Routes>
        <Route path="/Products" element={<Products/>}/>
        <Route path="/Products/Categories/:category" element={<Products/>}/>

      </Routes>
    </Layout>
    </StoreContextProvider>
    </BrowserRouter>
    </>
  )
}