import {ExecutionContext, IEntity, IInheritedSchema, SchemaAttributeType} from '@process-engine-js/core_contracts';
import {Entity, EntityDependencyHelper, IEntityType, IPropertyBag} from '@process-engine-js/data_model_contracts';
import {IReservationEntity} from '../interfaces';
import {schemaAttribute} from '@process-engine-js/metadata';

export class ReservationEntity extends Entity implements IReservationEntity {

  constructor(entityDependencyHelper: EntityDependencyHelper,
              context: ExecutionContext,
              schema: IInheritedSchema,
              propertyBag: IPropertyBag,
              entityType: IEntityType<IEntity>) {
    super(entityDependencyHelper, context, schema, propertyBag, entityType);
  }

  public async initialize(): Promise<void> {
    await super.initialize(this);
  }

  @schemaAttribute({ type: SchemaAttributeType.string })
  public get name(): string {
    return this.getProperty(this, 'name');
  }

  public set name(value: string) {
    this.setProperty(this, 'name', value);
  }

  @schemaAttribute({ type: SchemaAttributeType.string })
  public get category(): string {
    return this.getProperty(this, 'category');
  }

  public set category(value: string) {
    this.setProperty(this, 'category', value);
  }

  @schemaAttribute({ type: SchemaAttributeType.boolean })
  public get isOneWay(): boolean {
    return this.getProperty(this, 'isOneWay');
  }

  public set isOneWay(value: boolean) {
    this.setProperty(this, 'isOneWay', value);
  }

  @schemaAttribute({ type: SchemaAttributeType.boolean })
  public get navigationSystem(): boolean {
    return this.getProperty(this, 'navigationSystem');
  }

  public set navigationSystem(value: boolean) {
    this.setProperty(this, 'navigationSystem', value);
  }

  @schemaAttribute({ type: SchemaAttributeType.boolean })
  public get additionalDriver(): boolean {
    return this.getProperty(this, 'additionalDriver');
  }

  public set additionalDriver(value: boolean) {
    this.setProperty(this, 'additionalDriver', value);
  }

  @schemaAttribute({ type: SchemaAttributeType.number })
  public get price(): number {
    return this.getProperty(this, 'price');
  }

  public set price(value: number) {
    this.setProperty(this, 'price', value);
  }

}
