import React from 'react';
import './App.css';
import MainGrid from './Grid';
// TODO - grid items will be a color property
// TODO - button to add color (enter free text)
// TODO - button will insert into grid items
// TODO - insert color picker (copy from online)
// TODO - grab color code from color picker

function App() {
  const [colors, setColors] = React.useState<string[]>(['#daa4b6', '#c1aee1', '#94ccf9']);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Color Palette Builder</h1>
      </header>
      <body>

        <MainGrid setColors={setColors} gridItems={colors}></MainGrid>
      </body>
    </div>
  );
}

export default App;
