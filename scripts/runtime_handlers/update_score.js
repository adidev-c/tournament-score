export function change_score(teamaScore,teambScore){
    const teama_score=document.getElementById('teamA-score')
    const teamb_score=document.getElementById('teamB-score')

    teama_score.innerText = teamaScore
    teamb_score.innerText = teambScore
}