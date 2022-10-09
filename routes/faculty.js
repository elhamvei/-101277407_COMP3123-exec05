const express = require("express");
const router = express.Router();

router.route("/fulltime")
    .get((req, res) => {
        res.send({ message: "GET- /faculty/fulltime" });
    })
    .post((req, res) => {
        res.send({ message: "POST- /faculty/fulltime" });
    })

router.route("/parttime")
    .get((req, res) => {
        res.send({ message: "GET- /faculty/parttime" });
    })
    .post((req, res) => {
        res.send({ message: "POST- /faculty/parttime" });
    })



module.exports = router;