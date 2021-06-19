import './App.css';
import Video from './Video'

function App() {
  return (
    //BEM Naming Convention
    <div className="app">
      
      <div className="app_videos">
        <Video url="https://v16m.tiktokcdn.com/f0b00a77e4a06d0924b4a84ccf21520f/5f50173b/video/tos/useast2a/tos-useast2a-ve-0068c003/17791fe438be4573994ff56ebd54a762/?a=1233&br=2618&bt=1309&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202009021605210101902092163013B973&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=anRnbGY6bHlsdzMzNzczM0ApOzU3aWRlNWQ6N2Q5OjM4NmdzNWRwZ2liaTBfLS1eMTZzczYwYzBjMGIwMy9gMzVeljM6Yw%3D%3D&vl=&vr="
        channel="eriksanchezflow"
        description="Description goes here"
        song="Bad Bunny - Yonaguni"
        likes={123}
        messages={434}
        shares={343}/>
        <Video/>
        <Video url="https://v16m.tiktokcdn.com/f0b00a77e4a06d0924b4a84ccf21520f/5f50173b/video/tos/useast2a/tos-useast2a-ve-0068c003/17791fe438be4573994ff56ebd54a762/?a=1233&br=2618&bt=1309&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202009021605210101902092163013B973&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=anRnbGY6bHlsdzMzNzczM0ApOzU3aWRlNWQ6N2Q5OjM4NmdzNWRwZ2liaTBfLS1eMTZzczYwYzBjMGIwMy9gMzVeljM6Yw%3D%3D&vl=&vr="
        channel="eriksanchezflow"
        description="Description goes here"
        song="Bad Bunny - Yonaguni"
        likes={123}
        messages={434}
        shares={343}/>
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
