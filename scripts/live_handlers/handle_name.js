import { change_name } from '../runtime_handlers/update_name.js'
export function handle_name(snapshot){
    const data=snapshot.val();
    change_name(data.teama.name,data.teamb.name)
}