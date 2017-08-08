import {
  ExecutionContext, SchemaAttributeType, IFactory, IInheritedSchema, IEntity, IQueryObject, ISortProperty,
  IPrivateSaveOptions, IPrivateRemoveOptions, ISortOptions, SortOrder
} from '@process-engine-js/core_contracts';
import {IDataModel, Entity, IEntityType, IPropertyBag} from '@process-engine-js/data_model_contracts';
import {IInvoker} from '@process-engine-js/invocation_contracts';
import {schemaAttribute, allowedSystemRoles} from '@process-engine-js/metadata';

export interface IBaseExampleEntity extends IEntity {

}

export class BaseExampleEntity extends Entity implements IBaseExampleEntity {

  private _dataModel: IDataModel = undefined;
  private _someDependencyInjectedByIoc: any = undefined;

  // note that all arguments - except the first two - are runtime arguments supplied by the system
  // if you want to inject dependencies, please use them as your first arguments before these system arguments
  constructor(dataModel: IDataModel, someDependencyInjectedByIoc: any, propertyBagFactory: IFactory<IPropertyBag>, invoker: IInvoker, entityType: IEntityType<BaseExampleEntity>, context: ExecutionContext, schema: IInheritedSchema) {
    super(propertyBagFactory, invoker, entityType, context, schema);

    this._dataModel = dataModel;
    this._someDependencyInjectedByIoc = someDependencyInjectedByIoc;
  }

  // we need this so that the entity base class knows the highest derived child in a inheritance chain
  // normally you can just copy/paste the initialize function
  public async initialize(derivedClassInstance: IEntity): Promise<void> {
    const actualInstance = derivedClassInstance || this;
    await super.initialize(actualInstance);
  }
  
  private get dataModel(): IDataModel {
    return this._dataModel;
  }
  
  private get someDependencyInjectedByIoc(): any {
    return this._someDependencyInjectedByIoc;
  }

  @schemaAttribute({
    type: SchemaAttributeType.string,
    calculated: {
      boundProperties: ['firstName', 'lastName'],
      onQuery: (query: IQueryObject): IQueryObject => {
        return query;
      },
      onSort: (sortProperty: ISortProperty): ISortOptions => { // gets property=fullName, sortOrder=0
        return undefined; // returns ISortOptions being { properties: [{ property: 'firstName', order: sortProperty.order }, { property: 'lastName', order: sortProperty.order }]}
      },
      onGet: (firstName: string, lastName: string) => {
        return `${this.firstName} ${this.lastName}`;
      },
      onSet: (value: string) => {
        this.firstName = value.split(' ')[0];
        this.lastName = value.split(' ')[1];
      }
    }
  })
  public get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  public set fullName(value: string) {
    this.firstName = value.split(' ')[0];
    this.lastName = value.split(' ')[1];
  }

  @schemaAttribute({
    type: SchemaAttributeType.string,
    onInit: () => {
      return 'Waldo';
    }
  })
  public get firstName(): string {
    return this.getProperty(this, 'firstName');
  }

  public set firstName(value: string) {
    this.setProperty(this, 'firstName', value);
  }

  @schemaAttribute({ type: SchemaAttributeType.string })
  public get lastName(): string {
    return this.getProperty(this, 'lastName');
  }

  public set lastName(value: string) {
    this.setProperty(this, 'lastName', value);
  }


  public async save(context: ExecutionContext, options?: IPrivateSaveOptions): Promise<Entity> {

    // do something BEFORE entity is saved

    await super.save(context, options);

    // do something AFTER entity is saved
  }


  public async remove(context: ExecutionContext, options?: IPrivateRemoveOptions): Promise<void> {

    // do something BEFORE entity is removed

    await super.remove(context, options);

    // do something AFTER entity is removed
  }



  @allowedSystemRoles([
    'this role is necessary to execute this method'
  ])
  public async start(context: ExecutionContext): Promise<void> {

    const typeName = 'SomeEntityTypeNameWithoutTheSuffixEntity';
    const namespace = undefined; // if no namespace is used 'undefined' is used as the fallback

    const ourEntityType = await this.dataModel.getEntityType(undefined, typeName);

    const ourEntityData = {
      something: 'here',
      and: 'something here'
    };

    const ourEntity = await ourEntityType.createEntity(context, ourEntityData);

    await ourEntity.save(context);

    const paramsWeWantToUseWhenInvokingStart: Array<any> = [
      'a first argument',
      'and a second argument'
    ];

    // the invoker will check if we have the rights to call the method on our entity and perform the call or throw an error
    await this.invoker.invoke(ourEntity, 'start', context, ...paramsWeWantToUseWhenInvokingStart);
  }
  
}