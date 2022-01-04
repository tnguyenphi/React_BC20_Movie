import React, {useState, useEffect, useCallback, useMemo, useRef} from 'react';
import Child from './Child';
import CustomHooks from './custom-hooks';

export default function HooksPage() {
    const preNumber = useRef(0);

    const [number, setNumber] = useState(0);

    useEffect(()=>{
        console.log("useEffect - tuong duong ComponentDidMount ben class khi tham so thu 2 la mang rong");
    }, []);

    useEffect(()=>{
        console.log("useEffect - tuong duong ComponentDidUpdate ben class khi tham so thu 2 la mang khac rong");
    },[number]);

    useEffect(()=>{
        let interval = setInterval(() => {
            console.log("hello");
        }, 1000);

        return ()=>{
            //tuong duong voi componentWillUnMount ben class
            clearInterval(interval)
        }

    },[]);

    const showNumber = () => {
        console.log("showNumber");
    };

    const showNumberCallBack = useCallback(showNumber,[]);

    const numberUp = () => {
        let i = 0;
        while (i<1000) i++;
        console.log(i);
        return i;
    };

    const numberUpMemo = useMemo(()=> numberUp(), []);

    return (
        <div>
            <h3>HooksPage</h3>
            <h1>Pre Number: {preNumber.current} </h1>
            <h1>Number: {number} </h1>
            <button className='btn btn-success' 
            onClick={()=>{
                setNumber(number + 1);
                preNumber.current = number;
            }}
            >Click</button>
            {/* <h1>NumberUp: {numberUp()}</h1> */}
            <h1>NumberUp: {numberUpMemo}</h1>
            <hr/>
            <Child showNumber={showNumberCallBack}/>
            <hr/>
            <CustomHooks/>
        </div>
    )
}
