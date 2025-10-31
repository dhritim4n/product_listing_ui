import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Layout from "./components/Layout"
import Products from "./pages/Products"
import StoreContextProvider from "../context/StoreContext"
import Cart from "./pages/Cart"

export default function App() {

  return (
    <>
      <BrowserRouter>
        <StoreContextProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Navigate to="/Products" />} />
              <Route path="/Products" element={<Products />} />
              <Route path="/Products/Categories/All" element={<Navigate to={"/Products"} />} />
              <Route path="/Products/Categories/:category" element={<Products />} />
              <Route path="/Cart" element={<Cart/>}/>

            </Routes>
          </Layout>
        </StoreContextProvider>
      </BrowserRouter>
    </>
  )
}