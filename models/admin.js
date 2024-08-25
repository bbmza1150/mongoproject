const mongoose = require('mongoose');

const adminSchma = new mongoose.Schema({
	admin_id: {
        type: String,
        required: true,
        unique: true,  
        match: /^[A-Z][0-9]{2}$/,  
        validate: {
            validator: function(value) {
                return value >= 'A01' && value <= 'Z99';  
            },
            message: props => `${props.value} is not a valid admin_id! It should be in the range A01-Z99.`
        }
    },
	admin_username:{type: String , required: true,unique: true},
	admin_password:{type: String , required: true},
	admin_Fname:{type: String , required: true},
	admin_Lname:{type: String , required: true},
	

	admin_tel:{type: String,
    			required: true,
    			unique: true,
    			validate: {
     			   validator: function(v) {
        		   return /^\d{10}$/.test(v); 
      			},
      			   message: props => `${props.value} is not a valid phone number!`
    			}},

	admin_email:{type: String,
   			required: true,
    			unique: true, 
    			validate: {
     			 validator: function(v) {
        		  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v); 
      			},
      message: props => `${props.value} is not a valid email!`
    }
},
admin_image:{type: String , required: true}

},{timestamps:true , versionKey:false});
module.exports = mongoose.model('Admin',adminSchma);