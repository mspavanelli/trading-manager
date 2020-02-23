import Trading from "../models/Trading";
import { format } from "date-fns";

class TradingController {
  constructor() {
    const $ = document.querySelector.bind(document);

    this._inputAmount = $("#amount");
    this._inputDate = $("#date");
    this._inputValue = $("#value");
  }
  add(event) {
    event.preventDefault();

    const trading = new Trading({
      amount: this._inputAmount.value,
      date: new Date(this._inputDate.value.split("-")),
      value: this._inputValue.value
    });

    console.log(format(trading.date, "dd/MM/yyyy"));
  }
}

export default TradingController;
