var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Tool from '../models/tools-model.js';
import asyncHandler from "express-async-handler";
const addTools = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tool = new Tool(req.body);
    try {
        const newTool = yield tool.save();
        res.status(201).json({ message: "added tool", newTool });
    }
    catch (_a) {
        res.status(400);
        throw new Error("Error adding tool");
    }
}));
const getTools = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = Object.assign({}, Object.keys(req.body).reduce((acc, key) => {
            acc[key] = { $regex: req.body[key], $options: 'i' };
            return acc;
        }, {}));
        const tool = yield Tool.find(query).sort({ "createdAt": -1 });
        res.status(201).json({ message: "got tools", tool });
    }
    catch (_b) {
        res.status(400);
        throw new Error("Error getting tools");
    }
}));
const updateTools = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tool = yield Tool.updateMany({ "_id": req.body.ids }, {
            $set: req.body.updateParams
        });
        res.json(tool);
    }
    catch (_c) {
        res.status(400);
        throw new Error("Error updating tool");
    }
}));
const deleteTools = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ids = req.body.ids;
    try {
        yield Tool.deleteMany({ "_id": {
                $in: ids
            } });
        res.status(201).json({ message: "deleted tool" });
    }
    catch (_d) {
        res.status(400);
        throw new Error("Error deleting tool");
    }
}));
const getAllTools = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tools = yield Tool.find({}).sort({ "createdAt": -1 });
        res.status(201).json({ message: "got tools", tools });
    }
    catch (_e) {
        res.status(400);
        throw new Error("Error getting tools");
    }
}));
export { addTools, getTools, updateTools, deleteTools, getAllTools };
//# sourceMappingURL=tools-controller.js.map