var express = require('express');
let studentController= require('../controller/student.controller');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    studentController.getallStudents((students) => {
        res.send({error:false, data:students});
    })
});
router.get('/find/:id',studentController.getById );

router.get('/delete/:id', (req, res, next) =>{
    let id=req.params.id;
    studentController.deleteById(id,(students) => {
        if(students.affectedRows>0){
            res.send({error:false, message:"Student record deleted"});
        }else{
            res.send({error:true, message:"Student not found "});
        }
    })
});
module.exports = router;