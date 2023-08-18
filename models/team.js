const mongoose = require('mongoose')

const teamSchema = new mongoose.Schema({
    index: {type: Number,default:()=>{
      return Team.countDocuments().exe().then(count=>count+1)
    }
    },
    name: {type: String, required:true},
    designation: {type:String,required:true},
    image: {type:String,required:true},
},{timestamps: true});

module.exports = mongoose.model('Team',teamSchema,'teams');