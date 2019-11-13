import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-settings',
  templateUrl: './general-settings.component.html',
  styleUrls: ['./general-settings.component.scss']
})
export class GeneralSettingsComponent implements OnInit {
  taxOptions= [
    {
      value:'enable',
      viewValue: 'enable'
    },
    {
      value:'disable',
      viewValue: 'disable'
    }
  ]
  invoiceVatOptions = [
    {
      value:'enable',
      viewValue:'enable'
    },
    {
      value:'disable',
      viewValue:'disable'
    },
  ]
  vatRateOptions = [
    {
      value:'0',
      viewValue:'Zero Percent(0%)'
    },
    {
      value:'5',
      viewValue:'Five Percent(5%)'
    },
  ]
  supplierStatusOption = [
    {
      value:'enable',
      viewValue:'disable'
    },
    {
      value:'disable',
      viewValue:'disable'
    },
  ]
  customerStatusOption = [
    {
      value:'enable',
      viewValue:'disable'
    },
    {
      value:'disable',
      viewValue:'disable'
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
