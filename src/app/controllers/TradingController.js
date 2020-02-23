import Trading from "../models/Trading";
import TradingList from "../models/TradingList";

class TradingController {
  constructor() {
    const $ = document.querySelector.bind(document);

    this._inputAmount = $("#amount");
    this._inputDate = $("#date");
    this._inputValue = $("#value");

    this._tradingList = new TradingList();
  }

  add(event) {
    event.preventDefault();

    const trading = new Trading({
      amount: this._inputAmount.value,
      date: new Date(this._inputDate.value.split("-")),
      value: this._inputValue.value
    });

    this._tradingList.add(trading);
    this._cleanForm();

    console.log(this._tradingList);
  }

  _cleanForm() {
    this._inputAmount.value = 1;
    this._inputDate.value = "";
    this._inputValue.value = 0;

    this._inputValue.focus();
  }
}

export default TradingController;
