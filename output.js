//Sat Jul 18 2026 12:05:00 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const $ = new Env("图虫");
let envSplitor = ["@", "\n"];
let result;
let resurq;
let resurp;
let userList = [];
let usid = 0;
let userCount = 0;
let OooOo = "Tcck";
let userCookie = ($.isNode() ? process.env[OooOo] : $.getdata(OooOo)) || "";
class UserInfo {
  constructor(_0x43cd63) {
    this._ = ++usid;
    this.f = "账号 [" + this._ + "] ";
    this.ck = _0x43cd63.split("#");
    this.i = this.ck[0];
    this.p = this.ck[1];
  }
  async task() {
    await this.login();
    await this.signin();
    await this.box();
    await this.feedlist();
    await this.sharelist();
  }
  async login() {
    this.ts = Math.round(new Date().getTime()).toString();
    this.h = {
      version: "7391",
      channel: "xiaomi",
      "accept-encoding": "gzip",
      Host: "api.tuchong.com",
      platform: "android",
      "host-name": "api.tuchong.com",
      "content-type": "application/x-www-form-urlencoded",
      "content-length": "40",
      "user-agent": "okhttp/3.12.2 com.ss.android.tuchong (Tuchong: 7391 7.39.1) (Android: 11 30)"
    };
    this.data = "password=" + this.p + "&account=" + this.i;
    await httpRequest("post", popu("https://api.tuchong.com/accounts/login?language=zh&device_platform=android&os_api=30&_rticket=" + this.ts + "&app_name=tuchong", this.h, this.data));
    this.token = result.token;
    console.log(this.f + ":" + result.message);
  }
  async signin() {
    this.h = {
      accept: "application/json, text/plain, */*",
      token: "" + this.token,
      "accept-encoding": "gzip, deflate",
      Host: "m.tuchong.com",
      platform: "android",
      cookie: "token=" + this.token,
      referer: "https://m.tuchong.com/app-point?no_more=1&no_inset=1",
      "content-type": "application/x-www-form-urlencoded",
      "x-requested-with": "com.ss.android.tuchong",
      "user-agent": "Mozilla/5.0 (Linux; Android 11; M2011K2C Build/RKQ1.200928.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.185 Mobile Safari/537.36 Tuchong/7.39.1(android)"
    };
    await httpRequest("get", popu("https://m.tuchong.com/tuchongrest/point/check-in", this.h));
    console.log(this.f + ":签到:" + result.message);
  }
  async box() {
    this.h = {
      accept: "application/json, text/plain, */*",
      token: "" + this.token,
      "accept-encoding": "gzip, deflate",
      Host: "m.tuchong.com",
      platform: "android",
      cookie: "token=" + this.token,
      referer: "https://m.tuchong.com/app-point?no_more=1&no_inset=1",
      "content-type": "application/x-www-form-urlencoded",
      "x-requested-with": "com.ss.android.tuchong",
      "user-agent": "Mozilla/5.0 (Linux; Android 11; M2011K2C Build/RKQ1.200928.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.185 Mobile Safari/537.36 Tuchong/7.39.1(android)"
    };
    await httpRequest("get", popu("https://m.tuchong.com/tuchonggapi/reward/point/box", this.h));
    console.log(this.f + ":开宝箱:" + result.result);
  }
  async feedlist() {
    this.sz = rand(1, 10);
    this.ts = Math.round(new Date().getTime()).toString();
    this.h = {
      version: "7391",
      channel: "xiaomi",
      "accept-encoding": "gzip",
      Host: "tuchong.com",
      platform: "android",
      "host-name": "tuchong.com",
      "content-type": "application/x-www-form-urlencoded",
      "content-length": "40",
      "user-agent": "okhttp/3.12.2 com.ss.android.tuchong (Tuchong: 7391 7.39.1) (Android: 11 30)"
    };
    await httpRequest("get", popu("https://tuchong.com/gapi/feed/app?language=zh&device_platform=android&os_api=30&_rticket=" + this.ts + "&app_name=tuchong", this.h));
    this.feedid = result.feedList[this.sz].data_id;
    console.log(this.f + ":点赞列表获取成功,id:" + this.feedid);
    await this.dzan();
    await this.plun();
    await this.foll();
  }
  async dzan() {
    this.h = {
      version: "7391",
      channel: "xiaomi",
      token: "" + this.token,
      "accept-encoding": "gzip",
      Host: "tuchong.com",
      platform: "android",
      "host-name": "tuchong.com",
      "content-type": "application/x-www-form-urlencoded",
      "content-length": "17",
      "user-agent": "okhttp/3.12.2 com.ss.android.tuchong (Tuchong: 7391 7.39.1) (Android: 11 30)"
    };
    this.data = "post_id=" + this.feedid;
    await httpRequest("put", popu("https://tuchong.com/gapi/interactive/favorite?_rticket=" + this.ts + "&app_name=tuchong", this.h, this.data));
    console.log(this.f + ":" + result.message);
  }
  async plun() {
    this.t = "大佬们，求个赞😘";
    this.h = {
      version: "7391",
      channel: "xiaomi",
      token: "" + this.token,
      "accept-encoding": "gzip",
      Host: "api.tuchong.com",
      platform: "android",
      "host-name": "api.tuchong.com",
      "content-type": "application/x-www-form-urlencoded",
      "content-length": "89",
      "user-agent": "okhttp/3.12.2 com.ss.android.tuchong (Tuchong: 7391 7.39.1) (Android: 11 30)"
    };
    this.data = "parent_note_id=0&content=" + this.t + "&reply_to_note_id=0";
    await httpRequest("post", popu("https://api.tuchong.com/3/posts/" + this.feedid + "/comments?_rticket=" + this.ts + "&app_name=tuchong", this.h, this.data));
    console.log(this.f + ":评论:" + result.result);
  }
  async foll() {
    this.h = {
      version: "7391",
      channel: "xiaomi",
      token: "" + this.token,
      "accept-encoding": "gzip",
      Host: "tuchong.com",
      platform: "android",
      "host-name": "tuchong.com",
      "content-type": "application/x-www-form-urlencoded",
      "content-length": "16",
      "user-agent": "okhttp/3.12.2 com.ss.android.tuchong (Tuchong: 7391 7.39.1) (Android: 11 30)"
    };
    this.data = "site_id=" + this.feedid;
    await httpRequest("put", popu("https://tuchong.com/gapi/interactive/follow?_rticket=" + this.ts + "&app_name=tuchong", this.h, this.data));
    console.log(this.f + ":" + result.message);
  }
  async sharelist() {
    this.sz = rand(1, 10);
    this.ts = Math.round(new Date().getTime()).toString();
    this.h = {
      version: "7391",
      channel: "xiaomi",
      "accept-encoding": "gzip",
      Host: "tuchong.com",
      platform: "android",
      "host-name": "tuchong.com",
      "content-type": "application/x-www-form-urlencoded",
      "user-agent": "okhttp/3.12.2 com.ss.android.tuchong (Tuchong: 7391 7.39.1) (Android: 11 30)"
    };
    await httpRequest("get", popu("https://tuchong.com/gapi/feed/app/video?_rticket=" + this.ts + "&app_name=tuchong", this.h));
    this.shareid = result.feedList[this.sz].data_id;
    this.auid = result.feedList[this.sz].entry.author.author_id;
    console.log(this.f + ":分享列表获取成功,id:" + this.shareid);
    await this.share();
  }
  async share() {
    this.h = {
      version: "7391",
      channel: "xiaomi",
      token: "" + this.token,
      "accept-encoding": "gzip",
      Host: "api.tuchong.com",
      platform: "android",
      "host-name": "api.tuchong.com",
      "content-type": "application/x-www-form-urlencoded",
      "content-length": "89",
      "user-agent": "okhttp/3.12.2 com.ss.android.tuchong (Tuchong: 7391 7.39.1) (Android: 11 30)"
    };
    this.data = "share_id=" + this.shareid + "&content_type=video&author_id=" + this.auid + "&platform=WechatFriend";
    await httpRequest("post", popu("https://api.tuchong.com/share/recall?_rticket=" + this.ts + "&app_name=tuchong", this.h, this.data));
    console.log(this.f + ":分享:" + result.result);
  }
}
!(async () => {
  if (!(await checkEnv())) {
    return;
  }
  for (let _0x443c18 of userList) await _0x443c18.task();
})().catch(_0x566439 => console.log(_0x566439)).finally(() => $.done());
function encrypt(_0x3106a2) {
  return CryptoJS.AES.encrypt(_0x3106a2, CryptoJS.enc.Utf8.parse(key), {
    iv: CryptoJS.enc.Utf8.parse(iv),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.ZeroPadding
  }).toString();
}
function decrypt(_0x534051) {
  return CryptoJS.AES.decrypt(_0x534051, CryptoJS.enc.Utf8.parse(key), {
    iv: CryptoJS.enc.Utf8.parse(iv),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.ZeroPadding
  }).toString(CryptoJS.enc.Utf8);
}
function rand(_0x34095c, _0x595feb) {
  return parseInt(Math.random() * (_0x595feb - _0x34095c + 1) + _0x34095c, 10);
}
function MD5Encrypt(_0x9adec) {
  function _0xbba9e7(_0x45ef67, _0x31c7af) {
    return _0x45ef67 << _0x31c7af | _0x45ef67 >>> 32 - _0x31c7af;
  }
  function _0xd236b1(_0x24f323, _0x3b12fe) {
    var _0x2afd82;
    var _0x4ca293;
    var _0x5ae442;
    var _0x1a915b;
    var _0x3cf895;
    _0x5ae442 = 2147483648 & _0x24f323;
    _0x1a915b = 2147483648 & _0x3b12fe;
    _0x2afd82 = 1073741824 & _0x24f323;
    _0x4ca293 = 1073741824 & _0x3b12fe;
    _0x3cf895 = (1073741823 & _0x24f323) + (1073741823 & _0x3b12fe);
    return _0x2afd82 & _0x4ca293 ? 2147483648 ^ _0x3cf895 ^ _0x5ae442 ^ _0x1a915b : _0x2afd82 | _0x4ca293 ? 1073741824 & _0x3cf895 ? 3221225472 ^ _0x3cf895 ^ _0x5ae442 ^ _0x1a915b : 1073741824 ^ _0x3cf895 ^ _0x5ae442 ^ _0x1a915b : _0x3cf895 ^ _0x5ae442 ^ _0x1a915b;
  }
  function _0x38ff01(_0x33a868, _0x471231, _0x4bfcc1, _0x7c05af, _0x31674a, _0x4024fc, _0x242831) {
    var _0x5d0958;
    var _0x433266;
    _0x33a868 = _0xd236b1(_0x33a868, _0xd236b1(_0xd236b1((_0x5d0958 = _0x471231) & (_0x433266 = _0x4bfcc1) | ~_0x5d0958 & _0x7c05af, _0x31674a), _0x242831));
    return _0xd236b1(_0xbba9e7(_0x33a868, _0x4024fc), _0x471231);
  }
  function _0x239618(_0x29170b, _0x343c40, _0x3d20c1, _0x433d96, _0x47de4e, _0xab53e6, _0x25f22d) {
    var _0x2238e1;
    var _0xf67576;
    var _0x5f514e;
    _0x29170b = _0xd236b1(_0x29170b, _0xd236b1(_0xd236b1((_0x2238e1 = _0x343c40, _0xf67576 = _0x3d20c1, _0x2238e1 & (_0x5f514e = _0x433d96) | _0xf67576 & ~_0x5f514e), _0x47de4e), _0x25f22d));
    return _0xd236b1(_0xbba9e7(_0x29170b, _0xab53e6), _0x343c40);
  }
  function _0x2e217c(_0x2787e0, _0x45b643, _0x2e8cc1, _0x4e9a52, _0x1fdde8, _0x29b8e4, _0x5a2a79) {
    var _0x8e3e36;
    var _0x5280cb;
    _0x2787e0 = _0xd236b1(_0x2787e0, _0xd236b1(_0xd236b1((_0x8e3e36 = _0x45b643) ^ (_0x5280cb = _0x2e8cc1) ^ _0x4e9a52, _0x1fdde8), _0x5a2a79));
    return _0xd236b1(_0xbba9e7(_0x2787e0, _0x29b8e4), _0x45b643);
  }
  function _0x61ce04(_0x484144, _0xece402, _0x39aa71, _0x29f27f, _0xc41697, _0x56cd20, _0x2304a1) {
    var _0x4a427a;
    var _0x34294c;
    _0x484144 = _0xd236b1(_0x484144, _0xd236b1(_0xd236b1((_0x4a427a = _0xece402, (_0x34294c = _0x39aa71) ^ (_0x4a427a | ~_0x29f27f)), _0xc41697), _0x2304a1));
    return _0xd236b1(_0xbba9e7(_0x484144, _0x56cd20), _0xece402);
  }
  function _0x58f5a6(_0x5233c0) {
    var _0x20e34e;
    var _0x7e9132 = "";
    var _0x25b82e = "";
    for (_0x20e34e = 0; 3 >= _0x20e34e; _0x20e34e++) {
      _0x7e9132 += (_0x25b82e = "0" + (_0x5233c0 >>> 8 * _0x20e34e & 255).toString(16)).substr(_0x25b82e.length - 2, 2);
    }
    return _0x7e9132;
  }
  var _0x2cf141;
  var _0x1afbe4;
  var _0x13cfd8;
  var _0x3fa263;
  var _0x36c4eb;
  var _0x3d46d0;
  var _0x1b7d32;
  var _0x2aa0a9;
  var _0x6368a1;
  var _0x2d7d41 = [];
  for (_0x2d7d41 = function (_0x4e133) {
    for (var _0x2d7031, _0x528e43 = _0x4e133.length, _0x4695c5 = _0x528e43 + 8, _0x2733a2 = 16 * ((_0x4695c5 - _0x4695c5 % 64) / 64 + 1), _0x121d8d = Array(_0x2733a2 - 1), _0x1a54b9 = 0, _0x1f39b4 = 0; _0x528e43 > _0x1f39b4;) {
      _0x2d7031 = (_0x1f39b4 - _0x1f39b4 % 4) / 4;
      _0x1a54b9 = _0x1f39b4 % 4 * 8;
      _0x121d8d[_0x2d7031] = _0x121d8d[_0x2d7031] | _0x4e133.charCodeAt(_0x1f39b4) << _0x1a54b9;
      _0x1f39b4++;
    }
    _0x2d7031 = (_0x1f39b4 - _0x1f39b4 % 4) / 4;
    _0x1a54b9 = _0x1f39b4 % 4 * 8;
    _0x121d8d[_0x2d7031] = _0x121d8d[_0x2d7031] | 128 << _0x1a54b9;
    _0x121d8d[_0x2733a2 - 2] = _0x528e43 << 3;
    _0x121d8d[_0x2733a2 - 1] = _0x528e43 >>> 29;
    return _0x121d8d;
  }(_0x9adec = function (_0x18fb6) {
    _0x18fb6 = _0x18fb6.replace(/\r\n/g, "\n");
    for (var _0x2e3152 = "", _0x1d2917 = 0; _0x1d2917 < _0x18fb6.length; _0x1d2917++) {
      var _0xa58749 = _0x18fb6.charCodeAt(_0x1d2917);
      128 > _0xa58749 ? _0x2e3152 += String.fromCharCode(_0xa58749) : _0xa58749 > 127 && 2048 > _0xa58749 ? (_0x2e3152 += String.fromCharCode(_0xa58749 >> 6 | 192), _0x2e3152 += String.fromCharCode(63 & _0xa58749 | 128)) : (_0x2e3152 += String.fromCharCode(_0xa58749 >> 12 | 224), _0x2e3152 += String.fromCharCode(_0xa58749 >> 6 & 63 | 128), _0x2e3152 += String.fromCharCode(63 & _0xa58749 | 128));
    }
    return _0x2e3152;
  }(_0x9adec)), _0x3d46d0 = 1732584193, _0x1b7d32 = 4023233417, _0x2aa0a9 = 2562383102, _0x6368a1 = 271733878, _0x2cf141 = 0; _0x2cf141 < _0x2d7d41.length; _0x2cf141 += 16) {
    _0x1afbe4 = _0x3d46d0;
    _0x13cfd8 = _0x1b7d32;
    _0x3fa263 = _0x2aa0a9;
    _0x36c4eb = _0x6368a1;
    _0x3d46d0 = _0x38ff01(_0x3d46d0, _0x1b7d32, _0x2aa0a9, _0x6368a1, _0x2d7d41[_0x2cf141 + 0], 7, 3614090360);
    _0x6368a1 = _0x38ff01(_0x6368a1, _0x3d46d0, _0x1b7d32, _0x2aa0a9, _0x2d7d41[_0x2cf141 + 1], 12, 3905402710);
    _0x2aa0a9 = _0x38ff01(_0x2aa0a9, _0x6368a1, _0x3d46d0, _0x1b7d32, _0x2d7d41[_0x2cf141 + 2], 17, 606105819);
    _0x1b7d32 = _0x38ff01(_0x1b7d32, _0x2aa0a9, _0x6368a1, _0x3d46d0, _0x2d7d41[_0x2cf141 + 3], 22, 3250441966);
    _0x3d46d0 = _0x38ff01(_0x3d46d0, _0x1b7d32, _0x2aa0a9, _0x6368a1, _0x2d7d41[_0x2cf141 + 4], 7, 4118548399);
    _0x6368a1 = _0x38ff01(_0x6368a1, _0x3d46d0, _0x1b7d32, _0x2aa0a9, _0x2d7d41[_0x2cf141 + 5], 12, 1200080426);
    _0x2aa0a9 = _0x38ff01(_0x2aa0a9, _0x6368a1, _0x3d46d0, _0x1b7d32, _0x2d7d41[_0x2cf141 + 6], 17, 2821735955);
    _0x1b7d32 = _0x38ff01(_0x1b7d32, _0x2aa0a9, _0x6368a1, _0x3d46d0, _0x2d7d41[_0x2cf141 + 7], 22, 4249261313);
    _0x3d46d0 = _0x38ff01(_0x3d46d0, _0x1b7d32, _0x2aa0a9, _0x6368a1, _0x2d7d41[_0x2cf141 + 8], 7, 1770035416);
    _0x6368a1 = _0x38ff01(_0x6368a1, _0x3d46d0, _0x1b7d32, _0x2aa0a9, _0x2d7d41[_0x2cf141 + 9], 12, 2336552879);
    _0x2aa0a9 = _0x38ff01(_0x2aa0a9, _0x6368a1, _0x3d46d0, _0x1b7d32, _0x2d7d41[_0x2cf141 + 10], 17, 4294925233);
    _0x1b7d32 = _0x38ff01(_0x1b7d32, _0x2aa0a9, _0x6368a1, _0x3d46d0, _0x2d7d41[_0x2cf141 + 11], 22, 2304563134);
    _0x3d46d0 = _0x38ff01(_0x3d46d0, _0x1b7d32, _0x2aa0a9, _0x6368a1, _0x2d7d41[_0x2cf141 + 12], 7, 1804603682);
    _0x6368a1 = _0x38ff01(_0x6368a1, _0x3d46d0, _0x1b7d32, _0x2aa0a9, _0x2d7d41[_0x2cf141 + 13], 12, 4254626195);
    _0x2aa0a9 = _0x38ff01(_0x2aa0a9, _0x6368a1, _0x3d46d0, _0x1b7d32, _0x2d7d41[_0x2cf141 + 14], 17, 2792965006);
    _0x1b7d32 = _0x38ff01(_0x1b7d32, _0x2aa0a9, _0x6368a1, _0x3d46d0, _0x2d7d41[_0x2cf141 + 15], 22, 1236535329);
    _0x3d46d0 = _0x239618(_0x3d46d0, _0x1b7d32, _0x2aa0a9, _0x6368a1, _0x2d7d41[_0x2cf141 + 1], 5, 4129170786);
    _0x6368a1 = _0x239618(_0x6368a1, _0x3d46d0, _0x1b7d32, _0x2aa0a9, _0x2d7d41[_0x2cf141 + 6], 9, 3225465664);
    _0x2aa0a9 = _0x239618(_0x2aa0a9, _0x6368a1, _0x3d46d0, _0x1b7d32, _0x2d7d41[_0x2cf141 + 11], 14, 643717713);
    _0x1b7d32 = _0x239618(_0x1b7d32, _0x2aa0a9, _0x6368a1, _0x3d46d0, _0x2d7d41[_0x2cf141 + 0], 20, 3921069994);
    _0x3d46d0 = _0x239618(_0x3d46d0, _0x1b7d32, _0x2aa0a9, _0x6368a1, _0x2d7d41[_0x2cf141 + 5], 5, 3593408605);
    _0x6368a1 = _0x239618(_0x6368a1, _0x3d46d0, _0x1b7d32, _0x2aa0a9, _0x2d7d41[_0x2cf141 + 10], 9, 38016083);
    _0x2aa0a9 = _0x239618(_0x2aa0a9, _0x6368a1, _0x3d46d0, _0x1b7d32, _0x2d7d41[_0x2cf141 + 15], 14, 3634488961);
    _0x1b7d32 = _0x239618(_0x1b7d32, _0x2aa0a9, _0x6368a1, _0x3d46d0, _0x2d7d41[_0x2cf141 + 4], 20, 3889429448);
    _0x3d46d0 = _0x239618(_0x3d46d0, _0x1b7d32, _0x2aa0a9, _0x6368a1, _0x2d7d41[_0x2cf141 + 9], 5, 568446438);
    _0x6368a1 = _0x239618(_0x6368a1, _0x3d46d0, _0x1b7d32, _0x2aa0a9, _0x2d7d41[_0x2cf141 + 14], 9, 3275163606);
    _0x2aa0a9 = _0x239618(_0x2aa0a9, _0x6368a1, _0x3d46d0, _0x1b7d32, _0x2d7d41[_0x2cf141 + 3], 14, 4107603335);
    _0x1b7d32 = _0x239618(_0x1b7d32, _0x2aa0a9, _0x6368a1, _0x3d46d0, _0x2d7d41[_0x2cf141 + 8], 20, 1163531501);
    _0x3d46d0 = _0x239618(_0x3d46d0, _0x1b7d32, _0x2aa0a9, _0x6368a1, _0x2d7d41[_0x2cf141 + 13], 5, 2850285829);
    _0x6368a1 = _0x239618(_0x6368a1, _0x3d46d0, _0x1b7d32, _0x2aa0a9, _0x2d7d41[_0x2cf141 + 2], 9, 4243563512);
    _0x2aa0a9 = _0x239618(_0x2aa0a9, _0x6368a1, _0x3d46d0, _0x1b7d32, _0x2d7d41[_0x2cf141 + 7], 14, 1735328473);
    _0x1b7d32 = _0x239618(_0x1b7d32, _0x2aa0a9, _0x6368a1, _0x3d46d0, _0x2d7d41[_0x2cf141 + 12], 20, 2368359562);
    _0x3d46d0 = _0x2e217c(_0x3d46d0, _0x1b7d32, _0x2aa0a9, _0x6368a1, _0x2d7d41[_0x2cf141 + 5], 4, 4294588738);
    _0x6368a1 = _0x2e217c(_0x6368a1, _0x3d46d0, _0x1b7d32, _0x2aa0a9, _0x2d7d41[_0x2cf141 + 8], 11, 2272392833);
    _0x2aa0a9 = _0x2e217c(_0x2aa0a9, _0x6368a1, _0x3d46d0, _0x1b7d32, _0x2d7d41[_0x2cf141 + 11], 16, 1839030562);
    _0x1b7d32 = _0x2e217c(_0x1b7d32, _0x2aa0a9, _0x6368a1, _0x3d46d0, _0x2d7d41[_0x2cf141 + 14], 23, 4259657740);
    _0x3d46d0 = _0x2e217c(_0x3d46d0, _0x1b7d32, _0x2aa0a9, _0x6368a1, _0x2d7d41[_0x2cf141 + 1], 4, 2763975236);
    _0x6368a1 = _0x2e217c(_0x6368a1, _0x3d46d0, _0x1b7d32, _0x2aa0a9, _0x2d7d41[_0x2cf141 + 4], 11, 1272893353);
    _0x2aa0a9 = _0x2e217c(_0x2aa0a9, _0x6368a1, _0x3d46d0, _0x1b7d32, _0x2d7d41[_0x2cf141 + 7], 16, 4139469664);
    _0x1b7d32 = _0x2e217c(_0x1b7d32, _0x2aa0a9, _0x6368a1, _0x3d46d0, _0x2d7d41[_0x2cf141 + 10], 23, 3200236656);
    _0x3d46d0 = _0x2e217c(_0x3d46d0, _0x1b7d32, _0x2aa0a9, _0x6368a1, _0x2d7d41[_0x2cf141 + 13], 4, 681279174);
    _0x6368a1 = _0x2e217c(_0x6368a1, _0x3d46d0, _0x1b7d32, _0x2aa0a9, _0x2d7d41[_0x2cf141 + 0], 11, 3936430074);
    _0x2aa0a9 = _0x2e217c(_0x2aa0a9, _0x6368a1, _0x3d46d0, _0x1b7d32, _0x2d7d41[_0x2cf141 + 3], 16, 3572445317);
    _0x1b7d32 = _0x2e217c(_0x1b7d32, _0x2aa0a9, _0x6368a1, _0x3d46d0, _0x2d7d41[_0x2cf141 + 6], 23, 76029189);
    _0x3d46d0 = _0x2e217c(_0x3d46d0, _0x1b7d32, _0x2aa0a9, _0x6368a1, _0x2d7d41[_0x2cf141 + 9], 4, 3654602809);
    _0x6368a1 = _0x2e217c(_0x6368a1, _0x3d46d0, _0x1b7d32, _0x2aa0a9, _0x2d7d41[_0x2cf141 + 12], 11, 3873151461);
    _0x2aa0a9 = _0x2e217c(_0x2aa0a9, _0x6368a1, _0x3d46d0, _0x1b7d32, _0x2d7d41[_0x2cf141 + 15], 16, 530742520);
    _0x1b7d32 = _0x2e217c(_0x1b7d32, _0x2aa0a9, _0x6368a1, _0x3d46d0, _0x2d7d41[_0x2cf141 + 2], 23, 3299628645);
    _0x3d46d0 = _0x61ce04(_0x3d46d0, _0x1b7d32, _0x2aa0a9, _0x6368a1, _0x2d7d41[_0x2cf141 + 0], 6, 4096336452);
    _0x6368a1 = _0x61ce04(_0x6368a1, _0x3d46d0, _0x1b7d32, _0x2aa0a9, _0x2d7d41[_0x2cf141 + 7], 10, 1126891415);
    _0x2aa0a9 = _0x61ce04(_0x2aa0a9, _0x6368a1, _0x3d46d0, _0x1b7d32, _0x2d7d41[_0x2cf141 + 14], 15, 2878612391);
    _0x1b7d32 = _0x61ce04(_0x1b7d32, _0x2aa0a9, _0x6368a1, _0x3d46d0, _0x2d7d41[_0x2cf141 + 5], 21, 4237533241);
    _0x3d46d0 = _0x61ce04(_0x3d46d0, _0x1b7d32, _0x2aa0a9, _0x6368a1, _0x2d7d41[_0x2cf141 + 12], 6, 1700485571);
    _0x6368a1 = _0x61ce04(_0x6368a1, _0x3d46d0, _0x1b7d32, _0x2aa0a9, _0x2d7d41[_0x2cf141 + 3], 10, 2399980690);
    _0x2aa0a9 = _0x61ce04(_0x2aa0a9, _0x6368a1, _0x3d46d0, _0x1b7d32, _0x2d7d41[_0x2cf141 + 10], 15, 4293915773);
    _0x1b7d32 = _0x61ce04(_0x1b7d32, _0x2aa0a9, _0x6368a1, _0x3d46d0, _0x2d7d41[_0x2cf141 + 1], 21, 2240044497);
    _0x3d46d0 = _0x61ce04(_0x3d46d0, _0x1b7d32, _0x2aa0a9, _0x6368a1, _0x2d7d41[_0x2cf141 + 8], 6, 1873313359);
    _0x6368a1 = _0x61ce04(_0x6368a1, _0x3d46d0, _0x1b7d32, _0x2aa0a9, _0x2d7d41[_0x2cf141 + 15], 10, 4264355552);
    _0x2aa0a9 = _0x61ce04(_0x2aa0a9, _0x6368a1, _0x3d46d0, _0x1b7d32, _0x2d7d41[_0x2cf141 + 6], 15, 2734768916);
    _0x1b7d32 = _0x61ce04(_0x1b7d32, _0x2aa0a9, _0x6368a1, _0x3d46d0, _0x2d7d41[_0x2cf141 + 13], 21, 1309151649);
    _0x3d46d0 = _0x61ce04(_0x3d46d0, _0x1b7d32, _0x2aa0a9, _0x6368a1, _0x2d7d41[_0x2cf141 + 4], 6, 4149444226);
    _0x6368a1 = _0x61ce04(_0x6368a1, _0x3d46d0, _0x1b7d32, _0x2aa0a9, _0x2d7d41[_0x2cf141 + 11], 10, 3174756917);
    _0x2aa0a9 = _0x61ce04(_0x2aa0a9, _0x6368a1, _0x3d46d0, _0x1b7d32, _0x2d7d41[_0x2cf141 + 2], 15, 718787259);
    _0x1b7d32 = _0x61ce04(_0x1b7d32, _0x2aa0a9, _0x6368a1, _0x3d46d0, _0x2d7d41[_0x2cf141 + 9], 21, 3951481745);
    _0x3d46d0 = _0xd236b1(_0x3d46d0, _0x1afbe4);
    _0x1b7d32 = _0xd236b1(_0x1b7d32, _0x13cfd8);
    _0x2aa0a9 = _0xd236b1(_0x2aa0a9, _0x3fa263);
    _0x6368a1 = _0xd236b1(_0x6368a1, _0x36c4eb);
  }
  return (_0x58f5a6(_0x3d46d0) + _0x58f5a6(_0x1b7d32) + _0x58f5a6(_0x2aa0a9) + _0x58f5a6(_0x6368a1)).toLowerCase();
}
async function checkEnv() {
  if (userCookie) {
    let _0x34f652 = envSplitor[0];
    for (let _0x5be15e of envSplitor) if (userCookie.indexOf(_0x5be15e) > -1) {
      _0x34f652 = _0x5be15e;
      break;
    }
    for (let _0xbd7267 of userCookie.split(_0x34f652)) _0xbd7267 && userList.push(new UserInfo(_0xbd7267));
    userCount = userList.length;
  } else {
    console.log("未找到任何账号");
  }
  console.log("找到 " + userCount + "个账号");
  return true;
}
function popu(_0x4aaeef, _0x559a4a, _0x568309 = "") {
  _0x4aaeef.replace("//", "/").split("/")[1];
  let _0x472169 = {
    url: _0x4aaeef,
    headers: _0x559a4a,
    timeout: 12000
  };
  _0x568309 && (_0x472169.body = _0x568309, _0x472169.headers["Content-Length"] = _0x568309?.["length"] || 0);
  return _0x472169;
}
async function httpRequest(_0x587f1d, _0x25c665) {
  result = null;
  resurq = null;
  resurp = null;
  return new Promise(_0x309752 => {
    $.send(_0x587f1d, _0x25c665, async (_0x2c9953, _0x2bf65b, _0x1b3a4a) => {
      try {
        if (!(resurq = _0x2bf65b, resurp = _0x1b3a4a, _0x2c9953)) {
          if (_0x1b3a4a.body) {
            if ("object" == typeof _0x1b3a4a.body) {
              result = _0x1b3a4a.body;
            } else {
              try {
                result = JSON.parse(_0x1b3a4a.body);
              } catch (_0x57da83) {
                result = _0x1b3a4a.body;
              }
            }
          }
        }
      } catch (_0x5a15b3) {
        console.log(_0x5a15b3);
      } finally {
        _0x309752();
      }
    });
  });
}
function randomszxx(_0x493015) {
  _0x493015 = _0x493015 || 32;
  var _0x11476b = "qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890";
  var _0x472253 = _0x11476b.length;
  var _0x444d26 = "";
  for (i = 0; i < _0x493015; i++) {
    _0x444d26 += _0x11476b.charAt(Math.floor(Math.random() * _0x472253));
  }
  return _0x444d26;
}
function encryptrsa(_0x20f67a, _0x237a24) {
  let _0x338896 = new NodeRSA("-----BEGIN PUBLIC KEY-----\n" + _0x237a24 + "\n-----END PUBLIC KEY-----");
  _0x338896.setOptions({
    encryptionScheme: "pkcs1"
  });
  let _0x295b12 = _0x338896.encrypt(_0x20f67a, "base64", "utf8");
  return _0x295b12;
}
function Env(_0x448b8c, _0x2d3906) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  return new class {
    constructor(_0x4aa266, _0x5ecb78) {
      this.name = _0x4aa266;
      this.notifyStr = "";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x5ecb78);
      console.log(this.name + " 开始运行：\n");
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    getdata(_0x59962b) {
      let _0x127667 = this.getval(_0x59962b);
      if (/^@/.test(_0x59962b)) {
        let [, _0x3f85f4, _0xeece47] = /^@(.*?)\.(.*?)$/.exec(_0x59962b);
        let _0x3e6aab = _0x3f85f4 ? this.getval(_0x3f85f4) : "";
        if (_0x3e6aab) {
          try {
            let _0x3786f7 = JSON.parse(_0x3e6aab);
            _0x127667 = _0x3786f7 ? this.lodash_get(_0x3786f7, _0xeece47, "") : _0x127667;
          } catch (_0x1e5523) {
            _0x127667 = "";
          }
        }
      }
      return _0x127667;
    }
    setdata(_0x15f0ab, _0xb1e01d) {
      let _0x244ad1 = false;
      if (/^@/.test(_0xb1e01d)) {
        let [, _0x3727ec, _0x4e7f7a] = /^@(.*?)\.(.*?)$/.exec(_0xb1e01d);
        let _0x33ecad = this.getval(_0x3727ec);
        try {
          let _0x31db2f = JSON.parse(_0x3727ec ? "null" === _0x33ecad ? null : _0x33ecad || "{}" : "{}");
          this.lodash_set(_0x31db2f, _0x4e7f7a, _0x15f0ab);
          _0x244ad1 = this.setval(JSON.stringify(_0x31db2f), _0x3727ec);
        } catch (_0x1626c9) {
          let _0x52efe5 = {};
          this.lodash_set(_0x52efe5, _0x4e7f7a, _0x15f0ab);
          _0x244ad1 = this.setval(JSON.stringify(_0x52efe5), _0x3727ec);
        }
      } else {
        _0x244ad1 = this.setval(_0x15f0ab, _0xb1e01d);
      }
      return _0x244ad1;
    }
    getval(_0x559e91) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x559e91) : this.isQuanX() ? $prefs.valueForKey(_0x559e91) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x559e91]) : this.data && this.data[_0x559e91] || null;
    }
    setval(_0x423e0e, _0x26bae5) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x423e0e, _0x26bae5) : this.isQuanX() ? $prefs.setValueForKey(_0x423e0e, _0x26bae5) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x26bae5] = _0x423e0e, this.writedata(), true) : this.data && this.data[_0x26bae5] || null;
    }
    send(_0x19a924, _0xa9ef7d, _0x5226af = () => {}) {
      if ("get" != _0x19a924 && "post" != _0x19a924 && "put" != _0x19a924 && "delete" != _0x19a924) {
        console.log("无效的http方法：" + _0x19a924);
        return;
      }
      if ("get" == _0x19a924 && _0xa9ef7d.headers ? (delete _0xa9ef7d.headers["Content-Type"], delete _0xa9ef7d.headers["Content-Length"]) : _0xa9ef7d.body && _0xa9ef7d.headers && (_0xa9ef7d.headers["Content-Type"] || (_0xa9ef7d.headers["Content-Type"] = "application/x-www-form-urlencoded")), this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (_0xa9ef7d.headers = _0xa9ef7d.headers || {}, Object.assign(_0xa9ef7d.headers, {
          "X-Surge-Skip-Scripting": false
        }));
        let _0x3df300 = {
          method: _0x19a924,
          url: _0xa9ef7d.url,
          headers: _0xa9ef7d.headers,
          timeout: _0xa9ef7d.timeout,
          data: _0xa9ef7d.body
        };
        "get" == _0x19a924 && delete _0x3df300.data;
        $axios(_0x3df300).then(_0x462ba5 => {
          let {
            status: _0x531574,
            request: _0x298dff,
            headers: _0x57cd85,
            data: _0x543d9a
          } = _0x462ba5;
          _0x5226af(null, _0x298dff, {
            statusCode: _0x531574,
            headers: _0x57cd85,
            body: _0x543d9a
          });
        }).catch(_0x45633d => console.log(_0x45633d));
      } else {
        if (this.isQuanX()) {
          _0xa9ef7d.method = _0x19a924.toUpperCase();
          this.isNeedRewrite && (_0xa9ef7d.opts = _0xa9ef7d.opts || {}, Object.assign(_0xa9ef7d.opts, {
            hints: false
          }));
          $task.fetch(_0xa9ef7d).then(_0x5a7bd0 => {
            let {
              statusCode: _0x3bda92,
              request: _0x253ab0,
              headers: _0x9c64da,
              body: _0x2f7bc5
            } = _0x5a7bd0;
            _0x5226af(null, _0x253ab0, {
              statusCode: _0x3bda92,
              headers: _0x9c64da,
              body: _0x2f7bc5
            });
          }, _0x1b6105 => _0x5226af(_0x1b6105));
        } else {
          if (this.isNode()) {
            this.got = this.got ? this.got : require("got");
            let {
              url: _0x2c56d1,
              ..._0x1362e1
            } = _0xa9ef7d;
            this.instance = this.got.extend({
              followRedirect: false
            });
            this.instance[_0x19a924](_0x2c56d1, _0x1362e1).then(_0x29a59f => {
              let {
                statusCode: _0x1daeb1,
                request: _0x39a3ef,
                headers: _0x70e668,
                body: _0x187a37
              } = _0x29a59f;
              _0x5226af(null, _0x39a3ef, {
                statusCode: _0x1daeb1,
                headers: _0x70e668,
                body: _0x187a37
              });
            }, _0x519e04 => {
              let {
                message: _0x551f95,
                response: _0x3fe540
              } = _0x519e04;
              _0x5226af(_0x551f95, _0x3fe540, _0x3fe540 && _0x3fe540.body);
            });
          }
        }
      }
    }
    time(_0x20b511) {
      let _0x80c6ed = {
        "M+": new Date().getMonth() + 1,
        "d+": new Date().getDate(),
        "h+": new Date().getHours(),
        "m+": new Date().getMinutes(),
        "s+": new Date().getSeconds(),
        "q+": Math.floor((new Date().getMonth() + 3) / 3),
        S: new Date().getMilliseconds()
      };
      for (let _0x1bd4a7 in /(y+)/.test(_0x20b511) && (_0x20b511 = _0x20b511.replace(RegExp.$1, (new Date().getFullYear() + "").substr(4 - RegExp.$1.length))), _0x80c6ed) RegExp("(" + _0x1bd4a7 + ")").test(_0x20b511) && (_0x20b511 = _0x20b511.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x80c6ed[_0x1bd4a7] : ("00" + _0x80c6ed[_0x1bd4a7]).substr(("" + _0x80c6ed[_0x1bd4a7]).length)));
      return _0x20b511;
    }
    async showmsg() {
      if (!this.notifyStr) {
        return;
      }
      let _0x5add8e = this.name + " 运行通知\n\n" + this.notifyStr;
      if ($.isNode()) {
        var _0x55f720 = require("./sendNotify");
        console.log("\n============== 推送 ==============");
        await _0x55f720.sendNotify(this.name, _0x5add8e);
      } else {
        this.msg(_0x5add8e);
      }
    }
    logAndNotify(_0x64f328) {
      console.log(_0x64f328);
      this.notifyStr += _0x64f328;
      this.notifyStr += "\n";
    }
    msg(_0x196563 = t, _0x4ea3b5 = "", _0x95c16a = "", _0x4037de) {
      let _0x2c6abc = _0x14e78f => {
        if (!_0x14e78f) {
          return _0x14e78f;
        }
        if ("string" == typeof _0x14e78f) {
          return this.isLoon() ? _0x14e78f : this.isQuanX() ? {
            "open-url": _0x14e78f
          } : this.isSurge() ? {
            url: _0x14e78f
          } : undefined;
        }
        if ("object" == typeof _0x14e78f) {
          if (this.isLoon()) {
            return {
              openUrl: _0x14e78f.openUrl || _0x14e78f.url || _0x14e78f["open-url"],
              mediaUrl: _0x14e78f.mediaUrl || _0x14e78f["media-url"]
            };
          }
          if (this.isQuanX()) {
            return {
              "open-url": _0x14e78f["open-url"] || _0x14e78f.url || _0x14e78f.openUrl,
              "media-url": _0x14e78f["media-url"] || _0x14e78f.mediaUrl
            };
          }
          if (this.isSurge()) {
            return {
              url: _0x14e78f.url || _0x14e78f.openUrl || _0x14e78f["open-url"]
            };
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x196563, _0x4ea3b5, _0x95c16a, _0x2c6abc(_0x4037de)) : this.isQuanX() && $notify(_0x196563, _0x4ea3b5, _0x95c16a, _0x2c6abc(_0x4037de)));
      let _0x25a794 = ["", "============== 系统通知 =============="];
      _0x25a794.push(_0x196563);
      _0x4ea3b5 && _0x25a794.push(_0x4ea3b5);
      _0x95c16a && _0x25a794.push(_0x95c16a);
      console.log(_0x25a794.join("\n"));
    }
    getMin(_0x27de3e, _0x2902b0) {
      return _0x27de3e < _0x2902b0 ? _0x27de3e : _0x2902b0;
    }
    getMax(_0x57b8d3, _0x37f1b7) {
      return _0x57b8d3 < _0x37f1b7 ? _0x37f1b7 : _0x57b8d3;
    }
    padStr(_0x4c134d, _0x330667, _0x8a3e26 = "0") {
      let _0x4acd1c = String(_0x4c134d);
      let _0x48be81 = _0x330667 > _0x4acd1c.length ? _0x330667 - _0x4acd1c.length : 0;
      let _0x1da2e8 = "";
      for (let _0x35942c = 0; _0x35942c < _0x48be81; _0x35942c++) {
        _0x1da2e8 += _0x8a3e26;
      }
      return _0x1da2e8 + _0x4acd1c;
    }
    json2str(_0x74fb2a, _0x5c125a, _0x507988 = false) {
      let _0x465324 = [];
      for (let _0x3511bf of Object.keys(_0x74fb2a).sort()) {
        let _0x104c6d = _0x74fb2a[_0x3511bf];
        _0x104c6d && _0x507988 && (_0x104c6d = encodeURIComponent(_0x104c6d));
        _0x465324.push(_0x3511bf + "=" + _0x104c6d);
      }
      return _0x465324.join(_0x5c125a);
    }
    str2json(_0x3a163a, _0x4331e8 = false) {
      let _0x4e35e0 = {};
      for (let _0x5d3c1e of _0x3a163a.split("#")) {
        if (!_0x5d3c1e) {
          continue;
        }
        let _0x810614 = _0x5d3c1e.indexOf("=");
        if (-1 == _0x810614) {
          continue;
        }
        let _0x4b25c2 = _0x5d3c1e.substr(0, _0x810614);
        let _0x792d82 = _0x5d3c1e.substr(_0x810614 + 1);
        _0x4331e8 && (_0x792d82 = decodeURIComponent(_0x792d82));
        _0x4e35e0[_0x4b25c2] = _0x792d82;
      }
      return _0x4e35e0;
    }
    randomString(_0x3bfb36, _0x4c378f = "abcdef0123456789") {
      let _0x17e316 = "";
      for (let _0x4bc9e9 = 0; _0x4bc9e9 < _0x3bfb36; _0x4bc9e9++) {
        _0x17e316 += _0x4c378f.charAt(Math.floor(Math.random() * _0x4c378f.length));
      }
      return _0x17e316;
    }
    randomList(_0x436bd8) {
      return _0x436bd8[Math.floor(Math.random() * _0x436bd8.length)];
    }
    wait(_0x4b41d3) {
      return new Promise(_0x255a20 => setTimeout(_0x255a20, _0x4b41d3));
    }
    done(_0x4c3684 = {}) {
      let _0x31ec42 = (new Date().getTime() - this.startTime) / 1000;
      console.log("\n" + this.name + " 运行结束，共运行了 " + _0x31ec42 + " 秒！");
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x4c3684);
    }
  }(_0x448b8c, _0x2d3906);
}