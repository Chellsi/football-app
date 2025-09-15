import React, { useState } from 'react';
import { toast } from 'react-toastify';
import type { Team } from '../types/Team';

interface TeamFormProps {
  team?: Team;
  onSave: (team: Team) => void;
  onCancel: () => void;
}

const TeamForm: React.FC<TeamFormProps> = ({ team, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: team?.name || '',
    coach: team?.coach || '',
    players: team?.players?.toString() || '',
    founded: team?.founded?.toString() || '',
    league: team?.league || ''
  });

  const handleSubmit = () => {
    // Валідація обов'язкових полів
    if (!formData.name.trim()) {
      toast.error('Назва команди обов\'язкова!');
      return;
    }

    if (!formData.coach.trim()) {
      toast.error('Ім\'я тренера обов\'язкове!');
      return;
    }

    // Валідація числових полів
    const playersCount = parseInt(formData.players);
    if (formData.players && (isNaN(playersCount) || playersCount < 0)) {
      toast.error('Кількість гравців повинна бути додатним числом!');
      return;
    }

    const foundedYear = parseInt(formData.founded);
    if (formData.founded && (isNaN(foundedYear) || foundedYear < 1800 || foundedYear > new Date().getFullYear())) {
      toast.error('Рік заснування повинен бути між 1800 та поточним роком!');
      return;
    }

    const teamData: Team = {
      id: team?.id || Date.now(),
      name: formData.name.trim(),
      coach: formData.coach.trim(),
      players: parseInt(formData.players) || 0,
      founded: parseInt(formData.founded) || new Date().getFullYear(),
      league: formData.league || 'Не вказано'
    };

    onSave(teamData);
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-screen overflow-y-auto">
        <h2 className="text-xl font-bold mb-4 text-center">
          {team ? 'Редагувати команду' : 'Додати нову команду'}
        </h2>
        
        <div className="space-y-4">
          {/* Назва команди */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Назва команди *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Наприклад: Динамо Київ"
              required
            />
          </div>
          
          {/* Тренер */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Тренер *
            </label>
            <input
              type="text"
              value={formData.coach}
              onChange={(e) => handleInputChange('coach', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Ім'я та прізвище тренера"
              required
            />
          </div>
          
          {/* Кількість гравців */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Кількість гравців
            </label>
            <input
              type="number"
              value={formData.players}
              onChange={(e) => handleInputChange('players', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="25"
              min="0"
              max="50"
            />
          </div>
          
          {/* Рік заснування */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Рік заснування
            </label>
            <input
              type="number"
              value={formData.founded}
              onChange={(e) => handleInputChange('founded', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="1927"
              min="1800"
              max={new Date().getFullYear()}
            />
          </div>
          
          {/* Ліга */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ліга
            </label>
            <select
              value={formData.league}
              onChange={(e) => handleInputChange('league', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Виберіть лігу</option>
              <option value="Прем'єр-ліга">Прем'єр-ліга</option>
              <option value="Перша ліга">Перша ліга</option>
              <option value="Друга ліга">Друга ліга</option>
              <option value="Третя ліга">Третя ліга</option>
              <option value="Аматорська">Аматорська</option>
            </select>
          </div>
        </div>
        
        {/* Кнопки */}
        <div className="flex gap-3 pt-6">
          <button
            onClick={handleSubmit}
            className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium"
          >
            {team ? 'Зберегти зміни' : 'Додати команду'}
          </button>
          <button
            onClick={onCancel}
            className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors font-medium"
          >
            Скасувати
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamForm;