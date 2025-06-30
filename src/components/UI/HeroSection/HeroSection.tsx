import ButtonContainer from "./ButtonContainer";
import Flash from "./Icons/Flash";
import Rays from "./Icons/Rays";

export default function HeroSection() {
  return (
    <div className="relative w-full px-4 max-w-[1600px] mx-auto">
      <div className="flex justify-center mt-8 sm:mt-12 lg:mt-16 xl:mt-20 text-center">
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-4 text-[clamp(1.75rem,4vw,3rem)] font-bold tracking-wide leading-tight">
          {/* Flash + Rays container */}
          <div className="relative inline-flex items-center shrink-0">
            {/* Rays positioned absolutely within Flash */}
            <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6">
              <Rays />
            </div>
            {/* Flash Icon with background */}
            <div className="bg-[#FFF4E5] p-2 sm:p-3 rounded-lg">
              <Flash />
            </div>
          </div>

          <span className="text-orange-400">Unlock</span>
          <span>Your Creative Potential</span>
        </div>
      </div>

      <div className="text-[clamp(1.125rem,3vw,2rem)] font-medium mt-4 sm:mt-6 lg:mt-8 flex justify-center tracking-wide text-center px-2 sm:px-0">
        with Online Design and Development Courses.
      </div>

      <div className="flex justify-center mt-3 sm:mt-5 font-normal text-[clamp(0.9rem,2vw,1.25rem)] text-center px-3 sm:px-0">
        Learn from Industry Experts and Enhance Your Skills.
      </div>

      <div className="mt-6 sm:mt-8 flex justify-center px-4">
        <div className="w-full flex justify-center max-w-[500px] sm:max-w-fit">
          <ButtonContainer />
        </div>
      </div>
    </div>
  );
}
