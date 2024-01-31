import './styles.css';
import { Cards } from '../../components/Cards';
import git from '../../images/git.png';

const Home = () => {
  return(
    <Cards
      src={git}
      text="Git"
    />
  );
}

export default Home;