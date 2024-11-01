import React from "react";
import { Target, Code, Brain, Car, Star, Rocket } from "lucide-react";

const GoalItem: React.FC<{
  icon: React.ReactNode;
  text: React.ReactNode;
  color: string;
}> = ({ icon, text, color }) => (
  <div
    className={`flex items-start mb-6 p-4 bg-base02 rounded-lg shadow-md border-l-4 ${color}`}
  >
    <div className="mr-4 mt-1 bg-base03 p-2 rounded-full">{icon}</div>
    <div className="flex-1">
      <p className="text-foreground">{text}</p>
    </div>
  </div>
);

const ColoredText: React.FC<{ children: React.ReactNode; color: string }> = ({
  children,
  color,
}) => <span className={`font-bold ${color}`}>{children}</span>;

const GoalsCommand: React.FC = () => {
  return (
    <div className="font-mono text-foreground">
      <div className="bg-base02 p-6 rounded-lg shadow-lg border-2 border-yellow mb-6">
        <h2 className="text-yellow text-2xl mb-4 font-bold flex items-center">
          <Star className="mr-2 text-yellow" size={28} />
          My Journey to Purpose and Excellence
        </h2>
        <p className="text-cyan italic">
          🚀 Let&apos;s dive into a journey of{" "}
          <ColoredText color="text-green">growth</ColoredText> and{" "}
          <ColoredText color="text-magenta">ambition</ColoredText>, setting
          meaningful goals that{" "}
          <ColoredText color="text-yellow">inspire</ColoredText> and{" "}
          <ColoredText color="text-red">empower</ColoredText>. These aren&apos;t
          just aspirations; they&apos;re stepping stones on the path to making a{" "}
          <ColoredText color="text-cyan">real impact</ColoredText> in the tech
          world.
        </p>
      </div>

      <div className="space-y-4">
        <GoalItem
          icon={<Code className="text-cyan" size={24} />}
          text={
            <>
              Contribute to and lead{" "}
              <ColoredText color="text-cyan">
                impactful Open Source Projects
              </ColoredText>
              , creating solutions that benefit the community and help shape the
              future of technology.
            </>
          }
          color="border-cyan"
        />

        <GoalItem
          icon={<Target className="text-green" size={24} />}
          text={
            <>
              Level up my experience so I can design systems for any{" "}
              <ColoredText color="text-green">big feature</ColoredText>.
              I&apos;m talking
              &apos;design-a-system-to-handle-a-million-cat-videos&apos; level
              of expertise.
            </>
          }
          color="border-green"
        />

        <GoalItem
          icon={<Brain className="text-magenta" size={24} />}
          text={
            <>
              Explore fields like{" "}
              <ColoredText color="text-magenta">AI/ML</ColoredText> and{" "}
              <ColoredText color="text-magenta">Cybersecurity</ColoredText>,
              embracing continuous learning to stay at the forefront of
              innovation.
            </>
          }
          color="border-magenta"
        />

        <GoalItem
          icon={<Car className="text-red" size={24} />}
          text={
            <>
              Buy a <ColoredText color="text-red">BMW M5</ColoredText>. Because
              nothing says &apos;I&apos;ve made it in tech&apos; like a car that
              goes from 0 to &apos;Holy cow!&apos; in 3.2 seconds.
            </>
          }
          color="border-red"
        />
      </div>

      <div className="bg-base02 p-6 rounded-lg shadow-lg border-2 border-yellow mt-6 flex items-center">
        <Star className="mr-2 text-yellow" size={20} />
        <p className="text-base">
          Remember: every step forward, no matter how small, brings us closer to
          our dreams.{" "}
          <ColoredText color="text-cyan">Embrace the journey</ColoredText>,{" "}
          <ColoredText color="text-magenta">stay committed</ColoredText>, and{" "}
          <ColoredText color="text-red">make a positive impact</ColoredText>.
          The future is ours to{" "}
          <ColoredText color="text-green">shape</ColoredText>!{" "}
          <Rocket className="inline ml-2 text-yellow" size={20} />
        </p>
      </div>
    </div>
  );
};

export default GoalsCommand;
