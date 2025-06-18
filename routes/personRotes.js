const express =require('express');
const router=express.Router();
const Person=require('./../models/person')


router.post('/',async(req,res)=>{
    

    // not use this as it reduces code readiblity and not good practice

    // const data=req.body
    // // create a new person document using the mongoose model
    // const newPerson=new Person(data);

    // // save the newPerson in the dataBase
    // newPerson.save((error,savedPerson)=>{
    //     if(error){
    //         console.log("error on saving person data");
    //         res.status(500).json({error:'internal server error'})            
    //     }else{
    //         console.log("data save successfully");
    //         res.status(200).json(savedPerson);
            
    //     }
    // })


    try{
         const data=req.body
    //  create a new person document using the mongoose model
   const newPerson=new Person(data);

    // save the newPerson in the dataBase
    const response= await newPerson.save()

    console.log("data saved");
    res.status(200).json(response);
    
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({error:'internal server error'});
        
    }
})


router.get('/',async(req,res)=>{
    try{
        const data=await Person.find();
        console.log("data fetched successfully");
        res.status(200).json(data);
        
    }
    catch(error){
       console.log(err);
        res.status(500).json({error:'internal server error'});  
    }
})

router.get('/:workType',async(req,res)=>{
    try {
        const workType=req.params.workType;
        if(workType=='chef' || workType=='waiter' || workType=='manager')
        {
            const response=await Person.find({work:workType});
            console.log('response fetched');
            res.status(200).json(response);
            
        }
        else{
            res.status(404).json({erroe:'invalid work type'});
        }
    } catch (error) {
       console.log(err);
        res.status(500).json({error:'internal server error'});  
    }
})

router.put('/:id',async(req,res)=>{
    try {
        const personId=req.params.id;  // extract id from url parameter
        const updatedPersonData=req.body; //extract the updated data;

        const response=await Person.findByIdAndUpdate(personId,updatedPersonData,{
            new:true,
            runValidators:true,
        });

        if(!response)
        {
            return res.status(404).json({error:'person not found'})
        }
        console.log("data updated");
        res.status(200).json(response);
        
    } catch (error) {
           console.log(err);
        res.status(500).json({error:'internal server error'});  
    }
})

router.delete('/:id',async(req,res)=>{
    try {
         const personId=req.params.id; 
         const response=await Person.findByIdAndRemove(personId);
          if(!response)
        {
            return res.status(404).json({error:'person not found'});
        }
        else{
            res.status(400).json({message:"person deleted successfully"});
        }
    } catch (error) {
       console.log(err);
        res.status(500).json({error:'internal server error'});    
    }
})

module.exports=router;