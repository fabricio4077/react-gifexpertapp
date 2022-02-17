
import {useState} from 'react'
import { useEffect } from 'react/cjs/react.development';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

    const [state, setState] = useState({
           data: [],
           loading: true, 
    });

    useEffect( () => {
      getGifs(category).then(imgs => {
        // console.log(imgs)
        setState({
            data: imgs,
            loading: false
        });
      })
    }, [category])
   

    // setTimeout(() => {
    //   setState({
    //     data: [1,2,3],
    //     loading: false, 
    //   })
    // }, 3000);

    return state;


}
