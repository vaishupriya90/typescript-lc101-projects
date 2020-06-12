import { Cargo } from "./Cargo";
import { Payload } from "./Payload"
import { Astronaut } from './Astronaut'

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[];
    astronauts: Astronaut[];

    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
        this.cargoItems = [];
        this.astronauts = [];
    }

    sumMass(items: Payload[]): number {
        let sum: number = 0;
        for (let i = 0; i < items.length; i++) {
            let itemMass = items[i].massKg;
            sum += itemMass;
        }
        return sum;
    }

    currentMassKg(): number {
        let payLoadArray: Payload[] = [];
        for (let i = 0; i < this.astronauts.length; i++) {
            payLoadArray.push(this.astronauts[i]);
        }
        for (let i = 0; i < this.cargoItems.length; i++) {
            payLoadArray.push(this.cargoItems[i]);
        }
        let combinedMass: number = this.sumMass(payLoadArray);
        return combinedMass;
    }
    canAdd(item:Payload):boolean{
        return (this.currentMassKg() + item.massKg <= this.totalCapacityKg);
    }

    addCargo(cargo: Cargo): boolean{
        if(this.canAdd(cargo)){
            this.cargoItems.push(cargo);
            return true;
        }
        return false;
    }
    addAstronaut(astronaut: Astronaut): boolean{
        if(this.canAdd(astronaut)){
            this.astronauts.push(astronaut);
            return true;
        }
        return false;
    }


}