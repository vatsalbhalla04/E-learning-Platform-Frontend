export default function Banner() {
    return (
      <div className="flex justify-center mt-1 cursor-default">
        <div className="w-[99%] bg-orange-400 text-white flex items-center justify-center gap-2 p-2 text-sm sm:text-base md:text-lg rounded-md">
          <span>Free Courses 🌟 Sale Ends Soon, Get It Now</span>
          <svg
            width="18"
            height="15"
            viewBox="0 0 18 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block cursor-pointer"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.599609 7.5C0.599609 7.00294 1.00255 6.6 1.49961 6.6L14.2651 6.6L9.27581 1.84874C8.91752 1.50423 8.90634 0.934492 9.25086 0.576197C9.59537 0.217903 10.1651 0.206731 10.5234 0.551245L17.1234 6.85125C17.2999 7.02093 17.3996 7.25518 17.3996 7.49999C17.3996 7.74481 17.2999 7.97906 17.1234 8.14874L10.5234 14.4487C10.1651 14.7933 9.59537 14.7821 9.25086 14.4238C8.90635 14.0655 8.91752 13.4958 9.27581 13.1512L14.2651 8.39999L1.49961 8.4C1.00255 8.4 0.599609 7.99705 0.599609 7.5Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    );
  }
  