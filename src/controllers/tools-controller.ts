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
    let param : string = req.params.parameter;
    let value : any = req.params.value;
    const selection : Object = {
        [param] : value,
    };
    try {
        const tool = await Tool.find(selection);
        res.status(201).json({message : "got tools", tool});
    } catch {
        res.status(400);
        throw new Error("Error getting tools");
    }
});

const updateTools = asyncHandler(async (req: Request, res: Response) => {
    try {
        let tool = await Tool.findById(req.params.id);
        if (tool) {
            tool.name = req.body.name || tool.name;
            tool.code = req.body.code || tool.code;
            tool.angle = req.body.angle || tool.angle;
            tool.diameter = req.body.diameter || tool.diameter;
            tool.size = req.body.size || tool.size;
            tool.dateIn = req.body.dateIn || tool.dateIn;
            tool.dateOut = req.body.dateOut || tool.dateOut;
            tool.status = req.body.status || tool.status;
            const updatedTool = await tool.save();
            res.json(updatedTool);
        } else {
            res.status(404);
            throw new Error("Tool not found");
        }
    } catch {
        res.status(400);
        throw new Error("Error updating tool");
    }
    
});

const deleteTools = asyncHandler(async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
        await Tool.deleteOne({"_id" : id});
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