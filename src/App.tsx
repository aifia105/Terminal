import { useEffect, useState } from "react";
import "./App.css";
import TerminalWindow from "./components/TerminalWindow";
import BootLog from "./components/BootLog";

function App() {
    const [stage, setStage] = useState<"empty" | "boot" | "terminal">("empty");
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const emptyTimer = setTimeout(() => {
            setStage("boot");
        }, 1000);

        return () => clearTimeout(emptyTimer);
    }, []);

    const handleBootComplete = () => {
        setFadeOut(true);
        setTimeout(() => {
            setStage("terminal");
            setFadeOut(false);
        }, 500);
    };

    return (
        <>
            {stage === "empty" && <div className="h-screen bg-[#1c1b1a]"></div>}
            {stage === "boot" && (
                <div
                    className={`transition-opacity duration-500 ${fadeOut ? "opacity-0" : "opacity-100"}`}
                >
                    <BootLog onComplete={handleBootComplete} />
                </div>
            )}
            {stage === "terminal" && (
                <div className="h-screen bg-[#1c1b1a] flex items-center justify-center animate-fadeIn">
                    <TerminalWindow />
                </div>
            )}
        </>
    );
}

export default App;
