import { useState } from "react";
import ButtonComponent from "../../../Button/ButtonComponent";
import Logo from "../../../logo";

export default function ButtonContainer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-2 w-full">
      {/* Navbar wrapper */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Logo */}
        <div className="shrink-0">
          <Logo />
        </div>

        {/* Nav buttons (centered in desktop) */}
        <div className="hidden sm:flex flex-wrap justify-center gap-2 flex-1">
          <ButtonComponent onClick={() => {}} text="Home" variant="secondary" />
          <ButtonComponent onClick={() => {}} text="Courses" variant="secondary" />
          <ButtonComponent onClick={() => {}} text="About Us" variant="secondary" />
          <ButtonComponent onClick={() => {}} text="Pricing" variant="secondary" />
          <ButtonComponent onClick={() => {}} text="Contact" variant="secondary" />
        </div>

        {/* Auth buttons */}
        <div className="flex gap-2 shrink-0">
          <ButtonComponent onClick={() => {}} text="Sign Up" variant="secondary" />
          <ButtonComponent onClick={() => {}} text="Login" variant="primary" />
        </div>

        {/* Hamburger only on small screens */}
        <div className="sm:hidden ml-auto">
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

      {/* Mobile dropdown nav buttons */}
      {isOpen && (
        <div className="sm:hidden mt-4 flex flex-col space-y-2">
          <ButtonComponent onClick={() => {}} text="Home" variant="secondary" />
          <ButtonComponent onClick={() => {}} text="Courses" variant="secondary" />
          <ButtonComponent onClick={() => {}} text="About Us" variant="secondary" />
          <ButtonComponent onClick={() => {}} text="Pricing" variant="secondary" />
          <ButtonComponent onClick={() => {}} text="Contact" variant="secondary" />
        </div>
      )}
    </div>
  );
}
