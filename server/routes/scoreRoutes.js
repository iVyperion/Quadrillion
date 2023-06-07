import express from 'express';
import { getScores, getScoresbyName, getRecentScores, postScore} from '../controllers/scoreControllers.js';

const router = express.Router();

router.route('/').get(getScores).post(postScore);
router.route('/recent').get(getRecentScores)
router.route('/:name').get(getScoresbyName)

export default router;