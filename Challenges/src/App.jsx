
import './App.css';
import { FirstApp } from './Challenge1/FirstApp';
import { FirstApp2 } from './Challenge2/FirstApp2';
import { ComponentApp } from './Challenge3/ComponentApp';
import { GifExpert } from './Challenge4/GifExpert';
import { FirstApp3 } from './Challenge5/FirstApp3';
import { MultipleCustomHook } from './Challenge6y7/MultipleCustomHook';

function App() {
  return (
    <div className="App">
      <h2>Challenge 1</h2>
     <FirstApp/>
     <h2>Challenge 2</h2>
     <FirstApp2
     value = {0}/>
     <h2>Challenge 3</h2>
     <ComponentApp/>
     <h2>Challenge 4</h2>
     <GifExpert/>
     <h2>Challenge 5</h2>
     <FirstApp3
     value={0}/>
     <h2>Challenge 6 y 7</h2>
     <MultipleCustomHook/>

     
    </div>

  );
}

export default App;
