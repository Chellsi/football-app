import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import type { Team } from '../types/Team';

interface TeamCardProps {
  team: Team;
  onEdit: (team: Team) => void;
  onDelete: (id: number) => void;
}

const TeamCard: React.FC<TeamCardProps> = ({ team, onEdit, onDelete }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-bold text-gray-800">{team.name}</h3>
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(team)}
            className="text-blue-500 hover:text-blue-700 p-1 rounded hover:bg-blue-50 transition-colors"
            title="Редагувати команду"
          >
            <FaEdit />
          </button>
          <button
            onClick={() => onDelete(team.id)}
            className="text-red-500 hover:text-red-700 p-1 rounded hover:bg-red-50 transition-colors"
            title="Видалити команду"
          >
            <FaTrash />
          </button>
        </div>
      </div>
      
      <div className="space-y-1 mb-3">
        <p className="text-gray-600">
          <span className="font-medium">Тренер:</span> {team.coach}
        </p>
        <p className="text-gray-600">
          <span className="font-medium">Гравців:</span> {team.players}
        </p>
        <p className="text-gray-600">
          <span className="font-medium">Заснована:</span> {team.founded}
        </p>
      </div>
      
      <div>
        <span className="inline-block bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full font-medium">
          {team.league}
        </span>
      </div>
    </div>
  );
};

export default TeamCard;