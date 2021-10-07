export default class CountdownTimer {
  constructor({ selector, targetDate }) {
    this._selectorEL = document.querySelector(selector);
    this._daysEL = this._selectorEL.querySelector('[data-value="days"]');
    this._hoursEL = this._selectorEL.querySelector('[data-value=hours]');
    this._minsEL = this._selectorEL.querySelector('[data-value=mins]');
    this._secsEL = this._selectorEL.querySelector('[data-value=secs]');
    this._time = targetDate;
    this._intervalId = null;
    this._deltaTime = 0;
  }

  start() {
    this._intervalId = setInterval(() => {
      let currentTime = Date.now();
      this._deltaTime = this._time - currentTime;

      const days = this.pad(
        Math.floor(this._deltaTime / (1000 * 60 * 60 * 24)),
      );
      const hours = this.pad(
        Math.floor(
          (this._deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
      );
      const mins = this.pad(
        Math.floor((this._deltaTime % (1000 * 60 * 60)) / (1000 * 60)),
      );
      const secs = this.pad(Math.floor((this._deltaTime % (1000 * 60)) / 1000));

      this.insertValues(days, hours, mins, secs);
    }, 1000);
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }

  insertValues(days, hours, mins, secs) {
    this._daysEL.textContent = days;
    this._hoursEL.textContent = hours;
    this._minsEL.textContent = mins;
    this._secsEL.textContent = secs;
  }
}
