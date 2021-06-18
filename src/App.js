import './App.css';
import Video from './Video'

function App() {
  return (
    //BEM Naming Convention
    <div className="app">
      
      <div className="app_videos">
        <Video/>
        <Video/>
      </div>
      
      {/**App container */}
      {/**<VIDEO/> */}
      {/**<VIDEO/> */}
      {/**<VIDEO/> */}

    </div>
  );
}

export default App;
