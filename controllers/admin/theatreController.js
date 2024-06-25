import theatreModel from "../../models/theatreModel.js";
const insertTheatre = async(req, res) => {
    // console.log(req.body);
    try{
        var instance = new theatreModel(req.body)
        var response = await instance.save()
        res.send("record added successfully")

    }
    catch(err){
        throw new Error(err)
    }

}
const deleteTheatre = (req, res) => {

}
const updateTheatre = (req, res) => {

}
const selectTheatre =  async(req, res) => {
   try{
    let response = await theatreModel.find()
    res.send(response)

   }
   catch(err){
    throw new Error(err);
   }
}

export {
    insertTheatre, deleteTheatre, selectTheatre, updateTheatre
}