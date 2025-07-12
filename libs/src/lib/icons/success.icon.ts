import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "lib-success-icon",
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
        .success__svg {
          color: #4f9e70;
        }
      }

      :host-context(.filled) .success__svg {
        color: white;
      }
    `,
  ],
  template: `
    <svg
      viewBox="0 -64 1024 960"
      xmlns="http://www.w3.org/2000/svg"
      class="success__svg"
    >
      <path
        d="M512 877.714c-241.371 0-438.857-197.486-438.857-438.857s197.486-438.857 438.857-438.857 438.857 197.486 438.857 438.857-197.486 438.857-438.857 438.857zM789.943 544.914l-296.229-296.229c-29.257-29.257-73.143-29.257-102.4 0l-153.6 153.6c-21.943 21.943-21.943 54.857 0 76.8 10.971 10.971 25.6 14.629 40.229 14.629s29.257-3.657 40.229-14.629l124.343-128 270.629 270.629c18.286 21.943 54.857 21.943 76.8 0s21.943-54.857 0-76.8z"
        fill="currentColor"
      ></path>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SuccessIconComponent {}
