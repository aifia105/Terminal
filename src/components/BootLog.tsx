import { useState, useEffect } from "react";
import { BOOT_LOGS } from "../lib/constants";

const BootLog = ({ onComplete }: { onComplete: () => void }) => {
    const [logs, setLogs] = useState<string[]>([]);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        let currentIndex = 0;

        const interval = setInterval(() => {
            if (currentIndex < BOOT_LOGS.length) {
                setLogs((prev) => [...prev, BOOT_LOGS[currentIndex]]);
                currentIndex++;
            } else {
                clearInterval(interval);
                setIsComplete(true);
                if (onComplete) {
                    setTimeout(onComplete, 1000);
                }
            }
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-screen bg-[#1c1b1a] p-5 overflow-hidden text-[15px]">
            {logs.map((log, index) => {
                const parts = log?.match(/^(\[ OK \])\s*(.*)$/);
                return (
                    <div
                        key={index}
                        className="mb-1"
                        style={{
                            opacity: isComplete ? 1 : 0.9,
                            animation: "fadeIn 0.1s ease-in",
                        }}
                    >
                        {parts ? (
                            <>
                                <span className="text-[#fe8181]">
                                    {parts[1]}
                                </span>
                                <span className="ml-1 text-[#d2d4d6]">
                                    {parts[2]}
                                </span>
                            </>
                        ) : (
                            <span className="text-[#d2d4d6]">{log}</span>
                        )}
                    </div>
                );
            })}
            <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 0.9; }
        }
      `}</style>
        </div>
    );
};

export default BootLog;
