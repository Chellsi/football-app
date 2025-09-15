import React, { useState, useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';
import { PiSoccerBallFill } from 'react-icons/pi';
import { toast, ToastContainer } from 'react-toastify';
import { useIdleTimer } from 'react-idle-timer';
import 'react-toastify/dist/ReactToastify.css';

// Імпорт компонентів
import TeamCard from './components/TeamCard';
import TeamForm from './components/TeamForm';
import Stats from './components/Stats';
import Header from './components/Header';

// Імпорт типів
import type { Team } from './types/Team';

const App: React.FC = () => {
  // Стан додатку
  const [teams, setTeams] = useState<Team[]>([
    {
      id: 1,
      name: 'Динамо Київ',
      coach: 'Олександр Шовковський', 
      players: 25,
      founded: 1927,
      league: 'Прем\'єр-ліга'
    },
    {
      id: 2,
      name: 'Шахтар Донецьк',
      coach: 'Арда Туран',
      players: 28,
      founded: 1936,
      league: 'Прем\'єр-ліга'
    },
    {
      id: 3,
      name: 'Дніпро-1',
      coach: 'Йосип Михайлович',
      players: 23,
      founded: 2017,
      league: 'Прем\'єр-ліга'
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingTeam, setEditingTeam] = useState<Team | undefined>(undefined);
  const [isIdle, setIsIdle] = useState(false);

  // Налаштування React Idle Timer
  const { getRemainingTime } = useIdleTimer({
    timeout: 60000, // 1 хвилина для демонстрації
    onIdle: () => {
      setIsIdle(true);
      toast.warn('🏃‍♂️ Ви неактивні понад хвилину!', {
        position: "top-center",
        autoClose: 5000,
      });
    },
    onActive: () => {
      setIsIdle(false);
    },
    throttle: 500
  });

  // Таймер для відображення часу
  const [timeLeft, setTimeLeft] = useState(60);
  
  useEffect(() => {
    const interval = setInterval(() => {
      const remaining = Math.ceil(getRemainingTime() / 1000);
      setTimeLeft(remaining > 0 ? remaining : 0);
    }, 1000);
    
    return () => clearInterval(interval);
  }, [getRemainingTime]);

  // Функції для роботи з командами
  const handleSaveTeam = (teamData: Team) => {
    if (editingTeam) {
      setTeams(teams.map(team => team.id === teamData.id ? teamData : team));
      toast.success('✅ Команду успішно оновлено!');
    } else {
      setTeams([...teams, teamData]);
      toast.success('🎉 Нову команду додано!');
    }
    
    setShowForm(false);
    setEditingTeam(undefined);
  };

  const handleEditTeam = (team: Team) => {
    setEditingTeam(team);
    setShowForm(true);
  };

  const handleDeleteTeam = (teamId: number) => {
    const teamToDelete = teams.find(t => t.id === teamId);
    if (window.confirm(`Ви впевнені, що хочете видалити команду "${teamToDelete?.name}"?`)) {
      setTeams(teams.filter(team => team.id !== teamId));
      toast.success('🗑️ Команду видалено!');
    }
  };

  const handleAddTeam = () => {
    setEditingTeam(undefined);
    setShowForm(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Хедер */}
      <Header timeLeft={timeLeft} isIdle={isIdle} />

      {/* Основний контент */}
      <main className="container mx-auto px-4 py-8">
        {/* Статистика */}
        <Stats teams={teams} />

        {/* Панель управління */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Мої команди</h2>
            <p className="text-gray-600 text-sm">Керуйте футбольними командами</p>
          </div>
          <button
            onClick={handleAddTeam}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-600 transition-colors shadow-md hover:shadow-lg"
          >
            <FaPlus />
            Додати команду
          </button>
        </div>

        {/* Список команд */}
        {teams.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-lg shadow-md">
            <PiSoccerBallFill className="mx-auto text-8xl text-gray-300 mb-6" />
            <h3 className="text-2xl font-semibold text-gray-500 mb-3">Команд поки немає</h3>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              Додайте свою першу футбольну команду та почніть управляти нею!
            </p>
            <button
              onClick={handleAddTeam}
              className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors inline-flex items-center gap-2"
            >
              <FaPlus />
              Створити першу команду
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teams.map(team => (
              <TeamCard
                key={team.id}
                team={team}
                onEdit={handleEditTeam}
                onDelete={handleDeleteTeam}
              />
            ))}
          </div>
        )}
      </main>

      {/* Форма додавання/редагування */}
      {showForm && (
        <TeamForm
          team={editingTeam}
          onSave={handleSaveTeam}
          onCancel={() => {
            setShowForm(false);
            setEditingTeam(undefined);
          }}
        />
      )}

      {/* Toast контейнер */}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default App;