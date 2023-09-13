import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ToolSchema = new Schema({
    name: { type: String, required: true },
    code: { type: String, required: true },
    angle: { type: Number, required: true },
    diameter: { type: Number, required: true },
    size: { type: Number, required: true },
    material: { type: String, required: true },
    height: { type: Number, required: false },
    dateIn: { type: Date, required: false },
    dateOut: { type: Date, required: false },
    status: { type: String, required: false },
    machine: { type: String, required: false },
    description: { type: String, required: false },
});
const Tool = mongoose.model('Tool', ToolSchema);
export default Tool;
//# sourceMappingURL=tools-model.js.map