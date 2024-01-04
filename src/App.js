import './styles.css';
import TodoList from './TodoList';
import TodoListHeader from './TodoListHeader';
import Form from './Form';
import Footer from './Footer';
import { Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className='App'>
      <nav>
        <Link to='/'>{t('header')}</Link>
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('es')}>Español</button>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

const Home = () => {
  const { t } = useTranslation();
  const initialState = JSON.parse(localStorage.getItem('todos')) || [];

  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className='App'>
      <div className='container'>
        <TodoListHeader todos={todos} />
        <TodoList todos={todos} setTodos={setTodos} />
        <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
        />
      </div>
      <Footer />
    </div>
  );
};
