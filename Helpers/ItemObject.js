class ItemObject {
  constructor(listTitle = "", product = "", qty = "") {
    this.listTitle = listTitle;
    this.product = product;
    this.qty = qty;

    const now = new Date();
    this.cDate = {
      hours: now.getHours(),
      minutes: now.getMinutes(),
      timestamp: now.getTime(), // Convert to timestamp
    };
  }
}

export default ItemObject;
