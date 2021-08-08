import './App.css';
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import Main from './components/Main/main';
import Contact from './components/Contactus/contact';
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css/animate.min.css";
import 'react-toastify/dist/ReactToastify.css';

AOS.init();

const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
       
    </BrowserRouter>
  );
}

export default App;
