import React from "react";

const Heading = () => {
  const asciiArt = `    __     __   _                                    _    
    \\ \\   / /  (_)  _ __     __ _   _   _    __ _   | | __
     \\ \\ / /   | | | '_ \\   / _\` | | | | |  / _\` |  | |/ /
      \\ V /    | | | | | | | (_| | | |_| | | (_| |  |   < 
       \\_/     |_| |_| |_|  \\__,_|  \\__, |  \\__,_|  |_|\\_\\
                                    |___/                `;
  return (
    <div className="flex flex-col items-center">
      <pre className="text-blue whitespace-pre-wrap mb-4 text-xs sm:text-sm md:text-base lg:text-lg text-center">
        {asciiArt}
      </pre>

      <div className="text-center max-w-2xl text-cyan text-xl">
        <p className="text-justify mb-2">Welcome to my Portfolio.</p>
        <p className="text-justify mb-2">
          Use <span className="text-orange">↑</span> and{" "}
          <span className="text-orange">↓</span> to navigate command history.
        </p>
        <p className="text-justify">
          Type <span className="text-red">"help"</span> for more commands.
        </p>
      </div>
    </div>
  );
};

export default Heading;
