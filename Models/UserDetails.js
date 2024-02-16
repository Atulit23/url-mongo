const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserDetailsSchema = new Schema({
  result : {
    type : Object,
    required :true,
  },
});

const UserDetails = mongoose.model('userDetails', UserDetailsSchema);
UserDetails.createIndexes();
module.exports = UserDetails