import {
    update_name,
    update_status,
    update_score,
} from './updater.js'
export function handle_game(snapshot) {
    handle_name(snapshot)//calling     console.log("updating status")self handle function
    handle_score(snapshot)
}

export function handle_name(snapshot) {
    const data = snapshot.val();
    update_name(
        data.teama.name,
        data.teamb.name
    )
}

export function handle_score(snapshot) {
    const data = snapshot.val();
    update_score(
        parseInt(data.teama.score), 
        parseInt(data.teamb.score)
    )
}

export function handle_status(snapshot) {
    const data = snapshot.val();
    update_status(
        data
    )
}
