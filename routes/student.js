/*
/api/v1/student/fulltime
/api/v1/student/parttime
/api/v1/student/sessional
*/
const express = require("express");
const router = express.Router();

router.route("/fulltime")
    .get((req, res) => {
        const student = {
            id: 101,
            first_name: "Elham",
            last_name: "Veisoei",
            status: "Full Time"
        }
        res.send({ student, message: "GET- /student/fulltime" });
    })
    .post((req, res) => {
        const student = req.body;
        res.send({ student, message: "POST- /student/fulltime" });
    })



router.route("/parttime")
    .get((req, res) => {
        const student = {
            id: 201,
            first_name: "Elham",
            last_name: "Veisoei",
            status: "Part Time"
        }
        res.send({ student, message: "GET- /student/parttime" });
    })
    .post((req, res) => {
        const student = req.body;
        res.send({ student, message: "POST- /student/parttime" });
    })


router.route("/sessional")
    .get((req, res) => {
        const student = {
            id: 301,
            first_name: "Elham",
            last_name: "Veisoei",
            status: "Sessional"
        }
        res.send({ student, message: "GET- /student/sessional" });
    })
    .post((req, res) => {
        const student = req.body;
        res.send({ student, message: "POST- /student/sessional" });
    })

module.exports = router