import { s as ss } from "../../assets/module-mYsCuRZy.js";
ss.init("phc_DwrRlo4Qt118JTvubGTyA4zLtnxwlFmVNX5S30no58z", {
  api_host: "https://us.i.posthog.com"
});
chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === "install") {
    ss.capture("Extension installed");
  }
  try {
    const manifestData = chrome.runtime.getManifest();
    ss.capture("$set", {
      $set: {
        extension_version: manifestData.version
      }
    });
  } catch (e) {
  }
});
