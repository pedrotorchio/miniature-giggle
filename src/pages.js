import slugify from 'slugify';

const home = makeRoute('/', 'Sobre');
const serv = makeRoute('/servicos', 'Serviços');
const loca = makeRoute('/localizacao', 'Localização');
const cont = makeRoute('/contato', 'Contato');

export default [ home, serv, loca, cont ];


function makeRoute(url, title) {
    return {
        url,
        title,
        slug: slugify(title, { lower: true })
    };
}