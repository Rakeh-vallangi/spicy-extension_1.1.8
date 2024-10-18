(async () => {
  const params = JSON.parse(document.currentScript.dataset.params);
  const response = {
    id: params.resultMessageId
  };
  const app = document.querySelector(".main-wrapper");
  try {
    if (app !== null) {
      const results = {
        authId: app.__vue__.authUserId,
        avatar: app.__vue__.authUser.avatar,
        name: app.__vue__.authUser.name,
        username: app.__vue__.authUser.username
      };
      response.result = JSON.stringify(results);
    } else {
      response.error = "No app found";
    }
  } catch (err) {
    response.error = JSON.stringify(err);
  }
  window.postMessage(response, "*");
})();
