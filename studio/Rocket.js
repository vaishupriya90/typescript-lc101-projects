"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
        this.cargoItems = [];
        this.astronauts = [];
    }
    Rocket.prototype.sumMass = function (items) {
        var sum = 0;
        for (var i = 0; i < items.length; i++) {
            var itemMass = items[i].massKg;
            sum += itemMass;
        }
        return sum;
    };
    Rocket.prototype.currentMassKg = function () {
        var payLoadArray = [];
        for (var i = 0; i < this.astronauts.length; i++) {
            payLoadArray.push(this.astronauts[i]);
        }
        for (var i = 0; i < this.cargoItems.length; i++) {
            payLoadArray.push(this.cargoItems[i]);
        }
        var combinedMass = this.sumMass(payLoadArray);
        return combinedMass;
    };
    Rocket.prototype.canAdd = function (item) {
        return (this.currentMassKg() + item.massKg <= this.totalCapacityKg);
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        return false;
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        return false;
    };
    return Rocket;
}());
exports.Rocket = Rocket;
