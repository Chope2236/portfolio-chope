import './App.css';
import { AiFillGithub } from "react-icons/ai";

function App() {
  return (
    <div className="App"> 
    <Navbar></Navbar>
      <header className="App-header">
        <header className='About-me-header'>
          <h1 className="About-me-title">Who am i?</h1>
          <p className="About-me">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor feugiat dictum. Pellentesque non lacus arcu. Aliquam aliquam viverra rutrum. Phasellus molestie pellentesque odio at auctor. Proin a eros neque. Nunc egestas libero eget vestibulum condimentum. Mauris tristique iaculis neque, a blandit diam cursus eget. Praesent eget commodo velit, eget laoreet ante. Nullam a nisl nec nisi tempus cursus eu iaculis eros. Mauris eu turpis pellentesque, molestie ex id, interdum magna. In dui turpis, feugiat et rutrum sit amet, laoreet vitae sem. Aliquam erat volutpat. Donec in sapien non lectus facilisis accumsan. In blandit eros quis sagittis molestie. Mauris fringilla dolor vel iaculis accumsan. Maecenas egestas leo felis, et egestas purus faucibus vel.</p>
        </header>
        <code className="bottom-text">chope's portfolio     Created in React
        </code>
      </header>
    </div>
  );

  function Navbar(){
    return (
      <nav className='navbar'>
        <ul className='navbar-nav'>
        <header className='nav-buttons'>
          <a href='https://github.com/Chope2236' rel="noreferrer" target="_blank">
            <button className='github' title='My Github'>Github</button>
          </a>
          <a href='#' rel="noreferrer" target="_blank">
            <button className='linkedin' title='My LinkedIn'>LinkedIn</button>
          </a>
          <a href='#' rel="noreferrer" target="_blank">
            <button className='projects' title='Personal projects'>Projects</button>
          </a>
          <a href='#' rel="noreferrer" target="_blank">
            <button className='contact' title='Contact me'>Contact</button>
          </a>
          <a href='#'>
            <button className='home' title='Home page'>Home</button>
          </a>
        </header>
        <header className='title'>
          <code>chope's portfolio</code>
        </header>
        </ul>
      </nav>
    );
  }

}

export default App;
