import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import './Scrollbox.css';
import useOnScreen from "./useOnScreen";

function ScrollBox({ children }) {
    const scrollBox = useRef(null);
    const isVisible = useOnScreen(scrollBox)

    const checkVisibility =()=>{

    }

    useEffect(() => {
        scrollBox.current.addEventListener('scroll', (event)=>{
            console.log("scroll")
            checkVisibility()
        })
    }, []);


    return (
        <div className="scroll-box">
            <div ref={scrollBox} className="scroll-box__wrapper">
                <div className="scroll-box__container" role="list">
                    {children.map((child, i) => (
                        <div className="scroll-box__item" role="listitem" key={`scroll-box-item-${i}`}>
                            {child}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

ScrollBox.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ScrollBox;
