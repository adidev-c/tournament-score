export function update_name(teamaName,teambName){
    const teama_name=document.getElementById('teamA-name')
    const teamb_name=document.getElementById('teamB-name')

    teama_name.innerText = teamaName
    teamb_name.innerText = teambName
}

export function update_score(teamaScore,teambScore){
    const teama_score=document.getElementById('teamA-score')
    const teamb_score=document.getElementById('teamB-score')

    teama_score.innerText = parseInt(teamaScore)
    teamb_score.innerText = parseInt(teambScore)
}

export function update_status(status){
    const status_text=document.getElementById("StatusText")
    status_text.innerText = status;
}