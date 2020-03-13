function job1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('sucesso! Job 1!');
        }, 2000);
    });
}

function job2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('resolvido job 2');
        }, 1000);
    });
}

const promise = job1();

promise
.then(resposta => {
    return job2();
})

.then(respostaJob2 => {
    console.log('promise console ', respostaJob2)
})

.catch(error => console.log('erro >>>>>', error))