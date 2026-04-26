$(document).ready(function () {
  $('.smooth-link').on('click', function (event) {
    const target = $(this.getAttribute('href'));

    if (target.length) {
      event.preventDefault();
      $('html, body').animate(
        {
          scrollTop: target.offset().top - 76
        },
        600
      );
    }
  });

  $('.feature-card, .plan-card').hover(
    function () {
      $(this).css('transform', 'translateY(-6px)');
      $(this).css('transition', '0.25s');
    },
    function () {
      $(this).css('transform', 'translateY(0)');
    }
  );

  $('#phone').on('input', function () {
    this.value = this.value.replace(/[^0-9]/g, '').slice(0, 10);
  });
});

let miniMinutes = 9;
let miniSeconds = 0;

setInterval(function () {
  const timer = document.getElementById('miniTimer');

  if (!timer) return;

  if (miniSeconds === 0) {
    if (miniMinutes === 0) return;
    miniMinutes--;
    miniSeconds = 59;
  } else {
    miniSeconds--;
  }

  timer.textContent =
    miniMinutes + ':' + (miniSeconds < 10 ? '0' : '') + miniSeconds;
}, 1000);

const targetTime = new Date().getTime() + 24 * 60 * 60 * 1000;

setInterval(function () {
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  const now = new Date().getTime();
  const distance = targetTime - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor(
    (distance % (1000 * 60 * 60)) / (1000 * 60)
  );
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysEl.textContent = String(days).padStart(2, '0');
  hoursEl.textContent = String(hours).padStart(2, '0');
  minutesEl.textContent = String(minutes).padStart(2, '0');
  secondsEl.textContent = String(seconds).padStart(2, '0');
}, 1000);