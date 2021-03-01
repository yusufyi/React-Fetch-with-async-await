import React, { useState, useEffect } from 'react'

const url = 'https://api.coindesk.com/v1/bpi/currentprice.json'
const Price = () => {
    const [loading,setLoading] = useState(true);
    const [prices,setPrices] = useState([]);

    let getPrice = async () => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const price = await response.json();
            setLoading(false);
            setPrices(price);
            console.log(price);
        } catch(error) {
            setLoading(false);
            console.log(error);
        }
    }

    useEffect(()=>{
        getPrice();
    },[]);

    useEffect(()=>{
        const interval = setInterval(()=> {
            getPrice();
        },60000);
        return () =>clearInterval(interval);

    },[]);




    if(prices.length === 0) {
        return ( <div>Loading ....</div>)
    }
    else {
    return (
        <div class="container">
            <div>BitCoin Price</div>
            <br></br>
            <div>USD : {prices.bpi.USD.rate}</div>
            <div>EUR : {prices.bpi.USD.rate}</div>
            <div>GPB : {prices.bpi.USD.rate}</div>
            <br></br>
            <div>last updated time : {prices.time.updated}</div>
        </div>
    )

}
}



export default Price;