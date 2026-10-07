import { T } from "../libs/types/common";

const productController: T = {};
 productController.signup = async (req: Request, res: Response) => {
    try {
        console.log("signup");
        console.log("body:", req.body);

        const input : MemberInput = req.body,
        result: Member = await memberService.signup(input);
        // TODO: TOKEN
        

        res.json({member: result});
    } catch (err) {
        console.log("ERROR, signup:", err);
        if(err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
    }
};

export dafault productController;