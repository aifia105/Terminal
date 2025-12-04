import { useRef, useEffect } from "react";
import Cursor from "./Cursor";

const CleanedTerminal = ({
  input,
  setInput,
  onKeyDown,
  showCursor,
}: {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  showCursor: boolean;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <>
      <div className="text-[#d2d4d6] cursor-text" onClick={handleTerminalClick}>
        <span className="mr-1">aifia@portfolio:~$</span>
        <span className="relative inline-block">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleInputChange}
            className="bg-transparent outline-none border-none text-[#d2d4d6] caret-transparent"
            style={{ width: `${Math.max(input.length, 1)}ch` }}
            onKeyDown={onKeyDown}
          />
          <span className="absolute" style={{ left: `${input.length}ch` }}>
            {showCursor && <Cursor />}
          </span>
        </span>
      </div>
    </>
  );
};

export default CleanedTerminal;
