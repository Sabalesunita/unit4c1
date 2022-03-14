const mongoose=require("mongoose");

const app= express();

const connect=() =>{
    return mongoose.connect(
     "mongodb+srv://sunita:sunita12345@cluster0.byezg.mongodb.net/web15?retryWrites=true&w=majority"
    );
};
//User schema
const userSchema =new mongoose.Schema({
    firstName : {type:String,required:true},
    middleName :{type :String,required:false},
    lastName :{type:String,required:true},
    age :{type:String,required:true},
    email :{type:String,required:true},
    address: {type:String,required:true},
    gender: {type:String,required:false,default:female},
    type: {type:String,required:false,default:customer},
    createdAt: {type:String,required:true},
    updatedAt :{type:String,required:true}
})
//model 
const User= mongoose.model("user",userSchema);


//BranchDetail schema
const branchDetailSchema =new mongoose.Schema({
name: {type:String,required:true},
address: {type:String,required:true},
IFSC :{type:String,required:true},
MICR :{type:Number,required:true},
createdAt :{type:String,required:true},
updatedAt :{type:String,required:true}
})
//model
const BranchDetail=mongoose.model("branchDetail",branchDetailSchema);


//MasterAccount schema
const masterAccount=new mongoose.Schema({
    balance:{type:String,required:true}, // This is the total balance that the person has in the bank
    createdAt: {type:String,required:true},
    updatedAt: {type:String,required:true}   
})
//model
const MasterAccount=mongoose.model("masterAccount",masterAccount);


//SavingsAccount schema
const savingsAccount=new mongoose.Schema({
    account_number : {type:String,required:true,unique:true}, 
    balance : {type:String,required:true} ,
    interestRate : {type:String,required:true} ,
    createdAt : {type:String,required:true} ,
    updatedAt : {type:String,required:true} 
}) 
//model
const SavingsAccount =mongoose.model("savingsAccount",savingsAccount);

//FixedAccount
const fixedAccount= new mongoose.Schema({
    account_number :{type:String,required:true,unique:true},
    balance :{type:String,required:true},
    interestRate :{type:String,required:true},
    startDate :{type:String,required:true},
    maturityDate :{type:String,required:true},
    createdAt :{type:String,required:true},
    updatedAt :{type:String,required:true}
})
//model
const FixedAccount =mongoose.nodel("fixedAccount",fixedAccount);

//crud
app.get("/users",async(req,res)=>{
    try{
    const users=await User.find().lean().exec();
    return res.status(200).send({users:users})
    }catch(err){
    return res
    .status(500)
    .send({message:"Something went wrong..try agin later"});
    }
});

app.post("/users",async(req,res)=>{
    try{
        const users=await User.create(req.body);
        return res.status(201).send({users:users})
        }
        catch(err){
        return res
        .status(500)
        .send({message:"Something went wrong..try agin later"});
        }
});

app.post("/savingsAccount",async(req,res)=>{
    try{
        const users=await savingsAccount.create(req.body);
        return res.status(201).send({savingsAccount:savingsAccount})
        }
        catch(err){
        return res
        .status(500)
        .send({message:"Something went wrong..try agin later"});
        }
});

app.post("/fixedAccount",async(req,res)=>{
    try{
        const users=await fixedAccount.create(req.body);
        return res.status(201).send({fixedAccount:fixedAccount})
        }
        catch(err){
        return res
        .status(500)
        .send({message:"Something went wrong..try agin later"});
        }
});


app.listen(5000,async()=>{

    console.log("Listening to port 5000");
})