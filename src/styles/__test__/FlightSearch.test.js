import React from 'react';
import ReactDOM from 'react-dom';
import {render} from '@testing-library/react'
import FlightSearch from '../../component/FlightSearch'

it('Flight search teting',()=>{
    const {getByTestId} = render(<FlightSearch/>);
    const elem = getByTestId('header');
    expect(elem.innerText).toBe('Welcome to Web check in!')
})

