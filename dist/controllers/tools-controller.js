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
export { addTools };
//# sourceMappingURL=tools-controller.js.map