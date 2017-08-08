"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ReservationEntityTypeService {
    constructor(datastoreServiceFactory) {
        this._datastoreService = undefined;
        this._datastoreServiceFactory = undefined;
        this._datastoreServiceFactory = datastoreServiceFactory;
    }
    get datastoreService() {
        if (!this._datastoreService) {
            this._datastoreService = this._datastoreServiceFactory();
        }
        return this._datastoreService;
    }
    async createReservation(context, token) {
        const category = token.history.ut_WaehleKlasse.formData.category;
        const oneWay = token.history.ut_WaehleKlasse.formData.isOneWay;
        const addDriver = token.history.ut_WaehleExtras ? token.history.ut_WaehleExtras.formData.additionalDriver : false;
        const navi = token.history.ut_WaehleExtras ? token.history.ut_WaehleExtras.formData.navigationSystem : false;
        const price = token.history.st_CalcPreis;
        const data = {
            category: category,
            isOneWay: oneWay,
            navigationSystem: navi,
            additionalDriver: addDriver,
            price: price
        };
        const createOptions = {};
        const reservationEntityType = await this.datastoreService.getEntityType('Reservation');
        const reservationEntity = await reservationEntityType.createEntity(context, data, createOptions);
        const saveOptions = {};
        await reservationEntity.save(context, saveOptions);
        const toPojoOptions = {};
        const pojo = await reservationEntity.toPojo(context, toPojoOptions);
        return pojo;
    }
}
exports.ReservationEntityTypeService = ReservationEntityTypeService;

//# sourceMappingURL=reservation.js.map
