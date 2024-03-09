import mongoose from "mongoose";

const {Schema} = mongoose;

const userschema = new Schema({
  name:{
    first:String,
    second:String,
  },
  virtuals:{
    fullname:{
      get(){
        return this.name.first+" "+this.name.last;
      }
    }
  },

  email: String,
});

const User = mongoose.model('User',userschema);
User.path('_id');

const noteschema = new Schema({
  createdby : String,
  title: String,
  datecreated : date,
  datemodified: date,
  description: String,
  label: String,

  virtuals:{
    ownership:{
      get() {
        if (!this.label){
          return this.createdby
        }
        else{
          return this.createdby + " under the label " + this.label
        }
      }
    }
  }
});

const Note = mongoose.model('Note',noteschema);
Note.path('_id');

const taskschema = new Schema({
  createdby : String,
  order: Number,
  priority: Number,
  title: String,
  datecreated : date,
  datemodified: date,
  duedate: date,
  description:{ 
    content : String,
    subtasks:{
      content: String,
      priority: Number,
    },
  },
  label: String,
});

const Task = mongoose.model('Task',taskschema);
Task.path('_id');

