import { useTyping } from "../hooks/useTyping";

interface TypingTextProps {
  text: string;
  speed?: number;
  delay?: number;
  onComplete?: () => void;
  showCursor?: boolean;
  className?: string;
}

const TypingText = ({
  text,
  speed = 100,
  delay = 0,
  onComplete,
  showCursor = true,
  className = "",
}: TypingTextProps) => {
  const { displayedText, isTyping } = useTyping({
    text,
    speed,
    delay,
    onComplete,
  });

  return (
    <span className={className}>
      {displayedText}
      {isTyping && showCursor && <span className="typing-cursor"></span>}
    </span>
  );
};

export default TypingText;
