import { change_score } from '../runtime_handlers/update_score.js'
export function handle_score(snapshot){
    const data=snapshot.val();
    console.log(data)
    change_score(data.teama.score,data.teamb.score)
}