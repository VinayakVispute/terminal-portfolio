import React from "react";
import Image from "next/image";
import { Sparkles, TerminalSquare } from "lucide-react";

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
      {/* Terminal effects notice */}
      <div className="flex items-center bg-black/30 text-cyan text-sm px-3 py-1 rounded-md mb-3 z-20 relative">
        <Sparkles size={16} className="text-yellow mr-2" />
        <span>Matrix & CRT effects enabled!</span>
        <span className="ml-2 text-xs text-green">
          Type <span className="font-bold">&quot;effects&quot;</span> to toggle
        </span>
      </div>

      {/* ASCII art - visible only on md screens and up */}
      <pre className="hidden md:block text-blue whitespace-pre overflow-hidden bg-transparent mb-4 text-xs sm:text-sm md:text-base lg:text-lg text-center font-mono max-w-full">
        {desktopAsciiArt}
      </pre>

      {/* Image - visible only on smaller than md screens */}
      <div className="block md:hidden mb-4 w-full max-w-[280px] h-[100px] relative overflow-hidden flex items-center justify-center z-20">
        <Image
          src={mobileLogoUrl}
          alt="Vinayak Vispute"
          width={280}
          height={100}
          priority
          className="object-contain relative z-20"
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
