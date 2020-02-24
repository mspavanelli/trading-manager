import View from "./View";

class MessageView extends View {
  constructor(element) {
    super(element);
  }

  _template(message) {
    return `<div class="alert alert-success" role="alert">${message}</div>`;
  }
}

export default MessageView;
