import {token, url} from '../config.json';
import tmp from '../tmp.json';


export let Movie = {
    upComing: async (nbPage) => {
        let data = [];
        for (let i = 0; i < nbPage; i++) {
            let res = await fetch(`${url}/movie/upcoming?api_key=${token}&page=${i + 1}`);
            let json = await res.json();
            data.push(...json.results);
        }
        return data;
    },

    details: async (id) => {
        let res = await fetch(`${url}/movie/${id}?api_key=${token}`);
        let data = await res.json();
        console.log(data);
        return data;
    },

    gender: async () => {
        let res = await fetch(`${url}/genre/movie/list?api_key=${token}`);
        return await res.json();
    }
}

export async function getImage(image) {
    let res = await fetch(`https://image.tmdb.org/t/p/w500/${image}`);
}