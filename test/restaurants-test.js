import { expect } from 'chai';
import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import RestaurantInput from '../src/components/restaurants/RestaurantInput'
import sinon from 'sinon'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import manageRestaurant, { cuidFn } from '../src/reducers/manageRestaurant'
import App from '../src/App'
import Restaurants from '../src/components/restaurants/Restaurants'
import Restaurant from '../src/components/restaurants/Restaurant'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('RestaurantInput', () => {
  it('has an text input field', () => {
    const wrapper = shallow(<RestaurantInput />);
    expect(wrapper.find('input').first().type()).to.equal('input');
  });

  it('has an initial state with text key set to empty string', () => {
    const wrapper = shallow(<RestaurantInput />);
    expect(wrapper.state('text')).to.equal('');
  });

  it('changes the state on a keydown', () => {
    const wrapper = shallow(<RestaurantInput />);
    expect(wrapper.state('text')).to.equal('');
    let input = wrapper.find('input').first();
    input.simulate('change', { target: { value: 'Hello' } });
    expect(wrapper.state('text')).to.equal('Hello');
  });

  

});

describe('Restaurants Component', () => {
  it('displays a list of restaurant components', () => {

    const store = createStore(manageRestaurant)
    store.dispatch({type: 'ADD_RESTAURANT', text: "Muzarella"})
    store.dispatch({type: 'ADD_RESTAURANT', text: "Artichoke"})
    store.dispatch({type: 'ADD_RESTAURANT', text: "Two Brothers"})
    const wrapper = mount(<Provider store={store}><App /></Provider>)
    expect(wrapper.find(Restaurant)).to.have.length(3);
  });
});

describe('Restaurant Component', () => {
  it('displays the appropriate text', () => {
    const restaurant = { text: 'hello', id: 3 }
    const wrapper = shallow(<Restaurant restaurant={restaurant} />)
    expect(wrapper.text()).to.contain('hello');
  });

  it('renders an li', () => {
    const restaurant = { text: 'hello', id: 3 }
    const wrapper = shallow(<Restaurant restaurant={restaurant} />)
    expect(wrapper.find('li')).to.have.length(1)
  });
});






  it('has a button that dispatches a DELETE_RESTAURANT action with the proper id when clicked', ()=> {
    const store = createStore(manageRestaurant);
    store.dispatch({type: 'ADD_RESTAURANT', text: 'Bagel World'})

    const wrapper = mount(<Provider store={store}><App /></Provider>)

    let deleteButton = wrapper.find('button').first();

    deleteButton.simulate('click',  { preventDefault() {} });

    expect(store.getState().restaurants.length).to.equal(0);


  });