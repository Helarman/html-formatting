import React from 'react';
import './App.css';
import Renderer from './components/Renderer/HtmlRenderer';

function App() {
  return (
    <div className="w-full flex justify-center items-center px-3 md:px-16">
        <Renderer/>
    </div>
  );
}

export default App;
