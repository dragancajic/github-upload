//import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

import App from './App';

Enzyme.configure( {adapter: new EnzymeAdapter()} );

// 'test' is officially documented in Jest API
/*
test('renders learn react link', () => {
	render(<App />);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});

// Jest uses 'it' or 'test'. Those are synonymous.
it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
	ReactDOM.unmountComponentAtNode(div);
	//throw new Error();
});
*/
it('renders without crashing', () => {
	const wrapper = shallow(<App />);
	// So, shallow is actually rendering the App and making sure that
	// 'it renders without crashing' <-- LOOK!
	//throw new Error();
	//console.log(wrapper.debug());
	// The .debug() console log our DOM as a string, and
	// that can be helpful for debugging as the name imply.

	// If you used Mocka, you probably used Chai as assertion library.
	// Jest has its own assertions buit-in, and we use expect(),
	// the same way you would with Chai.

	// So, Expect (API) has a lot of assertions, and its job is to throw an error,
	// when the assertion is false, so that your test fails. We gonna be using
	// .toBe(value) a lot, .toBeTruthy(), expect.stringContaining(string), ...
	expect(wrapper).toBeTruthy(); // if (wrapper) == true, something like
	// it would 'not be null', 'not be undefined', 'not be empty string';
	//expect(wrapper).toBeFalsy(); // FAIL
});
