import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "lib-close-icon, close-icon",
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
      }

      :host-context(.filled) svg {
        color: white;
      }
    `,
  ],
  template: `
    <svg
      focusable="false"
      viewBox="0 -64 1024 960"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M822.857 179.2c14.629-14.629 14.629-36.571 0-51.2s-36.571-14.629-51.2 0l-259.657 259.657-259.657-259.657c-14.629-14.629-36.571-14.629-51.2 0s-14.629 36.571 0 51.2l259.657 259.657-259.657 259.657c-14.629 14.629-14.629 36.571 0 51.2s36.571 14.629 51.2 0l259.657-259.657 259.657 259.657c14.629 14.629 36.571 14.629 51.2 0s14.629-36.571 0-51.2l-259.657-259.657 259.657-259.657z"
        fill="currentColor"
      ></path>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CloseIconComponent {}
