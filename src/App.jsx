import { Routes, Route, Navigate } from "react-router-dom";
import './index.css';
import './App.css';
import Page1 from './pages/Page1';
import Brands from './pages/Brands';
import Cart from './pages/Cart';
import Account from './pages/Account';
import AccountDetails from './pages/AccountDetails';
import AddBrand from './pages/AddBrand';
import Billing from './pages/Billing';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route
          path="/home"
          element={<Navigate to="/" />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/addBrand" element={<AddBrand />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<Account />} />
        <Route path="/accountDetails" element={<AccountDetails />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/_account" element={<h1 className="text-center font-bold text-3xl">Page is in progress...</h1>} />
      </Routes>
    </>
  );
}

export default App;
