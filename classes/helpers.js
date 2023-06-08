export const createScoreElement = function (nr, name, time) {
    let container = document.createElement('tr')
    let nrEl = document.createElement('td')
    nrEl.innerHTML = nr
    let nameEl = document.createElement('td')
    nameEl.innerHTML = name
    let timeEl = document.createElement('td')
    timeEl.innerHTML = time

    container.appendChild(nrEl)
    container.appendChild(nameEl)
    container.appendChild(timeEl)
    return container
}
export const fetchScores = async function () {
    return fetch('http://localhost:3000/scores/')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json()
        })
        .catch(err => {
            console.log(err)
        })
}
export const fetchRecentScores = async function () {
    return fetch('http://localhost:3000/scores/recent')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json()
        })
        .catch(err => {
            console.log(err)
        })
}
export const fetchScorebyName = async function (name) {
    return fetch(`http://localhost:3000/scores/${name}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json()
        })
        .catch(err => {
            console.log(err)
        })
}
export const postScore = async function (name, time) {
    let body = {
        name: name,
        time: time
    }
    console.log(body)
    return fetch(`http://localhost:3000/scores/`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: new Headers({
            'Content-Type': 'application/json',
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json()
        })
        .catch(err => {
            console.log(err)
        })
}
export const convertSecondsToTime = function (seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    let result = remainingSeconds == 0 ? `${minutes}m` : `${minutes}m : ${remainingSeconds}s`;

    if (minutes >= 60) {
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;
        result = `${hours}h : ${remainingMinutes}m : ${remainingSeconds}s`;
    }

    return result;
}