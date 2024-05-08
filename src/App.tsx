import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Welcome to the Tour Page</h1>
      <p>
        This is the tour page. To login, you can click the button below.
      </p>
      <Link to="/login" className="login-button">Login</Link>
    </div>
  );
}

export default App;
