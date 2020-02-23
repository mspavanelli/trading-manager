class TradingList {
  constructor() {
    this._list = [];
  }

  get list() {
    return [...this._list];
  }

  add(trading) {
    this._list.push(trading);
  }
}

export default TradingList;
