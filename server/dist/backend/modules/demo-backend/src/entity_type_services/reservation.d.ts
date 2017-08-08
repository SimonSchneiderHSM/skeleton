import { IReservationEntityTypeService } from '../interfaces';
import { IDatastoreService } from '@process-engine-js/data_model_contracts';
import { IFactory } from '@process-engine-js/core_contracts';
export declare class ReservationEntityTypeService implements IReservationEntityTypeService {
    private _datastoreService;
    private _datastoreServiceFactory;
    constructor(datastoreServiceFactory: IFactory<IDatastoreService>);
    private readonly datastoreService;
    createReservation(context: any, token: any): Promise<any>;
}
