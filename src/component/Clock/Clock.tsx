import React from 'react';
import { useState, useEffect } from 'react';


type PropsType = {

}

    function get2digitsString  (num: number){
        return num < 10 
        ? '0' + num 
        : num
    }

export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval( () => setDate(new Date()), 1000)

        return () => {clearInterval(intervalID)}
    }, [])


    return <div>
        <span>{get2digitsString(date.getHours())}</span>
        :
        <span>{get2digitsString(date.getMinutes())}</span>
        :
        <span>{get2digitsString(date.getSeconds())}</span>
    </div>
}