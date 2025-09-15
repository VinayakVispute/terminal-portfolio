import React from "react";

const AboutCommand: React.FC = () => {
  return (
    <div className="font-mono text-foreground space-y-4">
      <p>
        👋 Hey there! I&apos;m{" "}
        <span className="text-yellow font-bold">Vinayak</span>, the guy who
        turns coffee into code!
      </p>

      <p>
        <span className="text-green font-semibold">I ship fast</span>,
        <span className="text-orange font-semibold"> design sharp</span>, and
        <span className="text-magenta font-semibold">
          {" "}
          engineer with precision
        </span>
        .
      </p>

      <p>
        Right now, I&apos;m working as
        <span className="text-cyan font-bold"> Full Stack Developer</span> at
        <span className="text-blue font-bold"> Bundled Design</span>
      </p>

      <p>
        <span className="text-green">I love building cool stuff</span> and{" "}
        <span className="text-orange">trying new things</span>. Sometimes I
        break things too, but hey, that&apos;s how you learn, right? 🤷‍♂️
      </p>

      <p>When I&apos;m not coding, you can find me:</p>
      <ul className="list-disc list-inside space-y-2 ml-4">
        <li>
          🎵 Jamming to <span className="text-green">Spotify</span>
        </li>
        <li>
          😴 Trying to <span className="text-red">fix my sleep schedule</span>{" "}
          (Error 404: Sleep not found)
        </li>
      </ul>

      <p>
        Remember: Keep calm and console.log on! And if all else fails, try
        turning it off and on again! 🔌
      </p>
    </div>
  );
};

export default AboutCommand;
