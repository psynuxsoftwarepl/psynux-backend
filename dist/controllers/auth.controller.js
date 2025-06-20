"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const auth_service_1 = require("../services/auth.service");
class AuthController {
    static loginOrRegister(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idToken } = req.body;
            if (!idToken) {
                res.status(400).json({ error: 'Missing token' });
                return;
            }
            try {
                const user = yield auth_service_1.AuthService.verifyFirebaseAndHandleUser(idToken);
                res.status(200).json({ message: 'Login successful', user });
            }
            catch (err) {
                console.error(err);
                res.status(401).json({ error: 'Authentication failed' });
            }
        });
    }
}
exports.AuthController = AuthController;
