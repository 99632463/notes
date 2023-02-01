import React, { useState, useEffect, useRef, useLayoutEffect, useMemo } from 'react';

const Hook = (props: IHook) => {
  const [count, setCount] = useState(5);
  const { num } = props;

  // componentDidMount
  // useEffect(() => {
  //   console.log('componentDidMount');
  // });

  // // componentDidUpdate + componentDidMount
  // useEffect(() => {
  //   console.log('componentDidUpdate + compsonentDidMount');
  // });

  // // componentDidUpdate
  // const firstUpdate = useRef(true);
  // useLayoutEffect(() => {
  //   if (firstUpdate.current) {
  //     firstUpdate.current = false;
  //     return;
  //   }

  //   console.log('componentDidUpdate');
  // });

  // // componentWillUnmount
  // useEffect(() => {
  //   return () => {
  //     console.log('componentWillUnmount');
  //   };
  // });

  // // getDerivedStateFromProps
  // if (num !== count) {
  //   console.log('不相等');
  // }

  return <div>
    <button onClick={() => setCount(count + 1)}>plus</button>
    <span>{count}</span>
  </div>;
};

interface IHook {
  num: number;
}

const Test = () => {
  return <Hook num={10} />;
};

export default Test;