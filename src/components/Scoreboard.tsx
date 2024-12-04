interface ScoreboardProps {
  wins: number;
  losses: number;
  ties: number;
}

const Scoreboard = ({ wins, losses, ties }: ScoreboardProps) => {
  return (
    <div className="bg-green-400/20 backdrop-blur-sm rounded-lg p-6 animate-fade-in">
      <h2 className="text-xl font-bold text-primary mb-4">戰績</h2>
      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-sm text-gray-400">勝</p>
          <p className="text-2xl font-bold text-primary">{wins}</p>
        </div>
        <div>
          <p className="text-sm text-gray-400">平</p>
          <p className="text-2xl font-bold text-primary">{ties}</p>
        </div>
        <div>
          <p className="text-sm text-gray-400">敗</p>
          <p className="text-2xl font-bold text-primary">{losses}</p>
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;