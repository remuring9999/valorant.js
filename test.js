const valorant = require("valorant.js");

valorant.search("혜민이가 ZZANG센 주제에#너무신중함").then((res) => {
  let puuid = res.pageProps.account.puuid;
  valorant.get(puuid).then((res) => {
    console.log(res);
  });
});
