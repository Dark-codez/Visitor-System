const controller = require('../controllers/authController');
// const { requireAuth } = require('../authentication/requireAuth');
const { Router } = require('express');
const router = Router();

// GET REQUESTS
router.get('/',controller.getHome);
router.get('/elections',controller.getElections);
router.get('/login',controller.getLogin);

// ADMIN GET REQUESTS
router.get('/admin',controller.adminGet);
router.get('/add_candidate',controller.candidate_get);
router.get('/add_voter',controller.voter_get);
router.get('/add_party',controller.party_get);
router.get('/add_elections',controller.add_elections_get);
router.get('/all_elections',controller.all_elections_get);

// ADMIN POST REQUESTS
router.post('/add_election',controller.add_election_post);
router.post('/add_party',controller.add_party_post);
router.post('/add_candidate',controller.add_candidate_post);
// POST REQUESTS

// DELETE REQUESTS

// ADMIN PUT REQUESTS
module.exports = router;