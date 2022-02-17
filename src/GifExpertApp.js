import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

// const categories = ['uno', 'dos', 'tres'];
        const [categories, setCategories] = useState(['Goku'])

        // const handleAdd = () => {
        //     // setCategories([...categories,'cuatro']);
        //     setCategories(cats => [...cats, 'cuatro']);
        // }

    return(

       <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories} />

        <hr />

        {/* <button onClick={handleAdd}>Agregar</button> */}
       
        <ol>
            {
             categories.map( category => {
                    // return <li key={category}>{category}</li>
                   return (<GifGrid key={category} category={category}/>)
             })        
            }
        </ol>    

       </>     
    ); 

}
