import { TemplateRef } from '@angular/core';
import { AlertMessageTypes } from '../enums/AlertMessageTypes';

export interface AlertMessage {
  alertType: AlertMessageTypes;
  alertMessage: string | TemplateRef<any>;
}
