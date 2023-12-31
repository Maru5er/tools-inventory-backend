var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { connect } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const dbConnect = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const connectionURL = process.env.MONGO_URI || "";
    if (connectionURL == "") {
        return res.status(500).send({
            message: "Failed to connect with database, Empty database URL"
        });
    }
    else {
        connect(connectionURL).catch((e) => {
            console.log(e);
            return res.status(500).send({
                message: "Failed to connect with database"
            });
        }).then(() => {
            next();
        });
    }
});
export { dbConnect };
//# sourceMappingURL=dbConnect.js.map