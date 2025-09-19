import { Link, NavLink } from "react-router-dom";
import neoBankLogo from "../assets/neobank-logo.png";
import {
  Bell,
  User,
  CreditCard,
  DollarSign,
  Repeat,
  TrendingUp,
  Settings,
  AlertCircle,
  LayoutDashboard,
  Menu,
} from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: <LayoutDashboard size={18} />, path: "/dashboard" },
    { name: "My Account", icon: <User size={18} />, path: "/myaccount" },
    { name: "Deposit", icon: <CreditCard size={18} />, path: "/deposit" },
    { name: "Loan", icon: <DollarSign size={18} />, path: "/loan" },
    { name: "Money Transfer", icon: <Repeat size={18} />, path: "/money-transfer" },
    { name: "Investment", icon: <TrendingUp size={18} />, path: "/investment" },
    { name: "Cards", icon: <CreditCard size={18} />, path: "/cards" },
    { name: "Service", icon: <Settings size={18} />, path: "/service" },
    { name: "Setting", icon: <Settings size={18} />, path: "/setting" },
    { name: "Complaint", icon: <AlertCircle size={18} />, path: "/complaint" },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top py-2">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        {/* Logo / Brand */}
        <Link to="/homepage" className="navbar-brand d-flex align-items-center fw-bold text-dark">
          <img src={neoBankLogo} alt="NeoBank Logo" style={{ height: "40px", width: "40px" }} />
          <span className="ms-2 fs-5 text-uppercase">NeoBank John</span>
        </Link>

        {/* Horizontal Menu (centered) */}
        <ul className="nav d-none d-lg-flex mx-4 flex-grow-1 justify-content-center">
          {menuItems.map((item) => (
            <li className="nav-item" key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `nav-link d-flex align-items-center px-3 py-2 mx-1 rounded fw-bold fs-5`
                }
                style={({ isActive }) => ({
                  backgroundColor: isActive ? "#e9ecef" : "transparent",
                  color: isActive ? "#000" : "#555",
                  transition: "all 0.3s ease",
                })}
              >
                <span className="me-1">{item.icon}</span>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right side: Search, Notifications, Profile */}
        <div className="d-flex align-items-center">
          {/* Search */}
          <form className="d-none d-md-flex me-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              style={{ minWidth: "200px" }}
            />
          </form>

          {/* Notifications */}
          <button className="btn position-relative me-3">
            <Bell size={22} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              3
            </span>
          </button>

          {/* Profile */}
          <div className="d-flex align-items-center me-3">
            <div
              className="rounded-circle bg-danger text-white d-flex align-items-center justify-content-center fw-bold me-2"
              style={{ width: "32px", height: "32px" }}
            >
              JD
            </div>
            <span className="fw-bold text-dark">John Doe</span>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="btn d-lg-none"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Horizontal line below navbar */}
      <hr className="m-0 border-2 border-secondary opacity-25" />

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="bg-light pt-2 shadow-sm border-top d-lg-none">
          <div className="container-fluid">
            <ul className="nav flex-column">
              {menuItems.map((item) => (
                <li className="nav-item mb-1" key={item.name}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `nav-link d-flex align-items-center fw-bold px-3 py-2 rounded fs-5`
                    }
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? "#e9ecef" : "transparent",
                      color: isActive ? "#000" : "#333",
                      transition: "all 0.3s ease",
                    })}
                  >
                    <span className="me-2">{item.icon}</span>
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;