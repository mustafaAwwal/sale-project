import { Component, OnInit } from '@angular/core';
import { faBoxes, faDollarSign, faShoppingCart, faUsers, faTag, faTags, faTh, faHandHoldingUsd, faMoneyBill, faIndustry, faChartPie } from '@fortawesome/free-solid-svg-icons';

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
    },
    {
      icon: faTag,
      routeName: 'Category',
      route: ['/','admin','category','categoryList']
    },
    {
      icon: faTags,
      routeName: 'Sub Category',
      route: ['/','admin','subCategory','subCategoryList']
    },
    {
      icon: faMoneyBill,
      routeName: 'Transaction',
      route: ['/','admin','transaction','transactionList']
    },
    {
      icon: faDollarSign,
      routeName: 'Expense',
      route: ['/','admin','expense','expenseList']
    },
    {
      icon: faIndustry,
      routeName: 'Branch',
      route: ['/','admin','branch','branchList']
    },
    {
      icon: faChartPie,
      routeName: 'Report',
      route: ['/','admin','report','reportDashboard']
    }
  ]
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
        }
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
        }
      ]
    },
    {
      header: 'People',
      icon: faUsers,
      routes: [
        {
          route: ['/','admin','people','peopleType'],
          routeName: 'Customer'
        },
        {
          route: ['/','admin','people','peopleType','supplier'],
          routeName: 'Supplier'
        },
        {
          route: ['/','admin','people','peopleType','user'],
          routeName: 'User'
        }
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
