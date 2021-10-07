import CountdownTimer from './cdTimer.js';

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Nov 24, 2021'),
});

timer.start.call(timer);
