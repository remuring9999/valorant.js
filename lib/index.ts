import axios from "axios";
const fetcher = async (route: string) => await axios.get(route).then((res) => res.data);

const session = "2de5423b-4aad-02ad-8d9b-c0a931958861";

export class Valorant {
  static search(query = "") {
    if (query.trim?.().length < 1) throw new Error("Parameter is required.");
    if (!query.includes("#"))
      throw new Error("Invaild parameter data. (query must include #.)");
    if (typeof query !== "string")
      throw new TypeError("Parameter must be a string.");
    let username = query.replace("#", "-");
    return fetcher(
      `https://dak.gg/valorant/_next/data/7LgZeLdvrMz4iw7mTpYmD/profile/${encodeURIComponent(
        username
      )}.json?name=${encodeURIComponent(username)}`
    ).catch((err) => {
      throw new Error(`Callback Error: ${err}`);
    });
  }

  static get(puuid = "") {
    if (puuid.trim?.().length < 1) throw new Error("Parameter is required.");
    if (typeof puuid !== "string")
      throw new TypeError("Parameter must be a string.");
    return fetcher(
      `https://val.dakgg.io/api/v1/accounts/${puuid}/seasons/${session}`
    ).catch((err) => {
      throw new Error(`Callback Error: ${err}`);
    });
  }
};
