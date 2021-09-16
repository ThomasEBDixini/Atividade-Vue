
// Aplicação 01

var app = new Vue({
    el:'#app',
    data: {
        message: 'Olá Vue'
    }
})

// Aplicação 02

var appTwo = new Vue({
    el: '#app-2',
    data: {
        message: 'Você carregou está página em ' + new Date().toLocaleString()
    }
})

// Aplicação 03

var appThree = new Vue({
    el: "#app-3",
    data: {
        seen: true
    }
})