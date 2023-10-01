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

Exercicio1();