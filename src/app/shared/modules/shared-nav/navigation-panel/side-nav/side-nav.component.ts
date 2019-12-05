import { Component, OnInit } from '@angular/core';
import { faBoxes, faDollarSign, faShoppingCart, faUsers, faTag, faTags, faTh, faHandHoldingUsd, faMoneyBill, faIndustry, faChartPie, faCogs, faFileArchive, faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  visibleState = false;
  iconPack = {
    tag: faTag
  }
  siglePageRoutes = [
    {
      icon: faTh,
      routeName: 'Home',
      route: ['/','admin','dashboard','home']
    } 
  ]
  reportRoute  = {
    icon: faChartPie,
      routeName: 'Report',
      route: ['/','admin','report','reportDashboard']
  }
  routesSideNav = [
    {
      header: 'Products',
      icon: faBoxes,
      routes : [
        {
          route: ['/','admin','product','productList'],
          routeName: 'Product List'
        },
        {
          route: ['/','admin','product','productList','newProduct'],
          routeName: 'New Product'
        },
        {
          route: ['/','admin','product','productList','barcode'],
          routeName: 'Print BarCode'
        },
        {
          routeName: 'Category',
          route: ['/','admin','product','productList','category']
        },
        {
          routeName: 'Sub Category',
          route: ['/','admin','product','productList','subcategory']
        },
        {
          route: ['/','admin','product','productList','supplier'],
          routeName: 'Supplier'
        },
      ]
    },
    {
      header: 'Purchase',
      icon: faHandHoldingUsd,
      routes: [
        {
          route: ['/','admin','purchase','purchaseList'],
          routeName: 'Purchase List'
        },
        {
          route: ['/','admin','purchase','purchaseList','newPurchase'],
          routeName: 'Create New Purchase'
        },
        {
          route: ['/','admin','purchase','purchaseList','newPurchase'],
          routeName: 'Purchase Report'
        }
      ]
    },
    {
      header: 'Sales',
      icon: faShoppingCart,
      routes: [
        {
          route: ['/','admin','sales','salesList'],
          routeName: 'SalesRegister'
        },
        {
          route: ['/','admin','sales','salesList','newSale'],
          routeName: 'Create New Sale'
        },
        {
          route: ['/','admin','pos','screen'],
          routeName: 'POS Screen'
        },
        {
          route: ['/','admin','pos','screen'],
          routeName: 'Sales Report'
        },
      ]
    },
    {
      header: 'Accounts',
      icon: faFileInvoiceDollar,
      routes: [
        {
          routeName: 'Customer Ledger',
          route: ['/','admin','transaction','transactionList']
        },
        {
          routeName: 'Supplier Ledger',
          route: ['/','admin','transaction','transactionList']
        },
        {
          routeName: 'Voucher',
          route: ['/','admin','transaction','transactionList']
        },
        {
          routeName: 'Transaction',
          route: ['/','admin','transaction','transactionList']
        },
        {
          routeName: 'Expense',
          route: ['/','admin','expense','expenseList']
        },
        {
          routeName: 'Profit and Loss',
          route: ['/','admin','transaction','transactionList']
        },
      ]
    },
    
    
    // {
    //   header: 'People',
    //   icon: faUsers,
    //   routes: [
    //     {
    //       route: ['/','admin','people','peopleType'],
    //       routeName: 'Customer'
    //     },
        

    //   ]
    // },
    {
      header: 'Settings',
      icon: faCogs,
      routes: [
        {
          route: ['/','admin','settings','generalSettings'],
          routeName: 'General Settings'
        },
        {
          route: ['/','admin','people','peopleType','user'],
          routeName: 'User'
        },
        {
          icon: faIndustry,
          routeName: 'Branch',
          route: ['/','admin','branch','branchList']
        },
      ]
    }
  ]
  constructor() { }

  ngOnInit() {
  }
  visibleStateToggler() {
    this.visibleState = !this.visibleState;
  }
}
