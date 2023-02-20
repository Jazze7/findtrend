// style
import './App.css';

//package
import { BrowserRouter as Router } from 'react-router-dom';

// components
import MainRouter from './components/routing/routers/MainRouter';

function App() {
  return (
      <Router>
        <MainRouter/>
      </Router>
  );
}

export default App;
