class View {
  constructor(element) {
    this._element = element;
  }

  render(data) {
    this._element.innerHTML = this._template(data);
  }
}

export default View;
