import {Entity} from '@process-engine-js/data_model_contracts';

export interface IReservationEntityTypeService {
  createReservation(context, token): Promise<any>;
}

export interface IReservationEntity extends Entity {
  name: string;
  category: string;
  isOneWay: boolean;
  navigationSystem: boolean;
  additionalDriver: boolean;
  price: number;
}

export {SentMessageInfo} from 'nodemailer';
import {SentMessageInfo} from 'nodemailer';

export interface IMailService {
  send(from: string, to: string, subject: string, message: string): Promise<SentMessageInfo>
}

export interface IShellService {
  execute(context, command): Promise<any>;
}
