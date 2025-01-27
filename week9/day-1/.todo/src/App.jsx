import { useState } from 'react';
import './App.css';

export default function App() {
  const [count, setCount] = useState(0);

  function onClickHandler() {
    setCount(count + 1);
  }

  return (
    <div>
      {/* Pass both the click handler and count as props */}
      <Button onClickHandler={onClickHandler} count={count} />
    </div>
  );
}

function Button(props) {
  return (
    <button onClick={props.onClickHandler}>
      Counter {props.count}
    </button>// it does not return html but jsx where jsx is javascript xml
  );
}
