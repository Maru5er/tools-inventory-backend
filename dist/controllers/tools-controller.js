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
    let param = req.params.parameter;
    let value = req.params.value;
    const selection = {
        [param]: value,
    };
    try {
        const tool = yield Tool.find(selection);
        res.status(201).json({ message: "got tools", tool });
    }
    catch (_b) {
        res.status(400);
        throw new Error("Error getting tools");
    }
}));
const updateTools = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let tool = yield Tool.findById(req.params.id);
        if (tool) {
            tool.name = req.body.name || tool.name;
            tool.code = req.body.code || tool.code;
            tool.angle = req.body.angle || tool.angle;
            tool.diameter = req.body.diameter || tool.diameter;
            tool.size = req.body.size || tool.size;
            tool.dateIn = req.body.dateIn || tool.dateIn;
            tool.dateOut = req.body.dateOut || tool.dateOut;
            tool.status = req.body.status || tool.status;
            const updatedTool = yield tool.save();
            res.json(updatedTool);
        }
        else {
            res.status(404);
            throw new Error("Tool not found");
        }
    }
    catch (_c) {
        res.status(400);
        throw new Error("Error updating tool");
    }
}));
const deleteTools = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        yield Tool.deleteOne({ "_id": id });
        res.status(201).json({ message: "deleted tool" });
    }
    catch (_d) {
        res.status(400);
        throw new Error("Error deleting tool");
    }
}));
export { addTools, getTools, updateTools, deleteTools };
//# sourceMappingURL=tools-controller.js.map