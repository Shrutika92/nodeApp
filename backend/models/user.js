var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-node.js');

var userSchema = new Schema({
    username:String,
    password:String,
});
userSchema.methods.generateHash = function(password){
 return bcrypt.hashSync(password,bcrypt.genSaltSync(8),null);
};
userSchema.methods.validPassword = function(){
    return bcrypt.compareSync(password,this.password);
};
var User = mongoose.model('user',userSchema);

module.exports = User;