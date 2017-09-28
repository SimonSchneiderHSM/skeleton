import {ExecutionContext, IFromPojoOptions, IPublicSaveOptions, IToPojoOptions} from '@process-engine-js/core_contracts';
import {IDatastoreService, IEntityType} from '@process-engine-js/data_model_contracts';
import {IFactoryAsync} from 'addict-ioc';
import {IReservationEntity, IReservationEntityTypeService} from '../interfaces';

export class ReservationEntityTypeService implements IReservationEntityTypeService {

  private _datastoreService: IDatastoreService = undefined;
  private _datastoreServiceFactory: IFactoryAsync<IDatastoreService> = undefined;

  constructor(datastoreServiceFactory: IFactoryAsync<IDatastoreService>) {
    this._datastoreServiceFactory = datastoreServiceFactory;
  }

  private async getDatastoreService(): Promise<IDatastoreService> {
    if (!this._datastoreService) {
      this._datastoreService = await this._datastoreServiceFactory();
    }

    return this._datastoreService;
  }

  public async createReservation(context: ExecutionContext, token: any): Promise<any> {
    const category: string = token.history.ut_WaehleKlasse.category;
    const oneWay: boolean = token.history.ut_WaehleKlasse.isOneWay;
    const addDriver: boolean = token.history.ut_WaehleExtras ? token.history.ut_WaehleExtras.additionalDriver : false;
    const navi: boolean = token.history.ut_WaehleExtras ? token.history.ut_WaehleExtras.navigationSystem : false;
    const price: number = token.history.st_CalcPreis;

    const data: any = {
      category: category,
      isOneWay: oneWay,
      navigationSystem: navi,
      additionalDriver: addDriver,
      price: price,
    };

    const createOptions: IFromPojoOptions = {};

    const dataStoreService: IDatastoreService = (await this.getDatastoreService());
    const reservationEntityType: IEntityType<IReservationEntity> = await dataStoreService.getEntityType<IReservationEntity>('Reservation');
    const reservationEntity: IReservationEntity = await reservationEntityType.createEntity<IReservationEntity>(context, data, createOptions);

    const saveOptions: IPublicSaveOptions = {};
    await reservationEntity.save(context, saveOptions);

    const toPojoOptions: IToPojoOptions = {};
    const pojo: any = await reservationEntity.toPojo(context, toPojoOptions);

    return pojo;
  }
}
