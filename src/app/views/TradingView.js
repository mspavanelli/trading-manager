import View from "./View.js";
import { formattedDate } from "../helpers/date-helper";

class TradingView extends View {
  constructor(element) {
    super(element);
  }

  _template(tradings) {
    return `<table class="table table-hover table-bordered">
      <thead>
        <tr>
          <th>Date</th>
          <th>Amount</th>
          <th>Value</th>
          <th>Volume</th>
        </tr>
      </thead>

      <tbody>${tradings
        .map(
          trading =>
            `
        <tr>
          <td>${formattedDate(new Date(trading.date))}</td>
          <td>${trading.amount}</td>
          <td>${trading.value}</td>
          <td>${trading.volume}</td>
        </tr>
        `
        )
        .join("")}</tbody>

      <tfoot>
        <td colspan="3"><strong>Total</strong></td>
        <td>${tradings.reduce((total, trading) => total + trading.volume, 0)}</td>
      </tfoot>
    </table>`;
  }
}

export default TradingView;
