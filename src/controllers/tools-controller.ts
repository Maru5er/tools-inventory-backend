import Tool from '../models/tools-model.js';
import asyncHandler from "express-async-handler";
import {Request, Response} from "express";


const addTools = asyncHandler(async (req: Request, res: Response) => {
    const tool = new Tool(req.body);
    try {
        const newTool = await tool.save();
        res.status(201).json({message : "added tool", newTool});
    } catch {
        res.status(400);
        throw new Error("Error adding tool");
    }

});

const getTools = asyncHandler(async (req: Request, res: Response) => {
    try {
        const tool = await Tool.find(req.body);
        res.status(201).json({message : "got tools", tool});
    } catch {
        res.status(400);
        throw new Error("Error getting tools");
    }
});

const updateTools = asyncHandler(async (req: Request, res: Response) => {
    try {
        const tool = await Tool.updateMany({"_id" : req.body.ids}, {
                $set : req.body.updateParams
            });
            res.json(tool);
    } catch {
        res.status(400);
        throw new Error("Error updating tool");
    }
    
});

const deleteTools = asyncHandler(async (req: Request, res: Response) => {
    const ids = req.body.ids;
    try {
        await Tool.deleteMany({"_id" : {
            $in : ids
        }});
        res.status(201).json({message : "deleted tool"});
    } catch {
        res.status(400);
        throw new Error("Error deleting tool");
    }
});

const getAllTools = asyncHandler(async (req: Request, res: Response) => {
    try {
        const tools = await Tool.find({});
        res.status(201).json({message : "got tools", tools});
    } catch {
        res.status(400);
        throw new Error("Error getting tools");
    }
});



export {addTools, getTools, updateTools, deleteTools, getAllTools};