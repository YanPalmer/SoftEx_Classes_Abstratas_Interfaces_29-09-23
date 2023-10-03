// Crie uma fábrica de objetos Shape
function Exercicio1() {
    abstract class ShapeFactory {
        abstract criarForma(): FormaGeometrica;
    }

    abstract class FormaGeometrica {
        abstract lados(): void;
    }
    class Circulo extends FormaGeometrica {
        lados() {
            console.log("O circulo tem 1 lado");
        }
    }
    class Retangulo extends FormaGeometrica {
        lados() {
            console.log("O retângulo tem 4 lados");
        }
    }

    class FabricaDeCirculos extends ShapeFactory {
        criarForma(): FormaGeometrica {
            return new Circulo();
        }
    }

    class FabricaDeRetangulos extends ShapeFactory {
        criarForma(): FormaGeometrica {
            return new Retangulo();
        }
    }

    function apresentarShape(shape: ShapeFactory) {
        const formaGeometrica = shape.criarForma();
        formaGeometrica.lados();
    }

    const novoCirculo = new FabricaDeCirculos();
    const novoRetangulo = new FabricaDeRetangulos();

    apresentarShape(novoCirculo);
    apresentarShape(novoRetangulo);

    // Aprendizado

    // abstract class AnimalFactory {
    //     abstract criarAnimal(): Animal;
    // }

    // abstract class Animal {
    //     abstract fazerSom(): void;
    // }

    // class Cachorro extends Animal {
    //     fazerSom() {
    //         console.log("O cachorro faz Au Au");
    //     }
    // }
    // class Gato extends Animal {
    //     fazerSom(): void {
    //         console.log("Miau");
    //     }
    // }

    // class CachorroFactory extends AnimalFactory {
    //     criarAnimal(): Animal {
    //         return new Cachorro();
    //     }
    // }
    // class GatoFactory extends AnimalFactory {
    //     criarAnimal(): Animal {
    //         return new Gato();
    //     }
    // }

    // function interagirComAnimal(factory: AnimalFactory) {
    //     const animal = factory.criarAnimal();
    //     animal.fazerSom();
    // }

    // const cachorroFactory = new CachorroFactory();
    // const gatoFactory = new GatoFactory()

    // interagirComAnimal(cachorroFactory);
    // interagirComAnimal(gatoFactory);
}

// Implemente o padrão Observer
function Exercicio2() {
    // Classe Observer(Observador) CRIA um observador
    class Observer {
        nomeObservador: string;

        constructor(nome: string) {
            this.nomeObservador = nome;
        }

        // Mostra uma atualização na tela
        atualizar(mensagem: string) {
            console.log(`${this.nomeObservador} recebeu uma notificação: ${mensagem}`);
        }
    }

    // A classe Subject(Assunto) ADICIONA um observador a ser observado
    class Subject {
        // Lista de observados
        observers: Observer[] = [];

        adicionarObservador(observer: Observer) {
            this.observers.push(observer);
        }

        removerObservador(observer: Observer) {
            const index = this.observers.indexOf(observer);
            if (index !== -1) {
                this.observers.splice(index, 1);
            }
        }

        // Notifica a todos os observadores
        notificar(mensagem: string) {
            for (const cadaObservador of this.observers) {
                cadaObservador.atualizar(mensagem);
            }
        }
    }

    // Cria uma instância de Subject
    const PrimeiroSubject = new Subject();

    // Criando objetos a serem observados
    const observer1 = new Observer("Observador 1 criado");
    const observer2 = new Observer("Observador 2 criado");
    const observer3 = new Observer("Observador 3 criado");

    // Insere observadores dentro do "PrimeiroSubject"
    PrimeiroSubject.adicionarObservador(observer1);
    PrimeiroSubject.adicionarObservador(observer2);
    PrimeiroSubject.adicionarObservador(observer3);

    // Envia uma mensagem de notificação
    PrimeiroSubject.notificar("Mensagem de notificação!");

    // Remove um observador
    PrimeiroSubject.removerObservador(observer2);

    // Outra notificação qualquer
    PrimeiroSubject.notificar("Outra mensagem de notificação!");
}


// Exercicio1();
Exercicio2();