export function update_name(teamaName, teambName) {
    const teama_name = document.getElementById('teamA-name')
    const teamb_name = document.getElementById('teamB-name')

    teama_name.innerText = teamaName
    teamb_name.innerText = teambName
}

export function update_score(teamaScore, teambScore) {
    const teama_score = document.getElementById('teamA-score')
    const teamb_score = document.getElementById('teamB-score')

    teama_score.innerText = teamaScore
    teamb_score.innerText = teambScore
}

export function update_status(status) {
    const status_text = document.getElementById("StatusText")
    status_text.innerText = status;
}

export function addPastMatch(team1Name, team1Score, team2Name, team2Score) {
    const matchDiv = document.createElement('div');
    matchDiv.classList.add('match');

    const span1 = document.createElement('span');
    const span2 = document.createElement('span');

    if (team1Score > team2Score) {
        span1.className = 'winner';
        span2.className = 'loser';
    } else if (team1Score < team2Score) {
        span1.className = 'loser';
        span2.className = 'winner';
    } else {
        span1.className = 'draw';
        span2.className = 'draw';
    }

    span1.textContent = `${team1Name} : ${team1Score}`;
    span2.textContent = `${team2Name} : ${team2Score}`;

    matchDiv.appendChild(span1);
    matchDiv.appendChild(span2);

    document.getElementById('past-matches').appendChild(matchDiv);
}

export function announce_score(text){
    const utter = new SpeechSynthesisUtterance(text);
    utter.pitch = 1;
    utter.rate = 1;
    speechSynthesis.speak(utter);
}