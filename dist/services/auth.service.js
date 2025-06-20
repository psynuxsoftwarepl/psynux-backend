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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const firebase_1 = __importDefault(require("../config/firebase"));
const prismaClient_1 = require("../database/prismaClient");
class AuthService {
    static verifyFirebaseAndHandleUser(idToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const decodedToken = yield firebase_1.default.auth().verifyIdToken(idToken);
            const { uid, phone_number } = decodedToken;
            if (!phone_number) {
                throw new Error('Phone number not found in token');
            }
            // Look up user by Firebase UID or phone
            let user = yield prismaClient_1.prisma.user.findUnique({
                where: { phone: phone_number }
            });
            // If not found, create user
            if (!user) {
                user = yield prismaClient_1.prisma.user.create({
                    data: {
                        firebaseUid: uid,
                        phone: phone_number,
                    },
                });
            }
            return user;
        });
    }
}
exports.AuthService = AuthService;
