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
        "Algo sobre este serviço. Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum."),
    new ServiceData('Orientação ou Acompanhamento Familiar', 
        "Algo sobre este serviço. Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum."),
    new ServiceData('Avaliação Cognitivo Funcional', 
        "Algo sobre este serviço. Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum."),
    new ServiceData('Avaliação do Desempenho Ocupacional', 
        "Algo sobre este serviço. Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum."),
    new ServiceData('Avaliação Postural em Sedestação', 
        "Algo sobre este serviço. Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum."),
    
    new ServiceData('Otimização de Habilidades', 
        "Algo sobre este serviço. Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum."),
    new ServiceData('Organização de Rotina', 
        "Algo sobre este serviço. Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum."),
    new ServiceData('Adequação Postural em Sedestação', 
        "Algo sobre este serviço. Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum."),
    new ServiceData('Reabilitação Neuromotora', 
        "Algo sobre este serviço. Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum."),
    new ServiceData('Reabilitação Cognitivo Funcional', 
        "Algo sobre este serviço. Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.")
        .setImgSource('servico-1.jpg', 'servico-1-tiny.jpg'),
]

