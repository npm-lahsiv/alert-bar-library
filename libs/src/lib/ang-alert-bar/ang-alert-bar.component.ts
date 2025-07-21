import {
  Component,
  computed,
  input,
  linkedSignal,
  signal,
  TemplateRef,
} from "@angular/core";
import { NgTemplateOutlet } from "@angular/common";
import { AlertMessageTypes } from "../enums/AlertMessageTypes";
import { AlertMessageVariants } from "../enums/AlertMessageVariants";
import { AlertMessage } from "../contracts/AlertMessage";
import { OF_TRANSLATIONS } from "../i18n/translate";
import { SuccessIconComponent } from "../icons/success.icon";
import { ErrorIconComponent } from "../icons/error.icon";
import { WarningIconComponent } from "../icons/warning.icon";
import { InfoIconComponent } from "../icons/info.icon";
import { CloseIconComponent } from "../icons/close.icon";

@Component({
  selector: "lib-ang-alert-bar",
  imports: [
    NgTemplateOutlet,
    SuccessIconComponent,
    ErrorIconComponent,
    WarningIconComponent,
    InfoIconComponent,
    CloseIconComponent,
  ],
  templateUrl: "./ang-alert-bar.component.html",
  styleUrl: "./ang-alert-bar.component.scss",
})
export class AngAlertBarComponent {
  AlertMessageTypes = AlertMessageTypes;
  AlertMessageVariants = AlertMessageVariants;

  /* Input Signals */
  messages = input.required<Array<AlertMessage>>();

  variant = input<AlertMessageVariants>(AlertMessageVariants.Text);
  truncateTextOverflow = input(true);
  severityIcon = input(true);
  closeIcon = input(false);
  paginated = input(false);

  /* Linked Signals */
  message = linkedSignal(() => this.messages()[0]);

  /* Writable Signals */
  currentIndex = signal(0);

  /* Computed Signals */
  messageLength = computed(() => this.messages().length);
  messageClass = computed(() => this.getMessageClass(this.message().alertType));
  disableLeftArrow = computed(() => this.currentIndex() === 0);
  disableRightArrow = computed(
    () => this.currentIndex() === this.messageLength() - 1
  );
  pagination = computed(() => this.messageLength() > 1);

  showPrev(): void {
    if (this.messageLength() > 1 && this.currentIndex() > 0) {
      this.currentIndex.update((n) => n - 1);
      this.updateMessage();
    }
  }

  showNext(): void {
    if (
      this.messageLength() > 1 &&
      this.currentIndex() < this.messageLength() - 1
    ) {
      this.currentIndex.update((n) => n + 1);
      this.updateMessage();
    }
  }

  updateMessage(): void {
    this.message.set(this.messages()[this.currentIndex()]);
  }

  getMessageClass(alertType: AlertMessageTypes): string {
    switch (alertType) {
      case AlertMessageTypes.Success:
        return "alert-bar-success";
      case AlertMessageTypes.Warning:
        return "alert-bar-warning";
      case AlertMessageTypes.Error:
        return "alert-bar-error";
      case AlertMessageTypes.Info:
        return "alert-bar-info";
      default:
        // eslint-disable-next-line no-case-declarations
        const _exhaustiveCheck: never = alertType;
        return _exhaustiveCheck;
    }
  }

  getMessageType(message: any): message is TemplateRef<any> {
    return message instanceof TemplateRef;
  }

  getMessageTemplateRef(message: AlertMessage): TemplateRef<any> {
    return message.alertMessage as TemplateRef<any>;
  }

  getOfText(): string {
    const lang = navigator.language?.split("-")[0] || "en";
    return OF_TRANSLATIONS[lang] || OF_TRANSLATIONS["en"];
  }
}
