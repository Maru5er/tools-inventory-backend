import Tool from '../models/tools-model.ts';
import asyncHandler from "express-async-handler";
const addTools = asyncHandler(async (req, res) => {
    const tool = new Tool(req.body);
    try {
        const newTool = await tool.save();
        res.status(201).json({ message: "added tool", newTool });
    }
    catch {
        res.status(400);
        throw new Error("Error adding tool");
    }
});
export { addTools };
//# sourceMappingURL=tools-controller.js.map