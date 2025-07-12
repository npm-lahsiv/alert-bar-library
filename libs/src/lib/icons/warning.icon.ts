import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "lib-warning-icon",
  standalone: true,
  styles: [
    `
      :host {
        svg {
          display: inline-flex;
          height: 20px;
          width: 20px;
          transform: scaleY(-1);
        }
        .warning__svg {
          color: #cf8a23;
        }
      }

      :host-context(.filled) .warning__svg {
        color: white;
      }
    `,
  ],
  template: `
    <svg
      focusable="false"
      viewBox="0 -64 1024 960"
      xmlns="http://www.w3.org/2000/svg"
      class="warning__svg"
    >
      <path
        d="M943.543 106.057l-365.714 731.429c-25.6 54.857-102.4 54.857-131.657 0l-365.714-731.429c-25.6-47.543 10.971-106.057 65.829-106.057h731.429c54.857 0 91.429 58.514 65.829 106.057zM512 621.714c25.6 0 43.886-25.6 43.886-58.514l-18.286-241.371c0-18.286-10.971-29.257-25.6-29.257s-25.6 10.971-25.6 29.257l-18.286 241.371c0 32.914 18.286 58.514 43.886 58.514zM512 146.286c-29.257 0-54.857 25.6-54.857 54.857s25.6 54.857 54.857 54.857 54.857-25.6 54.857-54.857-25.6-54.857-54.857-54.857z"
        fill="currentColor"
      ></path>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WarningIconComponent {}
