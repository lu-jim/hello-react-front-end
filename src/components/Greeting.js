import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMessage } from '../redux/greeting/greeting';

const Greeting = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.greeting.message);
  useEffect(() => {
    dispatch(getMessage());
  }, []);
  return <h1>{message}</h1>;
};

export default Greeting;
