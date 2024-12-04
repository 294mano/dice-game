import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface DiceProps {
  value: number;
  isRolling: boolean;
  player: "player" | "computer";
}

const Dice = ({ value, isRolling, player }: DiceProps) => {
  const [dots, setDots] = useState<number[]>([]);

  useEffect(() => {
    setDots(Array(value).fill(0));
  }, [value]);

  return (
    <div className="flex flex-col items-center gap-2">
      <span className="text-lg font-semibold text-primary">
        {player === "player" ? "你的骰子" : "電腦的骰子"}
      </span>
      <div
        className={cn(
          "w-24 h-24 bg-white rounded-xl shadow-lg flex flex-wrap p-4 items-center justify-center",
          isRolling && "animate-dice-roll"
        )}
      >
        <div className="grid grid-cols-3 gap-2 w-full h-full">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={cn(
                "rounded-full",
                dots.length > i ? "bg-secondary w-3 h-3" : "w-3 h-3"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dice;