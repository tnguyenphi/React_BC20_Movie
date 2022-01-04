import React, { useState,useEffect } from 'react'
import "./style.css";
import { useMagicColor } from './useMagicColor';

export default function Square() {
    // const [color, setColor] = useState("red");
    // useEffect(()=>{
    //     let interval = setInterval(() => {
    //         // 0 => 999999
    //         const colorNew = Math.floor(Math.random()*999999);
    //         // console.log(`#${color}`);
    //         setColor(`#${colorNew}`)
    //     }, 1000);
    //     return () => {
    //         clearInterval(interval);
    //     }
    // },[]);
    const color = useMagicColor();
    return (
        <div>
            <h3 className='square' style={{backgroundColor: color}}>Square</h3>
        </div>
    )
}
