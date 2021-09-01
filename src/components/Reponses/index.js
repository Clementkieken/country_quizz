import Single from "./Single";

const answers = [
  'France', 'Islande', 'Espagne', 'Italie',
];

const Reponses = () => (
  <ul>
    {
    answers.map(answer => <Single key={answer} reponse={answer} />)
    }
  </ul>
);

export default Reponses;
