"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bluebirdPromise = require("bluebird");
class PriceCalculation {
    calculatePrice(token) {
        const category = token.history.ut_WaehleKlasse.formData.category;
        const oneWay = token.history.ut_WaehleKlasse.formData.isOneWay;
        const addDriver = token.history.ut_WaehleExtras ? token.history.ut_WaehleExtras.formData.additionalDriver : false;
        const navi = token.history.ut_WaehleExtras ? token.history.ut_WaehleExtras.formData.navigationSystem : false;
        const leather = token.history.ut_WaehleExtras ? token.history.ut_WaehleExtras.formData.leather : false;
        const chauffeur = token.history.UserTask_Luxus ? token.history.UserTask_Luxus.formData.chauffeur : false;
        let price = 0;
        switch (category) {
            case 'smallClass':
                price = 50;
                break;
            case 'mediumClass':
                price = 100;
                break;
            default:
                price = 200;
        }
        if (oneWay) {
            price += 25;
        }
        if (addDriver) {
            price += 10;
        }
        if (navi) {
            price += 10;
        }
        if (chauffeur) {
            price += 1000;
        }
        if (leather) {
            return bluebirdPromise.reject('Fahrzeug ist nicht verfügbar');
        }
        return bluebirdPromise.resolve(price);
    }
}
exports.PriceCalculation = PriceCalculation;

//# sourceMappingURL=price_calculation.js.map
