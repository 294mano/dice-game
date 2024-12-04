import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import Dice from "@/components/Dice";
import Scoreboard from "@/components/Scoreboard";

const Index = () => {
  const { toast } = useToast();
  const [playerDice, setPlayerDice] = useState(1);
  const [computerDice, setComputerDice] = useState(1);
  const [isRolling, setIsRolling] = useState(false);
  const [scores, setScores] = useState({ wins: 0, losses: 0, ties: 0 });

  const rollDice = () => {
    setIsRolling(true);
    
    setTimeout(() => {
      const newPlayerDice = Math.floor(Math.random() * 6) + 1;
      const newComputerDice = Math.floor(Math.random() * 6) + 1;
      
      setPlayerDice(newPlayerDice);
      setComputerDice(newComputerDice);
      setIsRolling(false);

      if (newPlayerDice > newComputerDice) {
        setScores(prev => ({ ...prev, wins: prev.wins + 1 }));
        toast({
          title: "恭喜獲勝！",
          description: `你擲出了 ${newPlayerDice}，電腦擲出了 ${newComputerDice}`,
        });
      } else if (newPlayerDice < newComputerDice) {
        setScores(prev => ({ ...prev, losses: prev.losses + 1 }));
        toast({
          title: "可惜失敗了",
          description: `你擲出了 ${newPlayerDice}，電腦擲出了 ${newComputerDice}`,
        });
      } else {
        setScores(prev => ({ ...prev, ties: prev.ties + 1 }));
        toast({
          title: "平手！",
          description: `你擲出了 ${newPlayerDice}，電腦擲出了 ${newComputerDice}`,
        });
      }
    }, 1000);
  };

  const resetGame = () => {
    setPlayerDice(1);
    setComputerDice(1);
    setScores({ wins: 0, losses: 0, ties: 0 });
    toast({
      title: "遊戲已重置",
      description: "所有分數已歸零，開始新的遊戲吧！",
    });
  };

  return (
    <div className="min-h-screen bg-secondary p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-primary text-center mb-12">
          擲骰子比大小
        </h1>
        
        <div className="grid grid-cols-2 gap-12 mb-12">
          <Dice value={playerDice} isRolling={isRolling} player="player" />
          <Dice value={computerDice} isRolling={isRolling} player="computer" />
        </div>

        <div className="flex justify-center gap-4 mb-12">
          <Button
            onClick={rollDice}
            disabled={isRolling}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-xl"
          >
            {isRolling ? "擲骰子中..." : "擲骰子"}
          </Button>
          
          <Button
            onClick={resetGame}
            variant="outline"
            className="px-8 py-6 text-xl"
          >
            重新開始
          </Button>
        </div>

        <Scoreboard
          wins={scores.wins}
          losses={scores.losses}
          ties={scores.ties}
        />
      </div>
    </div>
  );
};

export default Index;