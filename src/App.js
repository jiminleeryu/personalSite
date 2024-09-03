import './App.css';
import picture from "./images/headshot.png"

function App() {
  return (
    <div className="App">
      <header className="header">
        <nav>
          <ul class="header-links">
            <li>
              <a aria-content="page" class="link-current" href="/">About</a>
            </li>
            <li>
              <a class="link" href="/projects"></a>
            </li>
            <li>
              <a class="link" href="/resume"></a>
            </li>
          </ul>
        </nav>
      </header>
      
      <div className='main-container'>
        <div className="header-container">
          <img src={picture} alt="Profile Picture" className="profile-pic"/>
          <div>
            <h1 className="open-sans-header">
              Jimin Ryu
            </h1>
            <h2>
              <strong>CS + Applied Mathematics @ Brown University</strong>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
