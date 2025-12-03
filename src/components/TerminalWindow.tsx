import { useState, useEffect } from "react";
import { banner, DAYS, MONTHS } from "../lib/constants";
import CleanedTerminal from "./CleanedTerminal";

const TerminalWindow = () => {
  const [showAutoLogin, setShowAutoLogin] = useState(true);
  const [dots, setDots] = useState("");
  const [typedText, setTypedText] = useState("");
  const [showPrompt, setShowPrompt] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showFinalPrompt, setShowFinalPrompt] = useState(false);

  const commandToType = "whoami";

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

    const timer = setTimeout(() => {
      setShowAutoLogin(false);
      clearInterval(dotInterval);
      setShowPrompt(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(dotInterval);
    };
  }, []);

  useEffect(() => {
    if (!showPrompt) return;

    const startTypingTimer = setTimeout(() => {
      let currentIndex = 0;
      const typeInterval = setInterval(() => {
        if (currentIndex < commandToType.length) {
          setTypedText(commandToType.slice(0, currentIndex + 1));
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

  if (showAutoLogin) {
    return (
      <div className="flex h-[96%] w-[98%] flex-col items-start border border-[#fe8181] rounded-b-sm bg-[#1c1b1a] p-3">
        <div className="text-[#d2d4d6]">Auto login in progress{dots}</div>
      </div>
    );
  }

  return (
    <div className="flex h-[96%] w-[98%] flex-col items-start border border-[#fe8181] rounded-b-sm bg-[#1c1b1a] p-3">
      {showPrompt && (
        <div className="animate-fadeIn">
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
        <div
          className="text-[16px] mb-2"
          dangerouslySetInnerHTML={{ __html: banner }}
        ></div>
      )}
      {showFinalPrompt && <CleanedTerminal />}
    </div>
  );
};

export default TerminalWindow;
