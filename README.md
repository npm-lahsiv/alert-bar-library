# Angular Alert Bar

<p align="center">
  <a href="https://github.com/npm-lahsiv/alert-bar-library">
    <img width="550" height="200" src="https://i.sstatic.net/TObFVaJj.png">
  </a>
  
  <br>
  <br>

  <a href="https://www.npmjs.com/package/ang-alert-bar">
    <img src="https://img.shields.io/npm/dm/ang-alert-bar.svg?style=flat" alt="downloads">
  </a>
 
  <a href="https://badge.fury.io/for/js/ang-alert-bar">
    <img src="https://badge.fury.io/js/ang-alert-bar.svg" alt="npm version" height="18">
  </a>

  <a href="https://img.shields.io/npm/l/ang-alert-bar">
    <img src="https://img.shields.io/npm/l/ang-alert-bar.svg" alt="npm version" height="18">
  </a>

</p>

- Display contextual messages (success, info, warning, error) with clean, accessible styles that match modern web apps.
- Just plug-and-play with simple Angular inputs—customize appearance, overflow, and alert variants (filled, outlined, text) to suit your needs.
- Includes SVG icons, full ARIA support, theming options, and responsive design for consistent user feedback across all devices.
- Works seamlessly in any Angular project (standalone or monorepo) with minimal dependencies.

## Examples/Demo

Live Demo [Example](https://stackblitz.com/)

Severities

![ang-alert-bar](https://i.sstatic.net/3Jo4AmlD.png)

Paginated

![ang-alert-bar](https://i.sstatic.net/V0OzJo9t.png)

Filled

![ang-alert-bar](https://i.sstatic.net/pzBrGvOf.png)

Outlined

![ang-alert-bar](https://i.sstatic.net/XxKu0Fcg.png)

Custom Template

![ang-alert-bar](https://i.sstatic.net/nuFQBXXP.png)

## Installation

`npm i ang-alert-bar`

## API

`import { AngAlertBarComponent } from 'ang-alert-bar'`<br>
`selector: lib-ang-alert-bar`

### @Inputs()

| Input                | Type                 | Required                 | Description                                  |
| -------------------- | -------------------- | ------------------------ | -------------------------------------------- |
| messages             | AlertMessage[]       | **YES**                  | array of AlertMessage .                      |
| paginated            | boolean              | Optional, default: false | enable pagination                            |
| truncateTextOverflow | boolean              | Optional, default: true  | message will be truncated to fit in one line |
| variant              | AlertMessageVariants | Optional, default: Text  | variant style - Text, Filled or Outlined     |
| severityIcon         | boolean              | Optional, default: true  | show severity icon                           |
| closeIcon            | boolean              | Optional, default: true  | show close icon                              |

## Types

1. Model - AlertMessage

```typescript
alertType: AlertMessageTypes;
alertMessage: string | TemplateRef<any>;
```

2. Enum - AlertMessageVariants

```typescript
  Text,
  Outlined,
  Filled,
```

3. Enum - AlertMessageTypes

```typescript
  Success,
  Info,
  Warning,
  Error,
```

## Usage

- Use of component via selector 'ang-alert-bar'.

```typescript
@Component({
  imports: [AngAlertBarComponent],
  selector: "app-root",
  template: `<lib-ang-alert-bar
      [messages]="messages1"
      [paginated]="paginated"
      [truncateTextOverflow]="truncateTextOverflow"
      [variant]="variant"
      [closeIcon]="closeIcon"
      [severityIcon]="severityIcon"
    >
    </lib-ang-alert-bar>

    <h3>Custom Template</h3>

    <lib-ang-alert-bar
      [messages]="message2"
      [paginated]="false"
      [truncateTextOverflow]="false"
    >
    </lib-ang-alert-bar>

    <ng-template #customTpl let-data>
      <div class="content">
        <div class="title">Merged pull request</div>
        <div class="description">
          Pull request #41 merged after a successful build
        </div>
        <div class="actions">
          <a>View commit</a>
          <a>Dismiss</a>
        </div>
      </div>
    </ng-template>`,
  styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {
  customTpl = viewChild.required<TemplateRef<any>>("customTpl");

  messages1: AlertMessage[] = [
    {
      alertType: AlertMessageTypes.Info,
      alertMessage: "Please read the comments carefully",
    },
    {
      alertType: AlertMessageTypes.Success,
      alertMessage: "Your message has been sent successfully",
    },
    {
      alertType: AlertMessageTypes.Warning,
      alertMessage: "There was a problem with your network connection",
    },
    {
      alertType: AlertMessageTypes.Error,
      alertMessage: "A problem occurred while submitting your data",
    },
  ];

  message2: AlertMessage[] = [];

  AlertMessageVariants = AlertMessageVariants;
  truncateTextOverflow = true;
  paginated = false;
  severityIcon = true;
  closeIcon = true;
  variant: AlertMessageVariants = AlertMessageVariants.Text;

  ngOnInit() {
    this.message2 = [
      {
        alertType: AlertMessageTypes.Success,
        alertMessage: this.customTpl(),
      },
    ];
  }
}
```

## License

[MIT](https://tldrlegal.com/license/mit-license) © [lahsiv](https://github.com/npm-lahsiv/alert-bar-library)

**Thanks for Installing**

> Contact me for any suggestion/issues -> hasnanivishal@gmail.com

## Commands

```
npm login
npm publish --access public
npm dist-tag add ang-alert-bar@1.0.2 ng17
```

## Migrations

[Nx and Angular Versions](https://nx.dev/technologies/angular/recipes/angular-nx-version-matrix)

commands

```
npx nx migrate 20.5.0
npx nx migrate --run-migrations
```
