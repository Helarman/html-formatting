import React from 'react';
import './App.css';
import Renderer from './components/Renderer/HtmlRenderer';

function App() {
  return (
    <div className="w-full h-screen flex justify-center items-center px-16">
        <Renderer/>
    </div>
  );
}

export default App;
