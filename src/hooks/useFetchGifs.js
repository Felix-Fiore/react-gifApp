import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchgGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true,
    });
    //el effect solo se dispara cuando cambia la categoria
    useEffect(() => {
        //luego getgifs realiza la peticion http, y obtenemos las imgs
        getGifs(category).then((imgs) => {
            //pequeño delay para realizar la carga de data
            setTimeout(() => {
                //cuando tenemos la data, usamos el state para cambiar la informacion, lo cual va a aplicar una renderizacion en el componente gifgrid
                setState({
                    data: imgs,
                    loading: false,
                });
            }, 200);
        });
    }, [category]);

    return state;
};
