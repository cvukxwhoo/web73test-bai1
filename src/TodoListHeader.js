import { useTranslation } from 'react-i18next';
const Header = ({ todos }) => {
  const { t } = useTranslation();

  const incompleteTasks = todos.filter((todo) => !todo.completed).length;

  return <div className='header'>{`${incompleteTasks} task(s) left`}!</div>;
};

export default Header;
