import Trading from "../models/Trading";
import TradingList from "../models/TradingList";
import TradingView from "../views/TradingView";
import MessageView from "../views/MessageView";

class TradingController {
  constructor() {
    const $ = document.querySelector.bind(document);

    this._inputAmount = $("#amount");
    this._inputDate = $("#date");
    this._inputValue = $("#value");

    this._tradingList = new TradingList();
    this._tradingView = new TradingView($("#trading-view"));
    this._messageView = new MessageView($("#message-view"));
    this._tradingView.render(this._tradingList.list);
  }

  add(event) {
    event.preventDefault();

    const trading = new Trading({
      amount: this._inputAmount.value,
      date: new Date(this._inputDate.value.split("-")),
      value: this._inputValue.value
    });

    this._tradingList.add(trading);
    this._tradingView.render(this._tradingList.list);
    this._messageView.render("Trade has been added");

    this._cleanForm();
  }

  _cleanForm() {
    this._inputAmount.value = 1;
    this._inputDate.value = "";
    this._inputValue.value = 0;

    this._inputValue.focus();
  }
}

export default TradingController;
