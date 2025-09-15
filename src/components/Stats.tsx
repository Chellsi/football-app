import React from 'react';
import { FaUsers, FaTrophy, FaClock } from 'react-icons/fa';
import { PiSoccerBallFill } from 'react-icons/pi';
import type { Team } from '../types/Team';

interface StatsProps {
  teams: Team[];
}

const Stats: React.FC<StatsProps> = ({ teams }) => {
  const totalPlayers = teams.reduce((sum, team) => sum + team.players, 0);
  const avgPlayers = teams.length > 0 ? Math.round(totalPlayers / teams.length) : 0;
  const oldestTeam = teams.length > 0 ? Math.min(...teams.map(t => t.founded)) : 0;
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <div className="bg-blue-100 p-4 rounded-lg text-center">
        <FaUsers className="mx-auto mb-2 text-blue-600 text-2xl" />
        <h3 className="text-lg font-semibold text-blue-800">Команд</h3>
        <p className="text-2xl font-bold text-blue-900">{teams.length}</p>
      </div>
      
      <div className="bg-green-100 p-4 rounded-lg text-center">
        <PiSoccerBallFill className="mx-auto mb-2 text-green-600 text-2xl" />
        <h3 className="text-lg font-semibold text-green-800">Гравців</h3>
        <p className="text-2xl font-bold text-green-900">{totalPlayers}</p>
      </div>
      
      <div className="bg-yellow-100 p-4 rounded-lg text-center">
        <FaTrophy className="mx-auto mb-2 text-yellow-600 text-2xl" />
        <h3 className="text-lg font-semibold text-yellow-800">Середньо</h3>
        <p className="text-2xl font-bold text-yellow-900">{avgPlayers}</p>
      </div>

      <div className="bg-purple-100 p-4 rounded-lg text-center">
        <FaClock className="mx-auto mb-2 text-purple-600 text-2xl" />
        <h3 className="text-lg font-semibold text-purple-800">Найстаріша</h3>
        <p className="text-2xl font-bold text-purple-900">{oldestTeam || '-'}</p>
      </div>
    </div>
  );
};

export default Stats;