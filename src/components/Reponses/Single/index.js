import { useDispatch, useSelector } from 'react-redux';
import { updateSelectedAnswer } from '../../../actions';
import './styles.scss';

const Single = ({reponse}) => {
  const selectedAnswer = useSelector((state) => state.selectedAnswer);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    const value = e.target.textContent;
    dispatch(updateSelectedAnswer(value));
  };

  return (
    <li
      className={selectedAnswer ? 'list_selected' : 'list'}
      onClick={(e) => handleClick(e)}
    >
      {reponse}
    </li>
  );
};

export default Single;
