import { Request, Response } from "express";

export default class sampleController {
    samplefunction = async (req: Request, res: Response) => {
        try {
            res.send("Hello, here is your response!");
            console.log("Controller working fine!");
        }
        catch(error) {
            res.send("Something went wrong...");
            return error;
        }

    }
}