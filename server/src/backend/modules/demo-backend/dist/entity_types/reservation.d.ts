import { ExecutionContext, IInheritedSchema, IEntity } from '@process-engine-js/core_contracts';
import { Entity, EntityDependencyHelper } from '@process-engine-js/data_model_contracts';
import { IReservationEntity } from '../interfaces';
export declare class ReservationEntity extends Entity implements IReservationEntity {
    constructor(entityDependencyHelper: EntityDependencyHelper, context: ExecutionContext, schema: IInheritedSchema);
    initialize(derivedClassInstance: IEntity): Promise<void>;
    name: string;
    category: string;
    isOneWay: boolean;
    navigationSystem: boolean;
    additionalDriver: boolean;
    price: number;
}
