export class ServiceData {
    constructor(title, details) {
        this.title = title;
        this.details = details;
    }
    setImgSource(src, placeholder = null) {
        this.img = src
        this.placeholder = placeholder

        return this
    }
}

export const words = [
    new ServiceData('Independência com Segurança', 
        "Favorecimento da independência e autonomia balizado em critérios de segurança para o idoso e para seus familiares"),
    new ServiceData('Orientação ou Acompanhamento Familiar', 
        "Escuta ativa das demandas de familiares a respeito do cuidado do idoso, com o intuito de buscar conjuntamente, soluções para problemas cotidianos."),
    new ServiceData('Avaliação Cognitivo Funcional', 
        "Objetiva identificar o impacto da(s) alteração (ões) cognitiva (s) na realização das atividades cotidianas. São utilizados instrumentos formais estáticos e dinâmicos com enfoque quantitativo e qualitatitivo, buscando contemplar as demandas do cliente e dos familiares."),
    new ServiceData('Avaliação do Desempenho Ocupacional', 
        "Objetiva identificar possíveis discrepâncias de desempenho na realização das atividades cotidianas significativas, advindos por injúrias neurológicas ( AVE, D. de Parkinson, Traumatismo Cranio Encefálico, Esclerose Lateral Amiotrófica). Engloba a avaliação dos componentes neuromotores e do ambiente."),
    new ServiceData('Avaliação Postural em Sedestação', 
        "Direcionada a usuários de cadeira de rodas e/ou idosos com mobilidade reduzida no leito, com o intuito de identificar a melhor proposta de posicionamento de acordo com suas condições posturais."),
    
    new ServiceData('Otimização de Habilidades', 
        "Reconhecimento e potencialização das habilidades remanescentes para valorizar o papel social do idoso, mesmo em situação de dependência."),
    new ServiceData('Organização de Rotina', 
        "Algo sobre este serviço. Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum."),
    new ServiceData('Adequação Postural em Sedestação', 
        "Intervenção voltada a auxilar a escolha do sistema de assento ou adaptar o produto já existente ás condições osteomusculares e funcionais do idoso, diminuindo o risco do aparecimento (ou agravamento) de deformidades e úlceras de pressão, conferindo conforto e funcionalidade."),
    new ServiceData('Reabilitação Neuromotora', 
        "Processo de intervenção que inclui atenção aos aspectos neuropsicomotor, cognitivo e músculoesquelético envolvidos na performance ocupacional. Objetiva facilitar o retorno do cliente ao seu papel social no domicílio, local de trabalho e do lazer."),
    new ServiceData('Reabilitação Cognitivo Funcional', 
        "Reabilitação Cognitivo Funcional: proposta de intervenção diferenciada que parte da observação do comportamento cognitivo do idoso para melhorar sua performance diante das demandas do cotidiano.")
]

