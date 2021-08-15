const connection =require('./connection');
module.exports ={
    getallStudents:(callback)=>{
        connection.query('SELECT StudID, Name, Email, Mobile, Age FROM student',(err,result)=>{
        if(err) {
            console.log(err)
        }else{
            callback(result);
        }
        })
    },
    getById:(req, res, next) =>{
        let id=req.params.id;
        connection.query(`SELECT StudID, Name, Email, Mobile, Age FROM student where StudID=${id}`,(err,result)=>{
            if(err) {
                console.log(err)
            }else{
                if(result.length > 0) {
                    res.send({error:false,data:result});
                }else{
                    res.send({error:false,data:result,message:"data not found"});
                }
            }
            })
    },
    deleteById:(id,callback)=>{
        connection.query(`delete from student where StudID=${id}`,(err,result)=>{
            if(err) {
                console.log(err)
            }else{
                callback(result);
            }
            })
    },
}