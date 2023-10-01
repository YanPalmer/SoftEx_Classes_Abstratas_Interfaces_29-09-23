
// Exercícios (classes, classes abstratas e interfaces)

/*
1. **Crie uma classe chamada `Animal` com as propriedades `nome` e `idade`. Crie uma classe chamada `Cachorro` que herda da classe `Animal` e adiciona uma propriedade chamada `raca`.**
*/
function Exercicio1() {
    class Animal {
        nome;
        idade;
      
        constructor(nome: string, idade: number) {
          this.nome = nome;
          this.idade = idade;
        }
      }
      
      class Cachorro extends Animal {
        raca: string;
      
        constructor(nome: string, idade: number, raca: string) {
          super(nome, idade);
          this.raca = raca;
        }
      }
    let novoCachorro = new Cachorro("buldog", 10, "brabo")
    console.log(novoCachorro);
}

/*
2. Escreva o código TypeScript que declare uma interface chamada **`Pessoa`** com duas propriedades: **`nome`** do tipo string e **`idade`** do tipo number. Em seguida, crie uma classe chamada **`Cliente`** que implementa a interface **`Pessoa`** com as mesmas propriedades. Por fim, declare uma constante chamada **`cliente1`** que cria uma instância da classe **`Cliente`**  e exiba o objeto **`cliente1`** no console.
*/
function Exercicio2() {
  interface Pessoa {
    nome(): string;
    idade(): number;
  }

  class Cliente implements Pessoa {
    nome() {
      return "Yan";
    }
    idade() {
      return 23;
    }
  }

  const cliente1 = new Cliente();
  console.log(cliente1.nome(), cliente1.idade());
}
// OBS: Uma interface serve para que a classe siga o padrão exigido

/*
3. **Crie uma classe abstrata chamada `FiguraGeometrica` com as propriedades `nome` e `area`. Crie duas classes concretas que herdam da classe `FiguraGeometrica`: `Quadrado` e `Circulo`.**
*/
function Exercicio3() {
  abstract class FiguraGeometrica {
    abstract nome(): void;
    abstract area(): void;

  }

  class Quadrado extends FiguraGeometrica {
    nome() {
      console.log("Eu sou um quadrado");
    }
    area() {
      console.log("Eu tenho 6 lados");
    }
  }

  class Circulo extends FiguraGeometrica {
    nome() {
      console.log("Eu sou um Círculo");
    }
    area() {
      console.log("Eu tenho a penas 1 lado");
    }
  }

  const quadrado = new Quadrado();
  const circulo = new Circulo();
  
  quadrado.nome();
  quadrado.area();
  circulo.nome();
  circulo.area();
}


Exercicio1();
Exercicio2();
Exercicio3();