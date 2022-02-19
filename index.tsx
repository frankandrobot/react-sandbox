import React, {
  Component,
  useRef,
  useState,
  useEffect,
  useCallback,
} from 'react';
import { render } from 'react-dom';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

function TestUseref() {
  const valueRef = useRef(false);
  const [show, setShow] = useState(false);

  const value = valueRef.current;

  useEffect(() => {
    if (value) setShow(true);
  }, [value]);

  const click = useCallback(() => (valueRef.current = true), []);

  return (
    <>
      {show && <div>ref change triggered an effect</div>}
      <button onClick={click}>Click me</button>
    </>
  );
}

function App() {
  return (
    <>
      <TestUseref />
    </>
  );
}

render(<App />, document.getElementById('root'));
