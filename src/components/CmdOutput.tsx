import {
  COMMANDS,
  INVALID_COMMAND_RESPONSE,
  DIRECTORY_CONTENTS,
  FILE_CONTENTS,
  DIR_NOT_FOUND,
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
  const [command, ...args] = mappedCmd.split(" ");

  if (mappedCmd === "clear") {
    if (!clearHistory) {
      setClearHistory(true);
    }
    return null;
  }

  if (command === "cd") {
    const directory = args[0];

    if (!directory) {
      return (
        <div
          className="text-base"
          dangerouslySetInnerHTML={{
            __html:
              "<div style=\"font-family: 'JetBrains Mono', monospace; color: #febc81;\">Usage: cd [directory]</div>",
          }}
        ></div>
      );
    }

    if (DIRECTORY_CONTENTS[directory]) {
      const files = DIRECTORY_CONTENTS[directory];
      const fileList = files.map((file) => `<div>${file}</div>`).join("");
      return (
        <div
          className="text-base"
          dangerouslySetInnerHTML={{
            __html: `<div style="font-family: 'JetBrains Mono', monospace; color: #d2d4d6;">${fileList}</div>`,
          }}
        ></div>
      );
    } else {
      return (
        <div
          className="text-base"
          dangerouslySetInnerHTML={{ __html: DIR_NOT_FOUND(directory) }}
        ></div>
      );
    }
  }

  if (command === "cat") {
    const filePath = args[0];

    if (!filePath) {
      return (
        <div
          className="text-base"
          dangerouslySetInnerHTML={{
            __html:
              "<div style=\"font-family: 'JetBrains Mono', monospace; color: #febc81;\">Usage: cat &lt;filePath&gt;</div>",
          }}
        ></div>
      );
    }

    if (FILE_CONTENTS[filePath]) {
      return (
        <div
          className="text-base"
          dangerouslySetInnerHTML={{ __html: FILE_CONTENTS[filePath] }}
        ></div>
      );
    } else {
      return (
        <div
          className="text-base"
          dangerouslySetInnerHTML={{
            __html: `<div style="font-family: 'JetBrains Mono', monospace; color: #fe8181;">cat: ${filePath}: No such file or directory</div>`,
          }}
        ></div>
      );
    }
  }

  if (!Object.keys(COMMANDS).includes(command)) {
    return (
      <div
        className="text-base"
        dangerouslySetInnerHTML={{ __html: INVALID_COMMAND_RESPONSE }}
      ></div>
    );
  }

  const commandKey = command as keyof typeof COMMANDS;
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
