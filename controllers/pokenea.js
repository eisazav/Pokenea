import os from "os"
const products = [
    {
        id:1,
        Nombre:"Alcalde dormilon",
        Altura:"1.70",
        Habilidad:"Ronquido",
        Imagen:"https://storage.googleapis.com/pokenea_bucket/images/alcande%20dormilon.jpg",
        Frase:"A nada de serlo todo"
    },
    {
        id:2,
        Nombre:"Alcalde sociable",
        Altura:"1.73",
        Habilidad:"Amigable",
        Imagen:"https://storage.googleapis.com/pokenea_bucket/images/alcalde%20sociable.PNG",
        Frase:"Como está la familia"
    },
    {
        id:3,
        Nombre:"Alcalde persuasivo",
        Altura:"1.77",
        Habilidad:"Tramador",
        Imagen:"https://storage.googleapis.com/pokenea_bucket/images/alcalde%20persuasivo.jpg",
        Frase:"Estamos trabajando por Medellín"
    },
    {
        id:4,
        Nombre:"El fuicioso",
        Altura:"1.67",
        Habilidad:"Carisma",
        Imagen:"https://storage.googleapis.com/pokenea_bucket/images/Elfuicioso.jpg",
        Frase:"Solo nacional a morir"
    },
    {
        id:5,
        Nombre:"Dayana Yiraldo",
        Altura:"1.60",
        Habilidad:"Confusion",
        Imagen:"https://storage.googleapis.com/pokenea_bucket/images/dayana.JPG",
        Frase:"Por la estabilización mundial no nos inundamos"
    },
    {
        id:6,
        Nombre:"Poderoso",
        Altura:"1.65",
        Habilidad:"LLanto",
        Imagen:"https://storage.googleapis.com/pokenea_bucket/images/din%7B.jpeg",
        Frase:"Con el poderoso siempre sufrimos, pero..."
    },
    {
        id:7,
        Nombre:"Doña Gloria",
        Altura:"1.55",
        Habilidad:"Ofensiva",
        Imagen:"https://storage.googleapis.com/pokenea_bucket/images/dona-gloria.jpg",
        Frase:"Come mierda malparido"
    },
    {
        id:8,
        Nombre:"Laura Cardona",
        Altura:"1.60",
        Habilidad:"Ego",
        Imagen:"https://storage.googleapis.com/pokenea_bucket/images/lauracardona.JPG",
        Frase:"Mi pelo es real"
    },
    {
        id:9,
        Nombre:"YinYON",
        Altura:"1.67",
        Habilidad:"Hi Hop",
        Imagen:"https://storage.googleapis.com/pokenea_bucket/images/nosepai.JPG",
        Frase:"No se pai por que tuki tuki muñeco"
    }
]

function getPokenea(){
    const random = Math.floor(Math.random() * products.length);
    const pokenea = {id:products[random].id,
                    Nombre:products[random].Nombre,
                    Altura:products[random].Altura,
                    Habilidad:products[random].Habilidad,
                    container_id:os.hostname()
                }

    return pokenea
}
function getImagenPokenea(){
    const random = Math.floor(Math.random() * products.length);
    const pokenea = {Imagen:products[random].Imagen,
                    Frase:products[random].Frase,
                    container_id:os.hostname()
                    }
    return  pokenea
}

export {getImagenPokenea,getPokenea}