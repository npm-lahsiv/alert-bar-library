import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "lib-info-icon",
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
        .info__svg {
          color: #3884ff;
        }
      }

      :host-context(.filled) .info__svg {
        color: white;
      }
    `,
  ],
  template: `
    <svg
      focusable="false"
      viewBox="0 -64 1024 960"
      xmlns="http://www.w3.org/2000/svg"
      class="info__svg"
    >
      <path
        d="M510.647 566.747v0c-29.477 0-53.358 23.881-53.358 53.358s23.881 53.358 53.358 53.358c29.477 0 53.358-23.881 53.358-53.358s-23.881-53.358-53.358-53.358zM512 241.371c-24.137 0-43.886 19.749-43.886 43.886v175.543c0 24.137 19.749 43.886 43.886 43.886s43.886-19.749 43.886-43.886v-175.543c0-24.137-19.749-43.886-43.886-43.886zM512 899.657c-242.249 0-438.857-196.608-438.857-438.857s196.608-438.857 438.857-438.857 438.857 196.608 438.857 438.857c0 242.249-196.608 438.857-438.857 438.857z"
        fill="currentColor"
      ></path>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoIconComponent {}
