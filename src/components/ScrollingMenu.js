import ScrollMenu from 'react-horizontal-scrolling-menu';
import {Component, useState} from "react";

export default function ScrollingMenu(props) {
// list of items
const list = [
    { name: 'item1' },
    { name: 'item2' },
    { name: 'item3' },
    { name: 'item4' },
    { name: 'item5' },
    { name: 'item6' },
    { name: 'item7' },
    { name: 'item8' },
    { name: 'item9' }
];

// One item component
// selected prop will be passed
const MenuItem = ({text, selected}) => {
    return <div
        className={`menu-item ${selected ? 'active' : ''}`}
    >{text}</div>;
};

// All items component
// Important! add unique key
const Menu = (list, selected) =>
    list.map(el => {
        const {name} = el;

        return <MenuItem text={name} key={name} selected={selected} />;
    });


const Arrow = ({ text, className }) => {
    return (
        <div
            className={className}
        >{text}</div>
    );
};


const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

const selected = 'item1';



        // call it again if items count changes
        let menuItems = Menu(list, selected);

    const [state, setState] = useState({selected});



    let onSelect = key => {
        setState({ selected: key });
    }



        const [ selected1 ] = state;
        // Create menu from items
        const menu = menuItems;

        return (
            <div className="App">
                <ScrollMenu
                    data={menu}
                    arrowLeft={ArrowLeft}
                    arrowRight={ArrowRight}
                    selected1={selected1}
                    onSelect={onSelect}
                />
            </div>
        );

}