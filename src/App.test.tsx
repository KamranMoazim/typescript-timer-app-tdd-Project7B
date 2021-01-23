import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Timer from './components/Timer';

describe('renders app component', () => {

  it('should render a <div />', () => {
		const container = shallow(<App />);
		expect(container.find('div').length).toEqual(1);
  });

  it("should render h1 tag", ()=>{
    const container = shallow(<App />);
    expect(container.find('h1').length).toEqual(1)
  })
  
  it("should render Timer component", ()=>{
    const container = shallow(<App />);
    expect(container.containsMatchingElement(<Timer />)).toEqual(true)
  })



});
