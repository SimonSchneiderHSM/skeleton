export class ClientExtension {

  constructor(datastoreService, iamService, mainApp, processEngineService, datastoreMessageBus, messageBusExternalService) {
    this._datastoreService = datastoreService;
    this._iamService = iamService;
    this._mainApp = mainApp;
    this._processEngineService = processEngineService;
    this._datastoreMessageBus = datastoreMessageBus;
    this._messageBusExternalService = messageBusExternalService;
  }

  get messageBusExternalService() {
    return this._messageBusExternalService;
  }

  get datastoreMessageBus() {
    return this._datastoreMessageBus;
  }

  get datastoreService() {
    return this._datastoreService;
  }

  get iamService() {
    return this._iamService;
  }

  get mainApp() {
    return this._mainApp;
  }

  get processEngineService() {
    return this._processEngineService;
  }

  async initialize() {
    await this.datastoreService.initialize();
    await this.processEngineService.initialize();
    await this.messageBusExternalService.initialize();
    await this.datastoreMessageBus.initialize();
    await this.iamService.initialize();

    this.mainApp.initialize();
  }

  start() {
    this.mainApp.start();
  }
}
