import { useState, useEffect } from "react";
import {
  BANNER,
  DAYS,
  MONTHS,
  INTRO,
  USERNAME,
  COMMANDTOUSER,
} from "../lib/constants";
import CleanedTerminal from "./CleanedTerminal";
import CmdOutput from "./CmdOutput";

const TerminalWindow = () => {
  const [showAutoLogin, setShowAutoLogin] = useState(true);
  const [dots, setDots] = useState("");
  const [showUsernameLine, setShowUsernameLine] = useState(false);
  const [typedUsername, setTypedUsername] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [showPrompt, setShowPrompt] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showFinalPrompt, setShowFinalPrompt] = useState(false);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [clearHistory, setClearHistory] = useState(false);

  const getLastLoginDate = () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    yesterday.setHours(yesterday.getHours() - 3);

    const day = DAYS[yesterday.getDay()];
    const month = MONTHS[yesterday.getMonth()];
    const date = String(yesterday.getDate()).padStart(2, "0");
    const hours = String(yesterday.getHours()).padStart(2, "0");
    const minutes = String(yesterday.getMinutes()).padStart(2, "0");
    const year = yesterday.getFullYear();

    return `${day} ${date} ${month} ${year} ${hours}:${minutes}`;
  };

  useEffect(() => {
    const dotInterval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 333);

    const initialDelay = setTimeout(() => {
      setShowUsernameLine(true);
      setTimeout(() => {
        let usernameIndex = 0;
        const usernameTypeInterval = setInterval(() => {
          if (usernameIndex < USERNAME.length) {
            setTypedUsername(USERNAME.slice(0, usernameIndex + 1));
            usernameIndex++;
          } else {
            clearInterval(usernameTypeInterval);
            setTimeout(() => {
              setShowPassword(true);
              setTimeout(() => {
                setShowAutoLogin(false);
                clearInterval(dotInterval);
                setShowPrompt(true);
              }, 1100);
            }, 200);
          }
        }, 100);
      }, 200);
    }, 500);

    return () => {
      clearInterval(dotInterval);
      clearTimeout(initialDelay);
    };
  }, []);

  useEffect(() => {
    if (!showPrompt) return;

    const startTypingTimer = setTimeout(() => {
      let currentIndex = 0;
      const typeInterval = setInterval(() => {
        if (currentIndex < COMMANDTOUSER.length) {
          setTypedText(COMMANDTOUSER.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => {
            setShowBanner(true);
            setTimeout(() => {
              setShowFinalPrompt(true);
            }, 100);
          }, 500);
        }
      }, 100);

      return () => clearInterval(typeInterval);
    }, 700);

    return () => clearTimeout(startTypingTimer);
  }, [showPrompt]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input.trim()) {
      setCommandHistory([...commandHistory, input]);
      setInput("");
    }
  };

  useEffect(() => {
    if (clearHistory) {
      setCommandHistory([]);
      setClearHistory(false);
    }
  }, [clearHistory]);

  if (showAutoLogin) {
    return (
      <div className="flex h-[96%] w-[98%] flex-col items-start border border-[#fe8181] rounded-b-sm bg-[#1c1b1a] p-3">
        <div className="text-[#d2d4d6]">Auto login in progress{dots}</div>
        {showUsernameLine && (
          <div className="text-[#d2d4d6] ">
            <span className="mr-1">root@portfolio:~$</span>username:
            {typedUsername}
          </div>
        )}
        {showPassword && (
          <div className="text-[#d2d4d6] ">
            <span className="mr-1">root@portfolio:~$</span>password:
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex h-[96%] w-[98%] flex-col items-start border border-[#fe8181] rounded-b-sm bg-[#1c1b1a] p-3">
      {showPrompt && (
        <div className="animate-fadeIn ">
          <div className="text-[#d2d4d6] mb-2">
            Last login: {getLastLoginDate()}
          </div>
          <div className="text-[#d2d4d6] mb-2">
            <span className="mr-1">aifia@portfolio:~$</span>
            {typedText}
          </div>
        </div>
      )}
      {showBanner && (
        <div className="my-6">
          <div
            className="text-base"
            dangerouslySetInnerHTML={{ __html: BANNER }}
          ></div>
          <div
            className="text-base mt-8 mb-4"
            dangerouslySetInnerHTML={{ __html: INTRO }}
          ></div>
          <div className="text-[#d2d4d6] text-base">
            <span className="text-[#febc81]">Hint:</span> type 'help' to explore
            this system.
          </div>
        </div>
      )}
      {commandHistory.map((cmd, index) => (
        <div key={index}>
          <div className="text-[#d2d4d6] cursor-text  my-1">
            <span className="mr-1">aifia@portfolio:~$</span>
            <span>{cmd}</span>
          </div>
          <CmdOutput
            setClearHistory={setClearHistory}
            clearHistory={clearHistory}
            cmd={cmd}
          />
        </div>
      ))}
      {showFinalPrompt && (
        <div className="my-2">
          <CleanedTerminal
            input={input}
            setInput={setInput}
            onKeyDown={handleKeyDown}
            showCursor={true}
          />
        </div>
      )}
    </div>
  );
};

export default TerminalWindow;
