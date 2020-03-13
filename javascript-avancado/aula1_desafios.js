/* 
callback1 must be called only one time, after 2 seconds.
callback2 must be called three times with an interval of 1 second.
*/

setTimeout(() => {
    callback2();
    setTimeout(()=> {
        callback1();
        callback2();
        setTimeout(() => {
            callback2();
            }, 1000)
        }, 1000)
    }, 1000);
}

/*
The function job must return a promise object (you are in a NodeJS environment, you can use new Promise)
The promise must resolve itself 2 seconds after the call to job and must provide hello world in the data
*/

function job() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 2000,'hello world');
    });
}

function job() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{ return 'hello world' }, 2000);
    });
}

/*
Nesse código, sua função recebe um parâmetro. Você deve modificar o código abaixo com base nas seguintes regras:
Sua função deve sempre retornar uma promise
Se os dados não forem um número, retorne uma promise rejeitada instantaneamente e mostre o conteúdo do "erro"
Se os dados forem um número ímpar, retorne uma promise resolvida 1 segundo depois e exiba a mensagem "ímpar"
Se os dados forem um número par, retorne uma promise rejeitada 2 segundos depois e exiba a mensagem "par"
*/

function job(data) {
    return new Promise((resolve, reject)=> {
        if (!isNaN(data)) {
            reject('Erro.');
        } else {
            if (data % 2 !== 0) {
                setTimeout(resolve,'ímpar', 1000);
            } else {
                setTimeout(reject,'par',2000);
            }
    });
}

/*
O código a seguir usa promises para manipular um resultado assíncrono. O resultado é uma promise que gera um ID quando resolvido. 
Esse ID deve ser usado para recuperar informações do banco de dados. No final, sua função deve retornar a propriedade name da 
informação. Em caso de erro, você deve retornar uma promise rejeitada com o erro fornecido. Mas primeiro você deve notificar o errorManager com o erro.
*/

/* Início do código original */
function job(result, database, errorManager) {
    return result

    .then(function(id) {
        return database.get(id);
    })

    .then(function(info) {
        return info.name;
    })

    .catch(function(error) {
        errorManager.notify(error);
        throw error;
    });
}
/* Fim do código original */

/* Início do código com async/await */
async function job (result, database, errorManager) {
    try {
        const id = await result;
        const info = await info.name;
        return info.name;
    } catch {
        errorManager.notify(error);
        throw error;
    }
}
/* Fim do código com async/await */