
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./Pages/Home/HomePage"
import NoPage from "./Pages/noPage/NoPage"
import ProductInfo from "./Pages/productInfo/ProductInfo"
import ScrollTop from "./Components/ScrollTop/ScrollTop"
import CartPage from "./Pages/cart/CartPage"
import AllProduct from "./Pages/allProduct/AllProduct"
import Signup from "./Pages/Registation/Signup"
import Login from "./Pages/Registation/Login"
import UserDashboard from "./Pages/user/UserDashboard"
import AdminDashboard from "./Pages/Admin/AdminDashboard"
import AddProductPage from "./Pages/Admin/AddProductPage"
import UpdateProductPage from "./Pages/Admin/UpdateProductPage"
import MyState from "./context/MyState"
import { Toaster } from "react-hot-toast"
import { ProtectedRouteForUser } from "./ProtectedRoute/ProtectedRouteForUser"
import { ProtectedRouteForAdmin } from "./ProtectedRoute/ProtectedRouteForAdmon"
import CategoryPage from "./Pages/category/CategoryPage"


const App = () => {
  return (
    <div>
      <MyState>
     <BrowserRouter>
     <ScrollTop />
     <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/*" element={<NoPage />} />
      <Route path="/productInfo/:id" element={<ProductInfo />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/allProduct" element={<AllProduct />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/category/:categoryname" element={<CategoryPage />} />

      <Route path="/user-dashboard" element={
        <ProtectedRouteForUser>
           <UserDashboard />
        </ProtectedRouteForUser> } />
      <Route path="/admin-dashboard" element={
        <ProtectedRouteForAdmin>
          <AdminDashboard />
        </ProtectedRouteForAdmin> } />
     <Route path="/addproduct" element={
     <ProtectedRouteForAdmin>
     <AddProductPage />
      </ProtectedRouteForAdmin>  } />
     <Route path="/updateProductPage/:id" element={
     <ProtectedRouteForAdmin>
      <UpdateProductPage />
     </ProtectedRouteForAdmin> }/>

   
     </Routes>
     <Toaster />
     </BrowserRouter>
     </MyState>
  
    </div>
  )
}

export default App