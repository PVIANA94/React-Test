import * as React from 'react';
import './style.css';

export default function Button() {
  return (
    <div>
      <button onClick={HelloWorld}>Click me!</button>
      <span>TEST</span>
    </div>
  );
}

function HelloWorld() {
  alert('Hello world');
}
