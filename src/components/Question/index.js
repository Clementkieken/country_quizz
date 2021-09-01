import { useSelector } from 'react-redux';
import './styles.scss';

const Question = () => {
  const { quiz, index } = useSelector((state) => state);
  const currentQuestion = quiz[index].title;

  return (
    <h2>{currentQuestion}</h2>
  );
};

export default Question;
