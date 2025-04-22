import { handle_name } from './handle_name.js'
import { handle_score} from './handle_score.js'

export function handle_all(snapshot){
    handle_name(snapshot)
    handle_score(snapshot)
}