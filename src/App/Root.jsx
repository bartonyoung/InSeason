import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import statesData from '../../data/us_states';

render(
  <App statesData={statesData} />,
  document.getElementById('app'),
);
