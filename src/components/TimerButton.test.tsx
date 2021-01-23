import React from 'react';
import { shallow } from 'enzyme';
import TimerButton from './TimerButton';

describe('renders TimerButton component', () => {

  it('should render a <div />', () => {
	const container = shallow(<TimerButton buttonAction={jest.fn()} buttonValue={''} />);
	expect(container.find('div').length).toEqual(1);
  });

  it("should render button tag", ()=>{
    const container = shallow(<TimerButton buttonAction={jest.fn()} buttonValue={''} />);
    expect(container.find('button').length).toEqual(1)
  })
  
});
