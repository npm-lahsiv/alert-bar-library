import {
  Component,
  ElementRef,
  Input,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
export enum AlertMessageTypes {
  Success = 0,
  Info = 1,
  Warning = 2,
  Error = 3,
  Normal = 4,
  Custom = 5,
}

export enum AlertMessageVariants {
  Text = 0,
  Outlined = 1,
  Filled = 2,
}

export interface AlertMessage {
  alertType: AlertMessageTypes;
  alertMessage: string | TemplateRef<any>;
}

export const OF_TRANSLATIONS: Record<string, string> = {
  en: 'of',
  es: 'de',
  fr: 'de',
  de: 'von',
};

@Component({
  selector: 'lib-ang-alert-bar',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './ang-alert-bar.component.html',
  styleUrl: './ang-alert-bar.component.scss',
})
export class AngAlertBarComponent {
  public messageClass: string | undefined;
  public currentIndex = 0;
  public disableLeftArrow = false;
  public disableRightArrow = false;
  public AlertMessageTypes = AlertMessageTypes;
  public AlertMessageVariants = AlertMessageVariants;
  @Input() truncateTextOverflow = true;
  @Input() variant: AlertMessageVariants = AlertMessageVariants.Text;
  @Input() severityIcon = true;
  @Input() closeIcon = true;
  @Input() paginated = true;
  public pagination = true;

  @ViewChild('leftArrow')
  public leftArrow!: ElementRef;

  @ViewChild('rightArrow')
  public rightArrow!: ElementRef;

  @Input() messages: Array<AlertMessage> = [];

  public message!: AlertMessage;

  ngOnInit() {
    this.message = this.messages[0];
    this.updateMessage();

    if (this.messages.length > 1) {
      this.pagination = true;
      this.updateArrows();
    } else {
      this.pagination = false;
    }
  }

  public showPrev(): void {
    if (this.messages.length > 1 && this.currentIndex > 0) {
      this.currentIndex--;
      this.updateMessage();
      this.updateArrows();
    }
  }

  public showNext(): void {
    if (
      this.messages.length > 1 &&
      this.currentIndex < this.messages.length - 1
    ) {
      this.currentIndex++;
      this.updateMessage();
      this.updateArrows();
    }
  }

  public updateArrows(): void {
    this.disableLeftArrow = this.currentIndex === 0;
    this.disableRightArrow = this.currentIndex === this.messages.length - 1;
  }

  public updateMessage(): void {
    this.message = this.messages[this.currentIndex];
    this.messageClass = this.GetMessageClass(this.message.alertType);
  }

  public GetMessageClass(alertType: AlertMessageTypes): string {
    switch (alertType) {
      case AlertMessageTypes.Success:
        return 'alert-bar-success';
      case AlertMessageTypes.Warning:
        return 'alert-bar-warning';
      case AlertMessageTypes.Error:
        return 'alert-bar-error';
      case AlertMessageTypes.Info:
      default:
        return 'alert-bar-info';
    }
  }

  public getMessageType(message: any): message is TemplateRef<any> {
    return message instanceof TemplateRef;
  }

  getOfText(): string {
    const lang = navigator.language?.split('-')[0] || 'en';
    return OF_TRANSLATIONS[lang] || OF_TRANSLATIONS['en'];
  }
}

/**.
 *
 * icons - close icon
 * customization - custom icon
 * template - support for html
 * localization - word of
 * dark mode -
 * publish to npm -
 */
