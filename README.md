# valorant.js

### Unofficial Valorant api wrapper

Riotgames 발로란트의 전적 API 일부를 래핑하는 라이브러리입니다.

## Install

```bash
$ npm install @remuring9999/valorant.js
```

## Use

공식적인 API가 아닌 전적조회 서비스 **[dak.gg](https://dak.gg/)** 플랫폼의 API를 리버싱하여 제작된 라이브러리 입니다.  
**사용시 발생하는 불이익과 법적 책임은 모두 사용자에게 있습니다.**

## Examples

```js
const { Valorant } = require("@remuring9999/valorant.js");

Valorant.search("플레이어#KR1").then((data) => {
  if (data.pageProps.__N_REDIRECT_STATUS == 307)
    return console.log("존재하지 않는 플레이어");
  let puuid = data.pageProps.account.puuid;
  Valorant.get(puuid).then((data) => {
    console.log(data);
  });
});
```

## License

This repository is [GNU-3.0](https://github.com/remuring9999/valorant.js/blob/main/LICENSE) licensed.

---

이슈는 [이곳](https://github.com/remuring9999/valorant.js/issues)에서 트래킹됩니다. 또한 Pull Requests는 [이곳](https://github.com/remuring9999/valorant.js/pulls)에서 요청 할 수 있습니다.
