import {
  COMMANDS,
  HELP_MESSAGE,
  INVALID_COMMAND_RESPONSE,
} from "../lib/constants";

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

  if (mappedCmd === "help" || mappedCmd === "--help") {
    return (
      <div
        className="text-[#d2d4d6] text-base"
        dangerouslySetInnerHTML={{ __html: HELP_MESSAGE }}
      ></div>
    );
  }

  // Check if command exists in COMMANDS
  if (!Object.keys(COMMANDS).includes(mappedCmd.split(" ")[0])) {
    return (
      <div
        className="text-base"
        dangerouslySetInnerHTML={{ __html: INVALID_COMMAND_RESPONSE }}
      ></div>
    );
  }

  return <div>CmdOutput</div>;
};

export default CmdOutput;
