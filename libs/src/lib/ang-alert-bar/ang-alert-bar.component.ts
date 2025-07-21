import { Component, computed, input, signal, TemplateRef } from "@angular/core";
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
  standalone: true,
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

  /* Writable Signals */
  message = signal<AlertMessage>(this.messages()[0]);
  currentIndex = signal(0);

  /* Computed Signals */
  messageClass = computed(() => this.getMessageClass(this.message().alertType));
  disableLeftArrow = computed(() => this.currentIndex() === 0);
  disableRightArrow = computed(
    () => this.currentIndex() === this.messages.length - 1
  );
  pagination = computed(() => this.messages.length > 1);

  showPrev(): void {
    if (this.messages.length > 1 && this.currentIndex() > 0) {
      this.currentIndex.update((n) => n - 1);
      this.updateMessage();
    }
  }

  showNext(): void {
    if (
      this.messages.length > 1 &&
      this.currentIndex() < this.messages.length - 1
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
      default:
        return "alert-bar-info";
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
