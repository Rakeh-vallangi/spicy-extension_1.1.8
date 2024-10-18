async function runInPageContext() {
  const resultMessageId = parseInt("" + Math.floor(Math.random() * 100 + 1) + (/* @__PURE__ */ new Date()).getTime());
  var s = document.createElement("script");
  s.src = chrome.runtime.getURL("src/getVueData/getVueData.js");
  s.dataset.params = JSON.stringify({
    resultMessageId
  });
  s.onload = function() {
    this.remove();
  };
  (document.head || document.documentElement).appendChild(s);
  let resolve, reject;
  const promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });
  function onResult(event) {
    const data = Object(event.data);
    if (data.id === resultMessageId) {
      window.removeEventListener("message", onResult);
      if (data.error !== void 0) {
        return reject(JSON.parse(data.error));
      }
      return resolve(data.result !== void 0 ? JSON.parse(data.result) : void 0);
    }
  }
  window.addEventListener("message", onResult);
  return promise;
}
chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
  if (request.type !== "SPICY:connect-onlyfans") {
    return;
  }
  runInPageContext().then((json) => {
    if (json) {
      chrome.runtime.sendMessage({
        type: "SPICY:onlyfans-credentials",
        uid: json.authId,
        userAgent: window.navigator.userAgent,
        bcTokenSha: localStorage.getItem("bcTokenSha"),
        // UI extension only
        avatar: json.avatar,
        name: json.name,
        username: json.username
      });
    }
  });
});
if (!window["contentScriptInjected"]) {
  window["contentScriptInjected"] = true;
}
