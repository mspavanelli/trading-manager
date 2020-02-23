class Trading {
  constructor({ amount, date, value }) {
    this._amount = amount || 1;
    this._date = new Date(date.getTime());
    this._value = value || 0;

    Object.freeze(this);
  }

  get amount() {
    return this._amount;
  }

  get date() {
    return new Date(this._date.getTime());
  }
  get value() {
    return this._value;
  }

  get volume() {
    return this._amount * this._value;
  }
}

export default Trading;
