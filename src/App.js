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
          <p className="About-me">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor feugiat dictum. Pellentesque non lacus arcu. Aliquam aliquam viverra rutrum. Phasellus molestie pellentesque odio at auctor. Proin a eros neque. Nunc egestas libero eget vestibulum condimentum. Mauris tristique iaculis neque, a blandit diam cursus eget. Praesent eget commodo velit, eget laoreet ante. Nullam a nisl nec nisi tempus cursus eu iaculis eros. Mauris eu turpis pellentesque, molestie ex id, interdum magna. In dui turpis, feugiat et rutrum sit amet, laoreet vitae sem. Aliquam erat volutpat. Donec in sapien non lectus facilisis accumsan. In blandit eros quis sagittis molestie. Mauris fringilla dolor vel iaculis accumsan. Maecenas egestas leo felis, et egestas purus faucibus vel.</p>
        </header>
        <header className='My-Skills-header'>
          <h1 className='My-skills-title'>My Skills</h1>
          <p className='My-skills'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor feugiat dictum. Pellentesque non lacus arcu. Aliquam aliquam viverra rutrum. Phasellus molestie pellentesque odio at auctor. Proin a eros neque. Nunc egestas libero eget vestibulum condimentum. Mauris tristique iaculis neque, a blandit diam cursus eget. Praesent eget commodo velit, eget laoreet ante. Nullam a nisl nec nisi tempus cursus eu iaculis eros. Mauris eu turpis pellentesque, molestie ex id, interdum magna. In dui turpis, feugiat et rutrum sit amet, laoreet vitae sem. Aliquam erat volutpat. Donec in sapien non lectus facilisis accumsan. In blandit eros quis sagittis molestie. Mauris fringilla dolor vel iaculis accumsan. Maecenas egestas leo felis, et egestas purus faucibus vel.</p>
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
