import React from "react";
import Image from "next/image";

const Heading = () => {
  // Regular ASCII art for desktop
  const desktopAsciiArt = `    __     __   _                                    _    
    \\ \\   / /  (_)  _ __     __ _   _   _    __ _   | | __
     \\ \\ / /   | | | '_ \\   / _\` | | | | |  / _\` |  | |/ /
      \\ V /    | | | | | | | (_| | | |_| | | (_| |  |   < 
       \\_/     |_| |_| |_|  \\__,_|  \\__, |  \\__,_|  |_|\\_\\
                                    |___/                `;

  // Cloudinary image URL with optimization parameters
  const mobileLogoUrl =
    "https://res.cloudinary.com/dkawvablj/image/upload/c_scale,w_280,h_100,f_auto,q_auto:good/v1742328162/lconcl0cpzglwqxvmis2.png";

  return (
    <div className="flex flex-col items-center">
      {/* ASCII art - visible only on md screens and up */}
      <pre className="hidden md:block text-blue whitespace-pre overflow-hidden bg-transparent mb-4 text-xs sm:text-sm md:text-base lg:text-lg text-center font-mono max-w-full">
        {desktopAsciiArt}
      </pre>

      {/* Image - visible only on smaller than md screens */}
      <div className="md:hidden mb-4 w-full max-w-[280px] h-[100px] relative overflow-hidden flex items-center justify-center">
        <Image
          src={mobileLogoUrl}
          alt="Vinayak Vispute"
          fill
          priority
          className="object-contain"
          style={{ opacity: 1 }}
        />
      </div>

      <div className="text-center max-w-2xl mx-auto text-cyan text-base sm:text-lg md:text-xl">
        <p className="text-justify mb-2">Welcome to my Portfolio.</p>
        <p className="text-justify mb-2">
          Use <span className="text-orange">↑</span> and{" "}
          <span className="text-orange">↓</span> to navigate command history.
        </p>
        <p className="text-justify mb-2">
          Type <span className="text-red">&quot;help&quot;</span> for more
          commands.
        </p>
        <p className="text-justify">
          Note: Commands are case-sensitive. Please use lowercase only.
        </p>
      </div>
    </div>
  );
};

export default Heading;
