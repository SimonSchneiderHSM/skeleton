import * as bluebirdPromise from 'bluebird';

export class PriceCalculation {

  public async calculatePrice(token: any): Promise<any> {
    const category = token.history.ut_WaehleKlasse.category;
    const oneWay = token.history.ut_WaehleKlasse.isOneWay;
    const addDriver = token.history.ut_WaehleExtras ? token.history.ut_WaehleExtras.additionalDriver : false;
    const navi = token.history.ut_WaehleExtras ? token.history.ut_WaehleExtras.navigationSystem : false;
    const leather = token.history.ut_WaehleExtras ? token.history.ut_WaehleExtras.leather : false;
    const chauffeur = token.history.UserTask_Luxus ? token.history.UserTask_Luxus.chauffeur : false;

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
      throw new Error('Fahrzeug ist nicht verfügbar');
    }
    return price;
  }

}
