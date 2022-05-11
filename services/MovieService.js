import {token, url} from '../config.json';
import tmp from '../tmp.json';


export let Movie = {
    upComing: async () => {
        /*let res = await fetch(`${url}/movie/upcoming?api_key=${token}`)
        return await res.json();*/
        return tmp
    },

    details: async (id) => {
        let res = await fetch(`${url}/movie/${id}?api_key=${token}`)
        return await res.json();
    }
}

export async function getImage(image) {
   let res = await fetch(`https://image.tmdb.org/t/p/w500/${image}`)
}