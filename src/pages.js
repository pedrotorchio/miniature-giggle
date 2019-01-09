import slugify from 'slugify';

const serv = makeRoute('#servicos', 'Serviços');
const loca = makeRoute('#localizacao', 'Localização');
const sobre = makeRoute('#sobre', 'Sobre');
const cont = makeRoute('#contato', 'Contato');

export default [ serv, loca, cont, sobre ];


export function makeRoute(url, title) {
    return {
        url,
        title,
        slug: slugify(title, { lower: true })
    };
}