import { COMMANDS, INVALID_COMMAND_RESPONSE } from "../lib/constants";

const CmdOutput = ({
  cmd,
  clearHistory,
  setClearHistory,
}: {
  cmd: string;
  clearHistory: boolean;
  setClearHistory: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const mappedCmd = cmd.trim().toLowerCase();

  if (mappedCmd === "clear") {
    if (!clearHistory) {
      setClearHistory(true);
    }
    return null;
  }

  if (!Object.keys(COMMANDS).includes(mappedCmd.split(" ")[0])) {
    return (
      <div
        className="text-base"
        dangerouslySetInnerHTML={{ __html: INVALID_COMMAND_RESPONSE }}
      ></div>
    );
  }

  const commandKey = mappedCmd.split(" ")[0] as keyof typeof COMMANDS;
  return (
    <div
      className="text-base"
      dangerouslySetInnerHTML={{
        __html: (COMMANDS[commandKey] as any)?.output || "",
      }}
    ></div>
  );
};

export default CmdOutput;
