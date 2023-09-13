import { timeStamp } from 'console';
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

interface ITool extends mongoose.Document {
    name : string, 
    code : string, 
    angle : number,
    diameter : number,
    size : number,
    material : string,
    height : number,
    machine : string,
    dateIn : Date,
    dateOut : Date,
    status : string,
    description : string,
}

const ToolSchema = new Schema<ITool>({
    name : { type : String, required : true },
    code : { type : String, required : true },
    angle : { type : Number, required : true },
    diameter : { type : Number, required : true },
    size : { type : Number, required : true },
    material : {type: String, required : true},
    height : {type : Number, required : false},
    dateIn : { type : Date, required : false },
    dateOut : { type : Date, required : false },
    status : { type : String, required : false },
    machine : { type : String, required : false},
    description : { type : String, required : false},
}, {
    timestamps : true,
});

const Tool = mongoose.model<ITool>('Tool', ToolSchema);
export default Tool;