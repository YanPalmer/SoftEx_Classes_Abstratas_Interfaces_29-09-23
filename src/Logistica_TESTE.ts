// Método do Refactoring Guru

abstract class Logistica {
    abstract criarTransporte(): Transporte;
}

abstract class Transporte {
    abstract transportarProduto(): void;
}

class Truck extends Transporte {
    transportarProduto(): void {
        console.log("Entregando produto pela TERRA");
    }
}
class Ship extends Transporte {
    transportarProduto(): void {
        console.log("Entregando produto pelo MAR")
    }
}

class FabricaDeTrucks extends Logistica {
    criarTransporte(): Transporte {
        return new Truck();
    }
}
class FabricaDeShips extends Logistica {
    criarTransporte(): Transporte {
        return new Ship();
    }
}

function apresentarTransporte(tipoTransporte: Logistica) {
    const transporte = tipoTransporte.criarTransporte();
    transporte.transportarProduto();
}

const truck1 = new FabricaDeTrucks();
const ship1 = new FabricaDeShips();

apresentarTransporte(truck1);
apresentarTransporte(ship1);