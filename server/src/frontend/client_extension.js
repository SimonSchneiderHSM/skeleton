export class ClientExtension {

  constructor(iamService, mainApp, messageBusExternalService) {
    this._mainApp = mainApp;
    this._iamService = iamService;
    this._messageBusExternalService = messageBusExternalService;
  }

  get messageBusExternalService() { 
    return this._messageBusExternalService; 
  }

  get mainApp() {
    return this._mainApp;
  }

  get iamService() { 
    return this._iamService; 
  } 

  async initialize() {
    this.messageBusExternalService.initialize();
    this.iamService.initialize();

    this.mainApp.initialize();
  }

  start() {
    this.mainApp.start();
  }
}
