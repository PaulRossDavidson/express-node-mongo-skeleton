var mongoose = require('mongoose');  
var blobSchema = new mongoose.Schema({  
  title: String,
  description: String,
  price: Number,
  year: String,
  location: String,
  url: String,
  source: String,
 
});
mongoose.model('Blob', blobSchema);