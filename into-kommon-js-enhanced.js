;                 var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {;                     return new (P || (P = Promise))(function (resolve, reject) {;                         function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } };                         function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } };                         function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); };                         step((generator = generator.apply(thisArg, _arguments)).next());;                     });;                 };;             global['into-kommon-js'] = function (_, Kotlin) {
  'use strict';
  var imported$Exception = Kotlin.kotlin.Exception;
  function get_KOMMON_HOME() {
    var tmp$0;
    return (tmp$0 = getenv('INTO_KOMMON_HOME')) != null ? tmp$0 : die('I want INTO_KOMMON_HOME environment variable');
  }
  function bitch(msg) {
    if (msg === void 0)
      msg = 'Just bitching...';
    throw new imported$Exception(msg);
  }
  function imf(what) {
    if (what === void 0)
      what = 'me';
    throw new imported$Exception('Implement ' + what + ', please, fuck you');
  }
  function wtf(msg) {
    if (msg === void 0)
      msg = "...WTF didn't you describe this WTF?";
    throw new imported$Exception('WTF: ' + msg);
  }
  function die(msg) {
    if (msg === void 0)
      msg = "You've just killed me, motherfucker!";
    throw new imported$Exception('Aarrgghh... ' + msg);
  }
  function get_dontCallMe() {
    return wtf("Don't call me, motherfucker");
  }
  function measuringAndPrinting(block) {
    var start = currentTimeMillis();
    var res = block();
    var ms = currentTimeMillis().subtract(start);
    Kotlin.println('COOL [' + ms + 'ms]');
    return res;
  }
  var ifOrEmpty = Kotlin.defineInlineFunction('into-kommon-js.into.kommon.ifOrEmpty_rbtfcw$', function (test, block) {
    return test ? block() : '';
  });
  var letu = Kotlin.defineInlineFunction('into-kommon-js.into.kommon.letu_ji1yox$', function ($receiver, block) {
    block($receiver);
  });
  function get_global() {
    return isBrowser() ? window : global;
  }
  function get_gloshit() {
    return get_global();
  }
  function isBrowser() {
    return typeof window == 'object';
  }
  function isNodeJS() {
    return !isBrowser();
  }
  function get_process() {
    return process;
  }
  function currentTimeMillis() {
    return Kotlin.Long.fromInt((new Date()).getTime());
  }
  function currentTimeInt() {
    return (new Date()).getTime();
  }
  function getenv(name) {
    return get_process().env[name];
  }
  function newNativePromise(arg) {
    return new Promise(arg);
  }
  var package$into = _.into || (_.into = {});
  var package$kommon = package$into.kommon || (package$into.kommon = {});
  Object.defineProperty(package$kommon, 'KOMMON_HOME', {
    get: get_KOMMON_HOME
  });
  package$kommon.bitch_61zpoe$ = bitch;
  package$kommon.imf_61zpoe$ = imf;
  package$kommon.wtf_61zpoe$ = wtf;
  package$kommon.die_61zpoe$ = die;
  Object.defineProperty(package$kommon, 'dontCallMe', {
    get: get_dontCallMe
  });
  package$kommon.measuringAndPrinting_un3fny$ = measuringAndPrinting;
  package$kommon.ifOrEmpty_rbtfcw$ = ifOrEmpty;
  package$kommon.letu_ji1yox$ = letu;
  Object.defineProperty(package$kommon, 'global', {
    get: get_global
  });
  Object.defineProperty(package$kommon, 'gloshit', {
    get: get_gloshit
  });
  package$kommon.isBrowser = isBrowser;
  package$kommon.isNodeJS = isNodeJS;
  Object.defineProperty(package$kommon, 'process', {
    get: get_process
  });
  package$kommon.currentTimeMillis = currentTimeMillis;
  package$kommon.currentTimeInt = currentTimeInt;
  package$kommon.getenv_61zpoe$ = getenv;
  package$kommon.newNativePromise_za3rmp$ = newNativePromise;
  Kotlin.defineModule('into-kommon-js', _);
  return _;
}(typeof global['into-kommon-js'] === 'undefined' ? {} : global['into-kommon-js'], kotlin);

//@ sourceMappingURL=into-kommon-js.js.map
