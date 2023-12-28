class ItemObject {
  constructor(listTitle = "", product = "", qty = "", qtyType ='') {
    this.listTitle = listTitle;
    this.product = product;
    this.qty = qty;
    this.qtyType = qtyType

    const now = new Date();
    this.cDate = {
      hours: now.getHours(),
      minutes: now.getMinutes(),
      timestamp: now.getTime(), // Convert to timestamp
    };
  }
}

export default ItemObject;
