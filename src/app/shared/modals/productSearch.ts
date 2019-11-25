export class ProductSearch {
    itemCategory: any;
    items: Items[]
}
export class Items {
    icon: any
    name: String
    unitPrice: any
    constructor(data) {
        this.icon = data.icon;
        this.name = data.name;
        this.unitPrice = data.unitPrice;
    }
    
}