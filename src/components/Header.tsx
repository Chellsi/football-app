import React from 'react';
import { FaClock } from 'react-icons/fa';
import { PiSoccerBallFill } from 'react-icons/pi';

interface HeaderProps {
  timeLeft: number;
  isIdle: boolean;
}

const Header: React.FC<HeaderProps> = ({ timeLeft, isIdle }) => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <PiSoccerBallFill className="text-3xl animate-pulse" />
            <div>
              <h1 className="text-3xl font-bold">Football Manager</h1>
              <p className="text-blue-200 text-sm">Управляйте своїми командами</p>
            </div>
          </div>
          
          {/* Індикатор активності */}
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <FaClock className={isIdle ? 'text-red-300' : 'text-green-300'} />
              <span>До неактивності: {timeLeft}с</span>
            </div>
            {isIdle && (
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                НЕАКТИВНИЙ
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;