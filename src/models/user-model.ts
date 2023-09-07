import mongoose, {Schema, model} from 'mongoose';

export interface userI extends mongoose.Document {
    username : string,
    password : string,
}

const userSchema = new Schema<userI>({
    username : {type : String, required : true},
    password : {type : String, required : true}
});

const User = model<userI>('User', userSchema);

export default User;