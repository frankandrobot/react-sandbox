import React, {
  Component,
  useRef,
  useState,
  useEffect,
  useCallback,
} from 'react';
import { render } from 'react-dom';
import './style.css';

function TestUseref1() {
  const valueRef = useRef(false);
  const [show, setShow] = useState(false);

  const value = valueRef.current;

  useEffect(() => {
    if (value) setShow(true);
  }, [value]);

  const click = useCallback(() => (valueRef.current = true), []);

  return (
    <div>
      {show && <div>ref change triggered an effect</div>}
      <button onClick={click}>Click me</button>
    </div>
  );
}

function TestUseref2() {
  const obj = useRef<{ value: boolean }>({ value: false });
  const [done, setDone] = useState(false);

  useEffect(function setObj() {
    obj.current = { value: true };
  }, []);

  useEffect(
    function triggerOnObj() {
      if (obj.current.value) {
        setDone(true);
      }
    },
    [obj.current.value]
  );

  const anotherTrigger = done ? true : false;

  return anotherTrigger ? <div>done</div> : null;
}

function App() {
  return (
    <div>
      <TestUseref1 />
      <TestUseref2 />
    </div>
  );
}

render(<App />, document.getElementById('root'));
