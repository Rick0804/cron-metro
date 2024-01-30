cronometro = () => {
    textField = () => {
         let text = document.querySelector(".cronometro");
         return text;
    }
    
    let segundos = 1;

    timer = () => {
            let date = new Date(segundos * 1000)
            const text = textField();
            segundos++;
            text.innerHTML = date.toLocaleTimeString('pt-br', {
                hour12: false,
                hours: '2-digit',
                minutes: '2-digit',
                seconds: '2-digit',
                timeZone: 'UTC'
            })
    }

    document.querySelector(".iniciar").addEventListener('click', () => {
            tempo = setInterval(timer, 1000);
            textField().classList.remove("pausado")
    }) 
    document.querySelector(".pausar").addEventListener('click', () => {
        clearInterval(tempo);
        textField().classList.add("pausado");
    })
    document.querySelector(".zerar").addEventListener('click', () => {
        segundos = 0;
        timer();
        textField().classList.remove("pausado");
    })
    
    
}

cronometro();


