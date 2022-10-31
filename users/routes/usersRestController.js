import express from "express";
const router = express.Router();
router.get('/',(req,res)=>{
    res.send({
        status:res.status,
        message: "users"
    });
});

router.get('/:id',(req,res)=>{
    const id = req.params.id;
    console.log("/:id = "+id);
    res.send({
        status:res.status,
        id:id
    });
});

router.post('/',(req,res)=>{
    res.send({
        status:res.status,
        message: "post"
    });
});

router.post('/login',(req,res)=>{
    res.send({
        status:res.status,
        message: "login"
    });
});

router.put('/:id',(req,res)=>{
    const id = req.params.id;
    res.send({
        status:res.status,
        id:id,
        message:'put'
    });
});

router.patch('/',(req,res)=>{
    console.log("/:id = "+id);
    res.send({
        status:res.status,
        message: "patch"
    });
});

router.patch('/',(req,res)=>{
    const user_id = req.params.id;
    console.log("/:id = "+id);
    res.send({
        status:res.status,
        message: "user delete user_id" +user_id
    });
});


export default router;
