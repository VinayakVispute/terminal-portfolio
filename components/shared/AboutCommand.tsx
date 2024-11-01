import React from "react";
import Link from "next/link";

const AboutCommand: React.FC = () => {
  return (
    <div className="font-mono text-foreground space-y-4">
      <p>
        👋 Hey there! I&apos;m{" "}
        <span className="text-yellow font-bold">Vinayak</span>, the guy who
        turns coffee into code!
      </p>

      <p>
        Right now, I&apos;m working as
        <span className="text-cyan font-bold">
          {" "}
          Full Stack Developer
        </span> at{" "}
        <Link
          href="https://www.linkedin.com/company/antichurn/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue underline"
        >
          AntiChurn
        </Link>
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
          😂 Laughing at{" "}
          <span className="text-yellow">BeastBoyShub on YouTube</span>{" "}
          (He&apos;s my comedy API)
        </li>
        <li>
          😴 Trying to <span className="text-red">fix my sleep schedule</span>{" "}
          (Error 404: Sleep not found)
        </li>
      </ul>

      <p>
        My super-fancy setup: Two screens, one potato laptop. Armed with an{" "}
        <span className="text-cyan">IDE</span> (my magic wand), a{" "}
        <span className="text-yellow">terminal</span> (my crystal ball), and a{" "}
        <span className="text-blue">browser</span> (my window to the digital
        world).
        <span className="text-magenta font-bold">
          {" "}
          It ain&apos;t much, but it&apos;s honest work!
        </span>{" "}
        🚜
      </p>

      <p>
        Remember: Keep calm and console.log on! And if all else fails, try
        turning it off and on again! 🔌
      </p>
    </div>
  );
};

export default AboutCommand;
