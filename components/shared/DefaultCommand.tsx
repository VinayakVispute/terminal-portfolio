import React from "react";
import { AlertTriangle, HelpCircle, Trash2 } from "lucide-react";

interface DefaultCommandProps {
  command: string;
}

const DefaultCommand: React.FC<DefaultCommandProps> = ({ command }) => {
  return (
    <div className="font-mono text-foreground mt-2 space-y-4">
      <div className="flex items-start">
        <AlertTriangle className="text-yellow mr-2 mt-1" size={20} />
        <div>
          <p className="text-red">
            Command not found: <span className="font-bold">{command}</span>
          </p>
          <p className="text-muted-foreground mt-1">
            The command you entered is not recognized. Please try again.
          </p>
        </div>
      </div>

      <div className="bg-base02 p-4 rounded-md">
        <h3 className="text-accent font-semibold mb-2 flex items-center">
          <HelpCircle className="mr-2" size={18} />
          Helpful Tips:
        </h3>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>
            Type <span className="text-cyan font-bold">help</span> to see a list
            of available commands.
          </li>
          <li>
            Use <span className="text-cyan font-bold">clear</span> or press{" "}
            <span className="text-cyan font-bold">Ctrl + L</span> to clear the
            terminal screen.
          </li>
          <li>
            Press <span className="text-cyan font-bold">↑</span> and{" "}
            <span className="text-cyan font-bold">↓</span> arrow keys to
            navigate through command history.
          </li>
        </ul>
      </div>

      <div className="flex items-center text-muted-foreground text-sm">
        <Trash2 className="mr-2" size={16} />
        <p>
          Tip: You can also use{" "}
          <span className="text-cyan font-bold">Ctrl + C</span> to cancel the
          current command.
        </p>
      </div>
    </div>
  );
};

export default DefaultCommand;
