import React, {useState, useEffect} from "react";
import "./index.css";

import Card from "../Card/Card";

import data from '../../data';

const MainLayout = () => {

    const [cardItems, setCardItems] = useState([]);
    const [sizePerHit, setSizePerHit] = useState({ start: 0, end: 29, isScrolling: false })
    
    useEffect(() => {
        setCardItems(data.slice(sizePerHit.start, sizePerHit.end));
        window.addEventListener("scroll", onScroll)
    }, []);

    const isBottom = (element) => {
        return element.getBoundingClientRect().bottom <= window.innerHeight + 2;
    }

    const isTop = (element) => {
        return element.getBoundingClientRect().top === 0;
    }

    useEffect(() => {
        if (sizePerHit.start >= 0) {
            setCardItems(data.slice(sizePerHit.start, sizePerHit.end));
            setSizePerHit((prevSize) => ({
                    ...prevSize,
                    isScrolling: false
                })
            )
        }
    }, [sizePerHit.start])

    const onScroll = () => {
        var element = document.getElementById("wrapper");
        if (isBottom(element) && !sizePerHit.isScrolling) {
            setSizePerHit((prevSize) => ({
                ...prevSize,
                start: Math.max(Math.min(prevSize.start + 2*29, data.length) - 29, 0),
                end: Math.min(prevSize.start + 2*29, data.length),
                isScrolling: true
            }))
        }
        if (isTop(element) && !sizePerHit.isScrolling) {
            setSizePerHit((prevSize) => ({
                ...prevSize,
                start: Math.max(prevSize.start - 29, 0),
                end: Math.max(prevSize.end - 29, 0),
                isScrolling: true
            }))
        }
    }

    return (
        <div id="wrapper" onScroll={() => onScroll()} >
            {
                cardItems.length > 0 && cardItems.map((cardItem) => {
                    return (
                        <Card key={cardItem.titile} image={cardItem.image} title={cardItem.title} />
                    )
                })
            }
        </div>
    )
}

export default MainLayout;