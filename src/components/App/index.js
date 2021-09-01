// == Import
import './styles.scss';
import Header from '../Header';
import Question from '../Question';
import Reponses from '../Reponses';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <div className="container">
      <Question />
      <Reponses />
    </div>
  </div>
);

// == Export
export default App;
