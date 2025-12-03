import { useState, useRef, useEffect } from "react";
import Cursor from "./Cursor";

const CleanedTerminal = () => {
  const [input, setInput] = useState("");
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
        />
        <span className="absolute" style={{ left: `${input.length}ch` }}>
          <Cursor />
        </span>
      </span>
    </div>
  );
};

export default CleanedTerminal;
