function Carro (a,b,c,d,e){
        this.modelo = a;
        this.cor = b;
        this.ano = c;
        this.valor=  d;
        this.popular= e
        

}

var carro = new Carro ('Honda Civic', 'Preto', 2017, 100000, true);

 console.log(carro);