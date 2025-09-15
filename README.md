# ⚽ Football Manager App

Простий React додаток для управління футбольними командами, створений як домашнє завдання для демонстрації роботи з популярними React бібліотеками.

## 🚀 Використані технології

- **React 18** + **TypeScript** - основний стек
- **Vite** - швидка збірка та розробка  
- **Tailwind CSS** - сучасна стилізація
- **ESLint** - контроль якості коду

## 📦 Інтегровані бібліотеки

### ✅ Обов'язкові бібліотеки:

**1. React Icons** (`react-icons`)
```typescript
import { FaSoccerBall, FaUsers, FaTrophy, FaClock, FaPlus, FaTrash, FaEdit } from 'react-icons/fa';
```
- **Призначення**: Іконки для покращення UX
- **Використання**: 
  - `FaSoccerBall` - логотип та декорації
  - `FaUsers, FaTrophy, FaClock` - статистика  
  - `FaPlus, FaEdit, FaTrash` - дії CRUD

**2. React Toastify** (`react-toastify`)  
```typescript
import { toast, ToastContainer } from 'react-toastify';
```
- **Призначення**: Елегантні push-сповіщення
- **Використання**:
  - Успішне створення/редагування команд
  - Підтвердження видалення
  - Помилки валідації форм
  - Сповіщення про неактивність

**3. React Idle Timer** (`react-idle-timer`)
```typescript
import { useIdleTimer } from 'react-idle-timer';
```
- **Призначення**: Відстеження активності користувача
- **Функції**:
  - Зворотний відлік в хедері (60 секунд)
  - Toast-сповіщення про неактивність  
  - Візуальний індикатор статусу
  - Автоматичне відновлення при активності

## ✨ Функціональність додатку

### 🏟️ Управління командами:
- ➕ **Створення** нових футбольних команд
- ✏️ **Редагування** існуючих команд
- 🗑️ **Видалення** з підтвердженням
- 👁️ **Перегляд** всіх команд у зручних картках

### 📊 Статистика:
- Загальна кількість команд  
- Сумарна кількість гравців
- Середня кількість гравців на команду
- Рік заснування найстарішої команди

### 🎨 UX/UI особливості:
- Адаптивний дизайн (мобільні, планшети, десктоп)
- Плавні анімації та переходи
- Валідація форм з відповідними повідомленнями
- Hover ефекти та інтерактивність
- Градієнтний хедер з анімаціями

## 🛠 Встановлення та запуск

### Крок 1: Створення проекту
```bash
npm create vite@latest football-app -- --template react-ts
cd football-app
```

### Крок 2: Встановлення залежностей
```bash
# Основні залежності
npm install

# Обов'язкові бібліотеки для завдання
npm install react-icons react-toastify react-idle-timer

# Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Крок 3: Налаштування Tailwind CSS
Додати в `src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Налаштувати `tailwind.config.js`:
```javascript
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Крок 4: Замінити код
Замінити код в `src/App.tsx` на код з додатку вище.

### Крок 5: Запуск
```bash
npm run dev
# Відкрити http://localhost:5173
```

## 📁 Структура проекту

```
football-app/
├── public/
│   └── vite.svg
├── src/
│   ├── App.tsx              # 🏠 Головний компонент
│   ├── main.tsx            # 🚀 Точка входу
│   ├── index.css           # 🎨 Глобальні стилі
│   └── vite-env.d.ts       # 📝 TypeScript типи
├── index.html              # 📄 HTML шаблон  
├── package.json            # 📦 Залежності
├── vite.config.ts         # ⚙️ Конфігурація Vite
├── tailwind.config.js     # 🎨 Налаштування Tailwind
├── tsconfig.json          # 📘 TypeScript конфіг
└── README.md              # 📚 Документація
```

## 🧩 Архітектура компонентів

### `App` - Головний компонент
- Управління станом всього додатку
- Інтеграція з React Idle Timer
- Обробка CRUD операцій

### `TeamCard` - Картка команди  
- Відображення інформації про команду
- Кнопки редагування та видалення
- Responsive дизайн

### `TeamForm` - Форма команди
- Універсальна форма для створення/редагування
- Валідація обов'язкових полів
- TypeScript типізація

### `Stats` - Компонент статистики
- Автоматичний розрахунок метрик
- Візуальне відображення з іконками
- Адаптивна сітка

## 🔧 Конфігурація

### Vite конфіг (`vite.config.ts`):
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

## 💡 Демонстрація бібліотек

### 🎯 React Icons - Везде!
```typescript
// Статистика з іконками
<FaUsers className="mx-auto mb-2 text-blue-600 text-2xl" />

// Кнопки з іконками  
<FaPlus /> Додати команду
<FaEdit /> <FaTrash />

// Логотип з анімацією
<FaSoccerBall className="text-3xl animate-pulse" />
```

### 📢 React Toastify - Сповіщення
```typescript  
// Успішні дії
toast.success('🎉 Нову команду додано!');

// Помилки валідації
toast.error('Назва команди та тренер обов\'язкові!');

// Попередження
toast.warn('🏃‍♂️ Ви неактивні понад хвилину!');
```

### ⏱️ React Idle Timer - Моніторинг
```typescript
const { getRemainingTime } = useIdleTimer({
  timeout: 60000, // 1 хвилина
  onIdle: () => {
    setIsIdle(true);
    toast.warn('Ви неактивні!');
  },
  onActive: () => setIsIdle(false)
});
```

## 🎨 Дизайн принципи

- **Мінімалізм** - чистий, зрозумілий інтерфейс
- **Консистентність** - єдина колірна схема та типографіка  
- **Адаптивність** - працює на всіх пристроях
- **Доступність** - контрастні кольори, зрозумілі іконки
- **Інтерактивність** - hover ефекти, плавні переходи

## 📱 Responsive дизайн

```css
/* Мобільні (< 768px) */  
grid-cols-1

/* Планшети (768px - 1024px) */
md:grid-cols-2  

/* Десктопи (> 1024px) */
lg:grid-cols-3
```

## 🚀 Можливості для розширення

### 🔍 Додаткові функції:
- Пошук та фільтрація команд
- Сортування за різними параметрами  
- Експорт даних у CSV/JSON
- Імпорт команд з файлу
- Фотографії команд
- Графіки та аналітика

### 🛠 Технічні покращення:
- State management (Zustand/Redux)
- API інтеграція
- Тести (Jest + Testing Library)
- PWA функціональність
- Інтернаціоналізація (i18n)

### 📊 Додаткові бібліотеки:
- **React Charts** - графіки статистики
- **React Color Picker** - кольори команд  
- **React Credit Cards** - платна підписка
- **React Hook Form** - покращена валідація