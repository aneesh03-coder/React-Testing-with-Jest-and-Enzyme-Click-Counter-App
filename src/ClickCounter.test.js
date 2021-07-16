import ClickCounter from './ClickCounter';
import Enzyme,{shallow} from 'enzyme'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'
import React from 'react'

Enzyme.configure({adapter: new EnzymeAdapter()});

const setup=()=>{
    return shallow(<ClickCounter/>)
}

const findByTestAttr=(wrapper,val)=>{
    return wrapper.find(`[data-test='${val}']`)
}

describe('Renders without error',()=>{
    test('ClickCounter ',()=>{
        const wrapper=setup();
        const clickCounterComponent=findByTestAttr(wrapper,'component-click-counter') 
        expect(clickCounterComponent.length).toBe(1);
    })
    
    test('increment button',()=>{
        const wrapper=setup();
        const button=findByTestAttr(wrapper,'increment-button')
        expect(button.length).toBe(1);
    })
    
    test('counter display',()=>{
        const wrapper=setup();
        const counterDisplay=findByTestAttr(wrapper,'counter-display')
        expect(counterDisplay.length).toBe(1);
    })
})


test('counter display starts at 0',()=>{
 const wrapper=setup();
 const counter=findByTestAttr(wrapper,'count').text();
    expect(counter).toBe("0");
})


test.todo('context api test');


describe('clicking the increment button',()=>{
    let originalUseState;
    let mockSetCount=jest.fn()
    beforeEach(()=>{
        mockSetCount.mockClear();
        originalUseState=React.useState;
    })
    afterEach(()=>{
        React.useState=originalUseState;
    })
    test('changes the state',()=>{
        
        React.useState=jest.fn(()=>[0,mockSetCount]);
        const wrapper=setup();
        const button=findByTestAttr(wrapper,'increment-button')
          button.simulate('click');
          expect(mockSetCount).toHaveBeenCalledWith(1);
    })
    
    test('increments our counter',()=>{
        
          const wrapper=setup();
          const button=findByTestAttr(wrapper,'increment-button')
          button.simulate('click');
          const counter=findByTestAttr(wrapper,'count').text();
          expect(counter).toBe("1");
    })
    
})

