import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Layouts
import CustomerLayout from "./layouts/CustomerLayout";
import AuthLayout from "./layouts/AuthLayout";
import AdminLayout from "./layouts/AdminLayout";

// Pages
import Home from "./pages/customer/Home";
import Menu from "./pages/customer/Menu";
import FoodDetail from "./pages/customer/FoodDetail";
import About from "./pages/customer/About";
import Contact from "./pages/customer/Contact";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/admin/Dashboard";
import Products from "./pages/admin/Products";
import Orders from "./pages/admin/Orders";
import Categories from "./pages/admin/Categories";
import Customers from "./pages/admin/Customers";
import Reviews from "./pages/admin/Reviews";
import Settings from "./pages/admin/Settings";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Security Component
import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  return (
    <Routes>
      {/* Customer */}
      <Route path="/" element={<CustomerLayout />}>
        <Route index element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="food/:id" element={<FoodDetail />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        {/* <Route path="cart" element={<Cart />} /> */}
        {/* <Route path="checkout" element={<Checkout />} /> */}
        {/* <Route path="my-orders" element={<MyOrders />} /> */}
      </Route>

      {/* Login and Register */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* Admin have ProtectedRoute */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="orders" element={<Orders />} />
        <Route path="products" element={<Products />} />
        <Route path="categories" element={<Categories />} />
        <Route path="customers" element={<Customers />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>

    // <div>
    //   <Navbar/>
    //   <Home/>
    //   <Footer/>
    // </div>
  );
}

export default App;

// import React, { useState } from "react";
// import Navbar from "./components/Navbar";
// import Home from "./pages/customer/Home";
// import Menu from "./pages/customer/Menu";
// import About from "./pages/customer/About";
// import Contact from "./pages/customer/Contact";
// import Footer from "./components/Footer";

// const App = () => {
//   const [activeView, setActiveView] = useState("home");
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [cart, setCart] = useState([]);
//   const [cartOpen, setCartOpen] = useState(false);

//   // បន្ថែមអាហារចូលកន្ត្រក
//   const addToCart = (food, quantity = 1) => {
//     setCart((prevCart) => {
//       const existing = prevCart.find((item) => item.name === food.name);
//       if (existing) {
//         return prevCart.map((item) =>
//           item.name === food.name
//             ? { ...item, qty: item.qty + quantity }
//             : item
//         );
//       }
//       return [...prevCart, { ...food, qty: quantity }];
//     });
//   };

//   // បន្ថែម ឬបន្ថយចំនួនក្នុងកន្ត្រក
//   const updateCartQty = (name, delta) => {
//     setCart((prev) =>
//       prev
//         .map((item) =>
//           item.name === name ? { ...item, qty: item.qty + delta } : item
//         )
//         .filter((item) => item.qty > 0)
//     );
//   };

//   const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
//   const totalPrice = cart
//     .reduce((sum, item) => sum + parseFloat(item.price) * item.qty, 0)
//     .toFixed(2);

//   // ប្តូរទៅទំព័រ Menu ដោយច្រោះតាមប្រភេទអាហារ
//   const goToMenuWithCategory = (category = "All") => {
//     setSelectedCategory(category);
//     setActiveView("menu");
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const renderPage = () => {
//     switch (activeView) {
//       case "home":
//         return (
//           <Home
//             setActiveView={setActiveView}
//             goToMenuWithCategory={goToMenuWithCategory}
//             addToCart={addToCart}
//           />
//         );
//       case "menu":
//         return (
//           <Menu
//             selectedCategory={selectedCategory}
//             setSelectedCategory={setSelectedCategory}
//             addToCart={addToCart}
//           />
//         );
//       case "about":
//         return <About setActiveView={setActiveView} />;
//       case "contact":
//         return <Contact />;
//       default:
//         return (
//           <div className="py-20 text-center">
//             <p className="text-gray-600">
//               Create the AuthForms.jsx component to show the{" "}
//               <span className="font-bold text-orange-500">{activeView}</span>{" "}
//               form here.
//             </p>
//             <button
//               onClick={() => setActiveView("home")}
//               className="mt-4 rounded-lg bg-orange-500 px-5 py-2 text-white"
//             >
//               Back to Home
//             </button>
//           </div>
//         );
//     }
//   };

//   return (
//     <div className="flex min-h-screen flex-col bg-white">
//       <Navbar
//         activeView={activeView}
//         setActiveView={setActiveView}
//         cartCount={totalItems}
//         onOpenCart={() => setCartOpen(true)}
//       />

//       <main className="flex-grow">{renderPage()}</main>

//       <Footer setActiveView={setActiveView} />

//       {/* ផ្ទាំងកន្ត្រកទំនិញ (Cart Drawer) */}
//       {cartOpen && (
//         <div className="fixed inset-0 z-50 flex justify-end bg-black/50">
//           <div className="flex h-full w-full max-w-md flex-col bg-white p-6 shadow-2xl">
//             <div className="flex items-center justify-between border-b pb-4">
//               <h2 className="text-xl font-black text-gray-900">Your Cart</h2>
//               <button
//                 onClick={() => setCartOpen(false)}
//                 className="rounded-lg bg-gray-100 px-3 py-1 text-sm font-bold hover:bg-gray-200"
//               >
//                 ✕
//               </button>
//             </div>
//             <div className="my-4 flex-1 space-y-4 overflow-y-auto">
//               {cart.length === 0 ? (
//                 <p className="py-12 text-center text-sm text-gray-500">
//                   កន្ត្រករបស់អ្នកនៅទំនេរនៅឡើយទេ។
//                 </p>
//               ) : (
//                 cart.map((item) => (
//                   <div
//                     key={item.name}
//                     className="flex items-center justify-between rounded-xl border border-gray-100 p-3"
//                   >
//                     <div className="flex items-center gap-3">
//                       <img
//                         src={item.image}
//                         alt={item.name}
//                         className="h-14 w-14 rounded-lg object-cover"
//                       />
//                       <div>
//                         <h4 className="text-sm font-bold">{item.name}</h4>
//                         <p className="text-xs font-bold text-orange-500">
//                           ${item.price}
//                         </p>
//                       </div>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <button
//                         onClick={() => updateCartQty(item.name, -1)}
//                         className="h-7 w-7 rounded-md bg-gray-100 font-bold"
//                       >
//                         -
//                       </button>
//                       <span className="text-sm font-bold">{item.qty}</span>
//                       <button
//                         onClick={() => updateCartQty(item.name, 1)}
//                         className="h-7 w-7 rounded-md bg-orange-100 font-bold text-orange-600"
//                       >
//                         +
//                       </button>
//                     </div>
//                   </div>
//                 ))
//               )}
//             </div>

//             {cart.length > 0 && (
//               <div className="border-t pt-4">
//                 <div className="mb-4 flex justify-between text-base font-black">
//                   <span>Total:</span>
//                   <span className="text-orange-500">${totalPrice}</span>
//                 </div>
//                 <button
//                   onClick={() => {
//                     alert(`Order placed successfully! Total: $${totalPrice}`);
//                     setCart([]);
//                     setCartOpen(false);
//                   }}
//                   className="w-full rounded-xl bg-orange-500 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
//                 >
//                   Checkout Now
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;