import React from "react";

export default function Footer() {
  return (
    <>
      <footer >
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="#" className="nav-link  text-body-secondary">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link  text-body-secondary">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link  text-body-secondary">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link  text-body-secondary">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link  text-body-secondary">
              About
            </a>
          </li>
        </ul>
        <p className="text-center text-body-secondary">© 2026 All Right Reserved</p>
      </footer>
    </>
  );
}
