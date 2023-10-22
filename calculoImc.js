class Pessoa {
    nome;
    peso;
    altura;
    
constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
}

calcularImc() {
    return this.peso / (this.altura * this.altura);
}

    classificarImc() {
        const imc = this.calcularImc();
        if(imc >= 25) {
            return ("Acima do Peso");
        } else if(imc >= 18 && imc < 25) {
            return ("Saudável");
        } else {
            return ("Abaixo do Peso");
        }
    }
}

const jose = new Pessoa("Jose", 73, 1.75); 

console.log(jose);
const imcJose = jose.calcularImc();
const classificarJose = jose.classificarImc();

console.log(`\nO IMC de ${jose.nome} é ${imcJose.toFixed(2)} e ele está ${classificarJose}.`);