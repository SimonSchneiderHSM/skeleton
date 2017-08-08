"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_contracts_1 = require("@process-engine-js/core_contracts");
const data_model_contracts_1 = require("@process-engine-js/data_model_contracts");
const metadata_1 = require("@process-engine-js/metadata");
class ReservationEntity extends data_model_contracts_1.Entity {
    constructor(entityDependencyHelper, context, schema) {
        super(entityDependencyHelper, context, schema);
    }
    async initialize(derivedClassInstance) {
        const actualInstance = derivedClassInstance || this;
        await super.initialize(actualInstance);
    }
    get name() {
        return this.getProperty(this, 'name');
    }
    set name(value) {
        this.setProperty(this, 'name', value);
    }
    get category() {
        return this.getProperty(this, 'category');
    }
    set category(value) {
        this.setProperty(this, 'category', value);
    }
    get isOneWay() {
        return this.getProperty(this, 'isOneWay');
    }
    set isOneWay(value) {
        this.setProperty(this, 'isOneWay', value);
    }
    get navigationSystem() {
        return this.getProperty(this, 'navigationSystem');
    }
    set navigationSystem(value) {
        this.setProperty(this, 'navigationSystem', value);
    }
    get additionalDriver() {
        return this.getProperty(this, 'additionalDriver');
    }
    set additionalDriver(value) {
        this.setProperty(this, 'additionalDriver', value);
    }
    get price() {
        return this.getProperty(this, 'price');
    }
    set price(value) {
        this.setProperty(this, 'price', value);
    }
}
__decorate([
    metadata_1.schemaAttribute({ type: core_contracts_1.SchemaAttributeType.string })
], ReservationEntity.prototype, "name", null);
__decorate([
    metadata_1.schemaAttribute({ type: core_contracts_1.SchemaAttributeType.string })
], ReservationEntity.prototype, "category", null);
__decorate([
    metadata_1.schemaAttribute({ type: core_contracts_1.SchemaAttributeType.boolean })
], ReservationEntity.prototype, "isOneWay", null);
__decorate([
    metadata_1.schemaAttribute({ type: core_contracts_1.SchemaAttributeType.boolean })
], ReservationEntity.prototype, "navigationSystem", null);
__decorate([
    metadata_1.schemaAttribute({ type: core_contracts_1.SchemaAttributeType.boolean })
], ReservationEntity.prototype, "additionalDriver", null);
__decorate([
    metadata_1.schemaAttribute({ type: core_contracts_1.SchemaAttributeType.number })
], ReservationEntity.prototype, "price", null);
exports.ReservationEntity = ReservationEntity;

//# sourceMappingURL=reservation.js.map
