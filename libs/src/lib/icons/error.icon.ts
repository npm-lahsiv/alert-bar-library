import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "lib-error-icon",
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
        .error__svg {
          color: #bd432d;
        }
      }

      :host-context(.filled) .error__svg {
        color: white;
      }
    `,
  ],
  template: `
    <svg
      focusable="false"
      viewBox="0 -64 1024 960"
      xmlns="http://www.w3.org/2000/svg"
      class="error__svg"
    >
      <path
        d="M512 877.714c-241.371 0-438.857-197.486-438.857-438.857s197.486-438.857 438.857-438.857 438.857 197.486 438.857 438.857-197.486 438.857-438.857 438.857zM512 73.143c-201.143 0-365.714 164.571-365.714 365.714s164.571 365.714 365.714 365.714 365.714-164.571 365.714-365.714-164.571-365.714-365.714-365.714zM563.2 438.857l128 128c7.314 7.314 10.971 18.286 10.971 25.6 0 10.971-3.657 18.286-10.971 25.6-14.629 14.629-36.571 14.629-51.2 0l-128-128-128 131.657c-7.314 3.657-18.286 7.314-25.6 7.314-10.971 0-21.943-3.657-29.257-7.314-14.629-14.629-14.629-36.571 0-51.2l128-128-128-131.657c-7.314-7.314-10.971-18.286-10.971-25.6 0-10.971 3.657-18.286 10.971-25.6 14.629-14.629 36.571-14.629 51.2 0l128 128 128-128c7.314-7.314 18.286-10.971 25.6-10.971 10.971 0 18.286 3.657 25.6 10.971 14.629 14.629 14.629 36.571 0 51.2l-124.343 128z"
        fill="currentColor"
      ></path>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorIconComponent {}
