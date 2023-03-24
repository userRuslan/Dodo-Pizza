import React, { useEffect, useState } from 'react';

import { Categories, PizzaBlock, PizzaBlockSkeleton, SortPopup } from '../components'

import axios from 'axios';

import '../scss/style.scss';

export default function Home () {
    const [items, setItems] = useState([]);
    const [isLoadingPizzas, setIsLoadingPizzas] = useState(false);

    useEffect(() => {
        async function fetchData () {
            const res = await axios.get('https://641d9238945125fff3d078ca.mockapi.io/items');
            setItems(res.data);
            setIsLoadingPizzas(true)
        }
        fetchData()
    }, [])
    return (
        <>
            <div className="main__top mb-32">
                <Categories />
                <SortPopup />
            </div>
            <div className="content">
                <h1 className='content__title mb-35'>Все пиццы</h1>
                <div className="content__block">
                    {isLoadingPizzas ?
                        items.map((item) => (
                            <div key={item.id} className='content-item mb-65'>

                                <PizzaBlock {...item} />
                            </div>
                        )) :
                        [...new Array(8)].map((_, index) => (
                            <div className='content-item mb-65'>
                                <PizzaBlockSkeleton key={index} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}