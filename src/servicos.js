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
    new ServiceData('Serviço', 
        "Algo sobre este serviço. Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.")
        .setImgSource('servico-1.jpg', 'servico-1-tiny.jpg'),
    new ServiceData('Serviço Diferente', 
        "Algo sobre este serviço. Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum."),
    new ServiceData('Um Outro Serviço', 
        "Algo sobre este serviço. Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum."),
    new ServiceData('Fazemos isso', 
        "Algo sobre este serviço. Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum."),
    new ServiceData('Fazemos Aquilo', 
        "Algo sobre este serviço. Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum."),
    new ServiceData('Isso é Importante', 
        "Algo sobre este serviço. Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum."),
    new ServiceData('Palavra Chave', 
        "Algo sobre este serviço. Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum."),
    new ServiceData('Outra Palavra Chave', 
        "Algo sobre este serviço. Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum."),
    new ServiceData('Chave Palavra', 
        "Algo sobre este serviço. Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum."),
    new ServiceData('Outra Chave', 
        "Algo sobre este serviço. Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum."),
]

