import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/Navbar";
import DashBoard from "./pages/DashBoard";
import MoneyTransfer from "./pages/MoneyTransfer.jsx";
import DomesticTransfer from "./pages/DomesticTransfer";
import SendMoney from "./pages/SendMoney";
import Kyc from "./pages/Kyc";
import Bills from "./pages/Bills";
import History from "./pages/History";
import NEFTFormPage from "./pages/NEFTFormPage";
import RtgsForm from "./pages/RtgsForm";
import ImpsForm from "./pages/ImpsForm";
import InternationalTransferPage from "./pages/InternationalTransferPage";





const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/money-transfer" element={<MoneyTransfer />} />
        <Route path="/send-money" element={<SendMoney />} />
        <Route path="/kyc" element={<Kyc />} />
        <Route path="/pay-bills" element={<Bills />} />
          <Route path="/history" element={<History />} /> 
          <Route path="/neft" element={<NEFTFormPage />} />
        <Route path="/rtgs" element={<RtgsForm />} />
        <Route path="/imps" element={<ImpsForm />} />
         <Route path="/domestic-transfers" element={<DomesticTransfer />} />
         <Route path="/international-transfer" element={<InternationalTransferPage />} />
        
      </Routes>
    </Router>
  );
};

export default App;
