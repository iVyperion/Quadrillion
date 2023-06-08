import { createScoreElement, fetchScores, fetchScorebyName, fetchRecentScores, postScore, convertSecondsToTime } from './helpers.js'

const table_your_scores = document.querySelector('#your_scores');
const table_top_players = document.querySelector('#top_players');
const table_recent_scores = document.querySelector('#recent_scores');

init()
async function init() {
    fetchRecentScores().then((scores) => {
        let count = 1;
        if (scores === undefined || scores.scores.length === 0) {
            let tr = document.createElement('tr');
            tr.className = 'empty-row';
            let td = document.createElement('td');
            td.colSpan = 3;
            td.innerHTML = 'No data found';
            tr.appendChild(td);
            table_recent_scores.appendChild(tr);
        }
        scores.scores.forEach((score) => {
            let el = createScoreElement(count, score.name, convertSecondsToTime(score.time));
            table_recent_scores.appendChild(el);
            count++;
        })
    }).catch((err) => {
        console.error(err);
    })

    let name = localStorage.getItem('name') 
    fetchScorebyName(name).then((scores) => {
        let count = 1;
        console.log()
        if (scores === undefined || scores.scores.length === 0) {
            let tr = document.createElement('tr');
            tr.className = 'empty-row';
            let td = document.createElement('td');
            td.colSpan = 3;
            td.innerHTML = 'No data found: play a game to see your scores';
            tr.appendChild(td);
            table_your_scores.appendChild(tr);
        }
        scores.scores.forEach((score) => {
            let el = createScoreElement(count, score.name, convertSecondsToTime(score.time));
            table_your_scores.appendChild(el);
            count++;
        })
    }).catch((err) => {
        console.error(err);
    })

    fetchScores().then((scores) => {
        let count = 1;
        if (scores === undefined || scores.scores.length === 0) {
            let tr = document.createElement('tr');
            tr.className = 'empty-row';
            let td = document.createElement('td');
            td.colSpan = 3;
            td.innerHTML = 'No data found';
            tr.appendChild(td);
            table_top_players.appendChild(tr);
        }
        scores.scores.forEach((score) => {
            let el = createScoreElement(count, score.name, convertSecondsToTime(score.time));
            table_top_players.appendChild(el);
            count++;
        })
    }).catch((err) => {
        console.error(err);
    })


}

