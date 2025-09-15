// Константи додатку для централізованого управління

// Налаштування таймера неактивності
export const IDLE_TIMEOUT = 60000; // 60 секунд в мілісекундах

// Доступні ліги для вибору
export const AVAILABLE_LEAGUES = [
  'Прем\'єр-ліга',
  'Перша ліга',
  'Друга ліга', 
  'Третя ліга',
  'Аматорська'
] as const;

// Повідомлення для toast
export const TOAST_MESSAGES = {
  TEAM_ADDED: '🎉 Нову команду додано!',
  TEAM_UPDATED: '✅ Команду успішно оновлено!',
  TEAM_DELETED: '🗑️ Команду видалено!',
  IDLE_WARNING: '🏃‍♂️ Ви неактивні понад хвилину!',
  VALIDATION_ERROR: 'Перевірте правильність введених даних!'
} as const;

// Валідаційні правила
export const VALIDATION_RULES = {
  MIN_TEAM_NAME_LENGTH: 2,
  MAX_TEAM_NAME_LENGTH: 50,
  MIN_COACH_NAME_LENGTH: 2,
  MAX_PLAYERS: 50,
  MIN_FOUNDED_YEAR: 1800,
  MAX_FOUNDED_YEAR: new Date().getFullYear()
} as const;

// Налаштування Toast
export const TOAST_CONFIG = {
  position: 'bottom-right' as const,
  autoClose: 3000,
  hideProgressBar: false,
  newestOnTop: true,
  closeOnClick: true,
  rtl: false,
  pauseOnFocusLoss: true,
  draggable: true,
  pauseOnHover: true,
  theme: 'light' as const
};