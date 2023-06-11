import { pool as db } from '../db.js';

export const getScores = async (req, res, next) => {
    try {
        let sql = `SELECT * FROM scores ORDER BY time ASC`
        let [scores, _] = await db.execute(sql)

        res.status(200).json({status: 'success', scores})
    } catch (error) {
        console.error(error)
        next(error)
    }
}

export const getScoresbyName = async (req, res, next) => {
    try {
        let name = req.params.name
        let values = [name]
        let sql = `SELECT * FROM scores WHERE name = ? ORDER BY timestamp ASC`
        let [scores, _] = await db.execute(sql, values)

        res.status(200).json({status: 'success', scores: scores})
    } catch (error) {
        console.error(error)
        next(error)
    }
}

export const getRecentScores = async (req, res, next) => {
    try {
        let sql = `SELECT * FROM scores ORDER BY timestamp DESC`
        let [scores, _] = await db.execute(sql)

        res.status(200).json({status: 'success', scores: scores})
    } catch (error) {
        console.error(error)
        next(error)
    }
}

export const postScore = async (req, res, next) => {
    try {
        let name = req.body.name
        let time = req.body.time
        let timestamp = new Date().toISOString()

        let values = [name, time, timestamp]
        let sql = "INSERT INTO scores (name, time, timestamp) VALUES(?, ?, ?)"
        let score = await db.execute(sql, values)
        res.status(200).json({status: 'success', score: score.insertId})
    } catch (error) {
        console.error(error)
        next(error)
    }
}