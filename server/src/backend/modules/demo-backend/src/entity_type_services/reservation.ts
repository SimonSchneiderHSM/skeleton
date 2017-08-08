import {IReservationEntityTypeService} from '../interfaces';
import {IDatastoreService} from '@process-engine-js/data_model_contracts';
import { IFactory } from '@process-engine-js/core_contracts';

export class ReservationEntityTypeService implements IReservationEntityTypeService {
    
    private _datastoreService: IDatastoreService = undefined;
    private _datastoreServiceFactory: IFactory<IDatastoreService> = undefined;

    constructor(datastoreServiceFactory: IFactory<IDatastoreService>) {
        this._datastoreServiceFactory = datastoreServiceFactory;
    }

    private get datastoreService(): IDatastoreService {
        if (!this._datastoreService) {
            this._datastoreService = this._datastoreServiceFactory();
        }
        return this._datastoreService;
    }

    public async createReservation(context, token): Promise<any> {
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