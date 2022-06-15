import './App.css';

function App() {
  return (
    <div className="App"> 
    <Navbar></Navbar>
      <header className="App-header">
        <div className='rectangulo'>
          <h2 className='by'>Website created by</h2>
          <h1 className='name'>Sebastian "Chope" Trumpis</h1>
          <h2 className='work'>Student developer</h2>
        </div>
        <header className='About-me-header'>
          <h1 className="About-me-title">Who am i?</h1>
          <p className="About-me">I'm an Argentinian 16 years old student developer.<br/>
          Currently in high school but I'm studying programming by my own since 2019 using videos, tutorials, college guides, etc.
          </p>
        </header>
        <header className='My-Skills-header'>
          <h1 className='My-skills-title'>My Skills</h1>
          <p className='My-skills'>I know a a bit of everything, <a href="https://github.com/Chope2236/Python" rel="noreferrer" target="_blank">Python</a>, <a href="https://github.com/Chope2236/Ejercicios-de-C" rel="noreferrer" target="_blank">C</a>, Javascript, <a href="https://github.com/Chope2236/portfolio-chope" rel="noreferrer" target="_blank">React</a>, and used to work with LUA a few years ago.<br/>
          My skills are not as developed as they should be, but I know that with time I will strengthen them.</p>
        </header>

        <header className='What is this?'>
          <h1 className='whatsthis-title'>What is this?</h1>
          <p className='whatsthis'>This is a website that I will use to show and update my projects, I expect it to work as a resume.<br/>
          Currently on progress.</p>
        </header>
      </header>
    </div>
  );

  function Navbar(){
    return (
      <nav className='navbar'>
        <ul className='navbar-nav'>
        <header className='nav-buttons'>
          <button onClick={()=>{ alert("Haven't created a LinkedIn accout yet.\nYou can contact me via Email clicking 'Contact' button."); }} className='linkedin' title='My LinkedIn'>LinkedIn</button>
          <a href='https://github.com/Chope2236?tab=repositories' rel="noreferrer" target="_blank">
            <button className='projects' title='Personal projects'>Projects</button>
          </a>
          <a href='mailto:Chopetrumpis@gmail.com' rel="noreferrer" target="_blank">
            <button className='contact' title='Contact me by Email'>Contact</button>
          </a>
          <a href='/'>
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
