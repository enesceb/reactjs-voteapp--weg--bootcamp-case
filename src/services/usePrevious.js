import { useState, useEffect } from "react";

const usePrevious = (users) => {

    const [prev, setPrev] = useState(JSON.parse(window.sessionStorage.getItem('prev'))||[])

    const handlePrev = (e)   => {
        
        const prevResult = users.filter(element => element.id === e.currentTarget.dataset.userid);
        
        setPrev([...prevResult]);
    }

    useEffect(()=> {
        
        if (prev) {
            window.sessionStorage.setItem('prev', JSON.stringify(prev))
        }
    },[prev])

    return {
        prev,
        setPrev,
        handlePrev
    }
}

export default usePrevious;