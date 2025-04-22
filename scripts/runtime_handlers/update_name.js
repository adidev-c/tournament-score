export function change_name(teamaName,teambName){
    const teama_name=document.getElementById('teamA-name')
    const teamb_name=document.getElementById('teamB-name')

    teama_name.innerText = JSON.parse(teamaName)
    teamb_name.innerText = JSON.parse(teambName)
}