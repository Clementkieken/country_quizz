import { useSelector } from 'react-redux';
import Single from './Single';

const Reponses = () => {
  const { quiz, index, selectedAnswer } = useSelector((state) => state);
  const answers = quiz[index].answers;

  return (
    <>
      <ul>
        {
        answers.map((answer) => <Single key={answer} reponse={answer} />)
        }
      </ul>
      {
        selectedAnswer
          ? (
            <button type="button">
              Next
            </button>
          ) : (
            null
          )
      }
    </>
  );
};

export default Reponses;
