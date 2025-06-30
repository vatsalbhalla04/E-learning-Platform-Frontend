import { useState } from "react";
import ButtonComponent from "../../../Button/ButtonComponent";
import Logo from "../../../logo";

export default function ButtonContainer() {
  const [isOpen, setIsOpen] = useState(false);

  // async function home() {}
  // async function courses() {}
  // async function AboutUs() {}
  // async function Price() {}
  // async function Contact() {}
  // async function signUp() {}
  // async function Login() {}

  return (
    <div className="p-2">
      {/* Nav Row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        {/* Logo */}
        <div className="flex justify-center sm:justify-center mb-4 sm:mb-0">
          <Logo />
        </div>

        {/* Nav buttons */}
        <div className="hidden sm:flex flex-grow justify-center space-x-3">
          <ButtonComponent onClick={()=>{}} text="Home" variant="secondary" />
          <ButtonComponent onClick={()=>{}} text="Courses" variant="secondary" />
          <ButtonComponent onClick={()=>{}} text="About Us" variant="secondary" />
          <ButtonComponent onClick={()=>{}} text="Pricing" variant="secondary" />
          <ButtonComponent onClick={()=>{}} text="Contact" variant="secondary" />
        </div>

        {/* Auth buttons */}
        <div className="flex justify-center sm:justify-end space-x-3 mt-3 sm:mt-0">
          <ButtonComponent onClick={()=>{}} text="Sign Up" variant="secondary" />
          <ButtonComponent onClick={()=>{}} text="Login" variant="primary" />
        </div>

        {/* Mobile hamburger */}
        <div className="sm:hidden flex justify-end w-full mt-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 border rounded-md text-gray-700 hover:bg-gray-100"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="sm:hidden mt-4 flex flex-col space-y-2">
          <ButtonComponent onClick={()=>{}} text="Home" variant="secondary" />
          <ButtonComponent onClick={()=>{}} text="Courses" variant="secondary" />
          <ButtonComponent onClick={()=>{}} text="About Us" variant="secondary" />
          <ButtonComponent onClick={()=>{}} text="Pricing" variant="secondary" />
          <ButtonComponent onClick={()=>{}} text="Contact" variant="secondary" />
        </div>
      )}
    </div>
  );
}