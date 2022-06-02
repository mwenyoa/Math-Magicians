import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import Header from '../header';

const HeadTest = () => {
  <BrowserRouter>
    <Header />
  </BrowserRouter>;
};

it('Renders correctly', () => {
  const TestHeader = renderer.create(<HeadTest />).toJSON();
  expect(TestHeader).toMatchSnapshot();
});
