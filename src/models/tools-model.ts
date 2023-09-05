import mongoose from 'mongoose';

const Schema = mongoose.Schema;

interface ITool extends mongoose.Document {
    name : string, 
    code : string, 
    angle : number,
    diameter : number,
    size : number,
    dateIn : Date,
    dateOut : Date,
    status : string,
}

const ToolSchema = new Schema<ITool>({
    name : { type : String, required : true },
    code : { type : String, required : true },
    angle : { type : Number, required : true },
    diameter : { type : Number, required : true },
    size : { type : Number, required : true },
    dateIn : { type : Date, required : false },
    dateOut : { type : Date, required : false },
    status : { type : String, required : false },
});

const Tool = mongoose.model<ITool>('Tool', ToolSchema);
export default Tool;