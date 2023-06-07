import { createScoreElement, fetchScores, fetchRecentScores, postScore, convertSecondsToTime } from './helpers.js'

const table_your_scores = document.querySelector('#your_scores');
const table_top_players = document.querySelector('#top_players');
const table_recent_scores = document.querySelector('#recent_scores');

init()
async function init() {
    fetchRecentScores().then((scores) => {
        console.log(scores)
        console.log("test")
        let count = 1;
        scores.scores.forEach((score) => {
            let el = createScoreElement(count, score.name, convertSecondsToTime(score.time));
            table_recent_scores.appendChild(el);
            count++;
        })
    }).catch((err) => {
        console.error(err);
    })

    fetchScores().then((scores) => {
        console.log(scores)
        let count = 1;
        scores.scores.forEach((score) => {
            let el = createScoreElement(count, score.name, convertSecondsToTime(score.time));
            table_top_players.appendChild(el);
            count++;
        })
    }).catch((err) => {
        console.error(err);
    })
    
    
}

