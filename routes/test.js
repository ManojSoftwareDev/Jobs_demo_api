var express = require('express');
var router = express.Router();

const axios = require('axios');

router.get('/jobs', function (req, res, next) {
    axios
        .post('https://www.zippia.com/api/jobs/', {
            companySkills: true,
            dismissedListingHashes: [],
            fetchJobDesc: true,
            jobTitle: "Business Analyst",
            locations: [],
            numJobs: 20,
            previousListingHashes: []
        })
        .then(response => {
            res.send(JSON.stringify(response.data));
        })
        .catch(error => {
            console.error(error)
        })
});

module.exports = router;