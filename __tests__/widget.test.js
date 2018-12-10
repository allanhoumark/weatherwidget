import React from 'react'; 
import WeatherWidget from '../components/WeatherWidget/WeatherWidget';
import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';

const props = {
    city: 'odense',
    temp: 10,
    hum: 75,
    wind: 5,
    windDirection: 'nord',
    found: true
}

describe('<WeatherWidget/>', ()=>{
    it('the widget renders and match snapshot', ()=>{
        const wrapper = shallow(<WeatherWidget {...props}/>);
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
})