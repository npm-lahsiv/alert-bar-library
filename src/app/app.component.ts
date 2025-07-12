import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NxWelcomeComponent } from "./nx-welcome.component";
import {
  AlertMessage,
  AlertMessageTypes,
  AlertMessageVariants,
  AngAlertBarComponent,
} from "ang-alert-bar";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component({
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    AngAlertBarComponent,
  ],
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {
  @ViewChild("customTpl", { static: true }) customTpl!: TemplateRef<any>;

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

  public message2: AlertMessage[] = [];

  public AlertMessageVariants = AlertMessageVariants;
  truncateTextOverflow = true;
  paginated = false;
  severityIcon = true;
  closeIcon = true;
  variant: AlertMessageVariants = AlertMessageVariants.Text;

  ngOnInit() {
    this.message2 = [
      {
        alertType: AlertMessageTypes.Success,
        alertMessage: this.customTpl,
      },
    ];
  }
}
