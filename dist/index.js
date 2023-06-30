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
exports.Valorant = void 0;
const axios_1 = require("axios");
const fetcher = (route) => __awaiter(void 0, void 0, void 0, function* () { return yield axios_1.default.get(route).then((res) => res.data); });
const session = "2de5423b-4aad-02ad-8d9b-c0a931958861";
class Valorant {
    static search(query = "") {
        var _a;
        if (((_a = query.trim) === null || _a === void 0 ? void 0 : _a.call(query).length) < 1)
            throw new Error("Parameter is required.");
        if (!query.includes("#"))
            throw new Error("Invaild parameter data. (query must include #.)");
        if (typeof query !== "string")
            throw new TypeError("Parameter must be a string.");
        let username = query.replace("#", "-");
        return fetcher(`https://dak.gg/valorant/_next/data/7LgZeLdvrMz4iw7mTpYmD/profile/${encodeURIComponent(username)}.json?name=${encodeURIComponent(username)}`).catch((err) => {
            throw new Error(`Callback Error: ${err}`);
        });
    }
    static get(puuid = "") {
        var _a;
        if (((_a = puuid.trim) === null || _a === void 0 ? void 0 : _a.call(puuid).length) < 1)
            throw new Error("Parameter is required.");
        if (typeof puuid !== "string")
            throw new TypeError("Parameter must be a string.");
        return fetcher(`https://val.dakgg.io/api/v1/accounts/${puuid}/seasons/${session}`).catch((err) => {
            throw new Error(`Callback Error: ${err}`);
        });
    }
}
exports.Valorant = Valorant;
;
