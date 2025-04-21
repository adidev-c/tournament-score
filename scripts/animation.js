function scoreGoal(teamId) {
    const ball = document.getElementById('ball');
    const targetBox = document.getElementById(teamId + '-score');
    const rect = targetBox.getBoundingClientRect();
    const x = rect.left + rect.width / 2 + window.scrollX;
    const y = rect.top + rect.height / 2 + window.scrollY;

    ball.style.setProperty('--target-x', x + 'px');
    ball.style.setProperty('--target-y', y + 'px');
    ball.style.display = 'block';
    ball.style.animation = 'shootBall 1s ease-in-out forwards';

    setTimeout(() => {
      ball.style.display = 'none';
      ball.style.animation = '';

      const scoreEl = document.getElementById(teamId + '-score');
      const currentScore = parseInt(scoreEl.textContent);
      scoreEl.textContent = currentScore + 1;
    }, 1000);
  }

  // For testing: press keys A or B to score
  document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'a') scoreGoal('teamA');
    if (e.key.toLowerCase() === 'b') scoreGoal('teamB');
  });
  