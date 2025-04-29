// ==UserScript==
// @name         Bypass.city improved
// @namespace    bypass-city
// @homepageURL  https://bypass.city
// @supportURL   https://discord.gg/bypass-city
// @description  Bypasses link shorteners instantly :3
// @match        *://*.adshnk.com/*
// @match        *://*.adshrink.it/*
// @match        *://*.shrink-service.it/*
// @match        *://adfoc.us/*
// @match        *://boost.ink/*
// @match        *://bst.gg/*
// @match        *://bst.wtf/*
// @match        *://booo.st/*
// @match        *://boost.fusedgt.com/*
// @match        *://thedragonslayer2.github.io/*
// @match        *://empebau.eu/*
// @match        *://www.google.com/url*
// @match        *://is.gd/*
// @match        *://justpaste.it/redirect/*
// @match        *://leasurepartment.xyz/*
// @match        *://letsboost.net/*
// @match        *://linkvertise.com/*
// @match        *://loot-link.com/*
// @match        *://loot-link.co/*
// @match        *://loot-link.org/*
// @match        *://loot-link.net/*
// @match        *://loot-link.info/*
// @match        *://loot-links.com/*
// @match        *://loot-links.co/*
// @match        *://loot-links.org/*
// @match        *://loot-links.net/*
// @match        *://loot-links.info/*
// @match        *://lootlinks.com/*
// @match        *://lootlinks.co/*
// @match        *://lootlinks.org/*
// @match        *://lootlinks.net/*
// @match        *://lootlinks.info/*
// @match        *://lootdest.com/*
// @match        *://lootdest.co/*
// @match        *://lootdest.org/*
// @match        *://lootdest.net/*
// @match        *://lootdest.info/*
// @match        *://links-loot.com/*
// @match        *://links-loot.co/*
// @match        *://links-loot.org/*
// @match        *://links-loot.net/*
// @match        *://links-loot.info/*
// @match        *://linksloot.com/*
// @match        *://linksloot.co/*
// @match        *://linksloot.org/*
// @match        *://linksloot.net/*
// @match        *://linksloot.info/*
// @match        *://lootlink.com/*
// @match        *://lootlink.co/*
// @match        *://lootlink.org/*
// @match        *://lootlink.net/*
// @match        *://lootlink.info/*
// @match        *://mboost.me/*
// @match        *://rekonise.com/*
// @match        *://rkns.link/*
// @match        *://shorte.st/*
// @match        *://sh.st/*
// @match        *://gestyy.com/*
// @match        *://destyy.com/*
// @match        *://social-unlock.com/*
// @match        *://socialwolvez.com/app/l/*
// @match        *://sub1s.com/*
// @match        *://sub2get.com/*
// @match        *://subtolink.com/*
// @match        *://sub2unlock.com/*
// @match        *://unlocknow.net/*
// @match        *://v.gd/*
// @match        https://bypass.city/*
// @match        https://adbypass.org/*
// @match        http://localhost:3000/*
// @license      CC BY-NC 4.0 (https://creativecommons.org/licenses/by-nc/4.0/).
// @exclude      *://publisher.linkvertise.com/*
// @exclude      *://linkvertise.com/adfly-notice*
// @exclude      *://linkvertise.com/search*
// @exclude      *://linkvertise.com/login*
// @exclude      *://linkvertise.com/profile*
// @exclude      *://blog.linkvertise.com
// @exclude      *://blog.linkvertise.com/*
// @exclude      *://linkvertise.com/assets/vendor/*
// @exclude      *://publisher.linkvertise.com/*
// @exclude      *://link-mutation.linkvertise.com/*
// @exclude      *://linkvertise.com/assets/external/thinksuggest
// @version      14.0.3
// @releaseDate  2025-04-29T12:00:00.000Z
// @author       God
// @connect      bypass.city
// @connect      adbypass.org
// @icon         https://adbypass.org/favicon.ico
// @grant        GM_getValue
// @grant        GM.getValue
// @grant        GM_setValue
// @grant        GM.setValue
// @grant        GM_deleteValue
// @grant        GM.deleteValue
// @grant        GM_addStyle
// @grant        GM.addStyle
// @grant        GM_xmlhttpRequest
// @grant        GM.xmlHttpRequest
// @grant        GM.info
// @grant        GM_info
// @grant        GM_getResourceURL
// @grant        GM.getResourceURL
// ==/UserScript==

/*
release: 14.0.3 (optimized), 4/29/2025, 12:00:00 PM
Discord: https://discord.gg/bypass-city
Linkvertise Bypass by "bypass.city team" is licensed under CC BY-NC 4.0 (https://creativecommons.org/licenses/by-nc/4.0/).
Linkvertise Bypass © 2025 by bypass.city team.
*/

(() => {
  // src/polyfills.ts
  const UserScript = {
    getValue: (key, defaultValue) =>
      typeof GM_getValue === "undefined"
        ? GM.getValue(key, defaultValue)
        : new Promise((resolve) => resolve(GM_getValue(key, defaultValue))),
    setValue: (key, value) =>
      typeof GM_setValue === "undefined"
        ? GM.setValue(key, value)
        : new Promise((resolve) => resolve(GM_setValue(key, value))),
    deleteValue: (key) =>
      typeof GM_deleteValue === "undefined"
        ? GM.deleteValue(key)
        : new Promise((resolve) => resolve(GM_deleteValue(key))),
    addStyle: (css) =>
      typeof GM_addStyle === "undefined"
        ? GM.addStyle(css)
        : new Promise((resolve) => resolve(GM_addStyle(css))),
    xmlHttpRequest: (details) =>
      typeof GM_xmlhttpRequest === "undefined"
        ? GM.xmlHttpRequest(details)
        : GM_xmlhttpRequest(details),
    getResourceURL: (name, fallbackUrl) =>
      typeof GM_getResourceURL !== "undefined"
        ? new Promise((resolve) => resolve(GM_getResourceURL(name)))
        : typeof GM.getResourceUrl !== "undefined"
        ? GM.getResourceUrl(name)
        : new Promise((resolve) => resolve(fallbackUrl)),
    info: typeof GM_info === "undefined" ? GM.info : GM_info,
  };

  // src/config.ts
  const config = {
    version: UserScript.info.script.version,
    buildTime: "4/29/2025, 12:00:00 PM",
    branch: "release",
    release: "optimized",
    installed: true,
    releaseTag: "14.0.3 (optimized)",
    downloadURL: GM_info.script.downloadURL,
  };

  // src/gmWrappedStorage.ts
  const WrappedGet = async (key) => {
    const value = await UserScript.getValue(key);
    return value ? JSON.parse(value) : undefined;
  };
  const WrappedSet = async (key, value) => {
    await UserScript.setValue(key, JSON.stringify(value));
  };

  // src/utils.ts
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // src/notify.scss
  const notify_default = `.notification-tray {
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 4000000;
  }
  .notification {
    margin: 10px;
    padding: 10px;
    background-color: #25262b;
    color: white;
    transition: opacity 0.3s;
    width: 250px;
    border-radius: 8px;
    border: 1px solid #3b5bdb;
  }
  .notification .grid-container {
    display: grid;
    grid-template-columns: auto auto;
    gap: 8px;
  }
  .notification .links {
    display: flex;
    justify-content: right;
    font-size: 0.7rem;
  }
  .notification .links a, .notification .links span {
    color: white;
    padding: 3px;
    opacity: 0.8;
  }
  .grid-item img {
    margin-top: 10px;
    width: 24px;
  }
  .grid-item h3 {
    padding-top: 8px;
    font-size: 1.2rem;
    color: white;
  }
  .grid-item p {
    font-size: 0.9rem;
    color: white;
  }
  .grid-item p a {
    font-weight: 500;
    text-decoration: underline;
  }
  .grid-item h3, .grid-item p {
    margin: 0;
  }`;

  // src/notify-element.html
  const notify_element_default = `<div id="bypass-notification" class="notification">
    <div class="grid-container">
      <div class="grid-item">
        <img height="24" id="bypass-logo" alt="B">
      </div>
      <div class="grid-item">
        <h3 id="title"></h3>
        <p><span id="text"></span><a id="help" href="https://discord.gg/tX8G9G5BMV">Support</a></p>
      </div>
    </div>
    <div id="links" class="links">
      <span id="version">Release</span>
      <span>•</span>
      <a href="https://discord.gg/tX8G9G5BMV">Support</a>
      <span>•</span>
      <a href="https://bypass.city/privacy">Privacy</a>
    </div>
  </div>`;

  // src/logo.svg
  const logo_default = 'data:image/svg+xml,<svg width="1280" height="1280" viewBox="0 0 1280 1280" fill="none" xmlns="http://www.w3.org/2000/svg">%0A<path d="M109 180C109 140.788 140.788 109 180 109H1101C1140.21 109 1172 140.788 1172 180V1101C1172 1140.21 1140.21 1172 1101 1172H180C140.788 1172 109 1140.21 109 1101V180Z" fill="%231A1B1E"/>%0A<path d="M611.881 198C1078.56 198 1078.56 733.341 611.881 733.341H407V198H611.881Z" fill="url(%23paint0_linear_1_4)"/>%0A<path d="M611.881 547.659C1078.56 547.659 1078.56 1083 611.881 1083H407V547.659H611.881Z" fill="%231971C2"/>%0A<defs>%0A<linearGradient id="paint0_linear_1_4" x1="684.443" y1="198" x2="684.443" y2="733.341" gradientUnits="userSpaceOnUse">%0A<stop stop-color="%235F3DC4"/>%0A<stop offset="1" stop-color="%235F3DC4" stop-opacity="0"/>%0A</linearGradient>%0A</defs>%0A</svg>%0A';

  // src/notify.ts
  window.scriptStatus = { notifyCount: 0 };
  class BypassElement extends HTMLElement {
    static get observedAttributes() {
      return ["text", "title", "is-help"];
    }
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: "open" });
      const div = document.createElement("div");
      div.innerHTML = notify_element_default;
      const style = document.createElement("style");
      style.textContent = notify_default;
      shadow.appendChild(style);
      shadow.appendChild(div);
      shadow.getElementById("bypass-notification").style.opacity = "0";
      shadow.getElementById("version").innerText = config.releaseTag;
      const logoImg = shadow.querySelector("img#bypass-logo");
      logoImg.src = logo_default;
      logoImg.onload = () => {
        shadow.getElementById("bypass-notification").style.opacity = "1";
      };
    }
    connectedCallback() {
      this.updateContent();
    }
    attributeChangedCallback() {
      this.updateContent();
    }
    updateContent() {
      const shadow = this.shadowRoot;
      const text = this.getAttribute("text") || "";
      const title = this.getAttribute("title") || "";
      const isHelp = this.hasAttribute("is-help");
      const hideLinks = this.hasAttribute("hide-links");
      if (isHelp || hideLinks) shadow.getElementById("links").remove();
      shadow.getElementById("help").style.display = isHelp ? "block" : "none";
      shadow.querySelector("#title").textContent = title;
      shadow.querySelector("#text").textContent = text;
    }
  }
  customElements.define("bypass-notification", BypassElement);

  const setupNotifications = () => {
    const tray = document.createElement("div");
    tray.id = "bypass-tray";
    tray.classList.add("notification-tray");
    const style = document.createElement("style");
    style.textContent = notify_default;
    document.head.appendChild(style);
    document.body.appendChild(tray);
  };

  const notify = ({ text, title, isHelp, hideLinks }) => {
    if (!document.getElementById("bypass-tray")) setupNotifications();
    const notificationElement = document.createElement("bypass-notification");
    notificationElement.setAttribute("title", title || "Bypass in progress...");
    notificationElement.setAttribute("text", text || "Redirecting...");
    if (hideLinks) notificationElement.setAttribute("hide-links", "true");
    if (isHelp) notificationElement.setAttribute("is-help", "true");
    document.getElementById("bypass-tray").appendChild(notificationElement);
    setTimeout(() => notificationElement.remove(), 1000);
  };

  // src/fetch.ts
  const jsonFetch = async (url, options) => {
    return new Promise((resolve, reject) => {
      UserScript.xmlHttpRequest({
        method: options.method,
        data: options.data ? JSON.stringify(options.data) : undefined,
        headers: options.headers,
        url,
        onload: (response) => {
          if (response.responseText && typeof response.responseText === "string") {
            try {
              resolve(JSON.parse(response.responseText));
            } catch {
              reject();
            }
          } else {
            reject();
          }
        },
        onerror: reject,
        ontimeout: reject,
        onabort: reject,
        timeout: 3000, // Reduced timeout for faster failure
      });
    });
  };

  // src/ping.ts
  const ping = async () => {
    const cachedPing = await UserScript.getValue("ping_result", null);
    if (cachedPing !== null) return cachedPing;
    try {
      const data = await jsonFetch("https://bypass.city/.well-known/ping.json", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      await UserScript.setValue("ping_result", data.ping);
      return data.ping;
    } catch {
      await UserScript.setValue("ping_result", false);
      return false;
    }
  };

  // src/bypassConfig.ts
  const regexObjects = [
    {
      name: "adshrink",
      regex: /^https?:\/\/(www\.)?(adshnk\.com|adshrink\.it|shrink-service\.it)/i,
      valid_url_regex: /^https?:\/\/(www\.)?(adshnk\.com|adshrink\.it|shrink-service\.it)\/.+/,
      url_base: "https://adshnk.com",
    },
    {
      name: "adfocus",
      regex: /^https?:\/\/adfoc\.us/i,
      valid_url_regex: /^https?:\/\/adfoc\.us\/(?:\d+|serve\/\?id=\d+)$/,
      url_base: "https://adfoc.us",
    },
    {
      name: "boost.ink",
      regex: /^https?:\/\/(boost\.ink|bst\.gg|bst\.wtf|booo\.st)/i,
      valid_url_regex: /^https?:\/\/(boost\.ink|bst\.gg|bst\.wtf|booo\.st)\/[a-zA-Z0-9_]+\/?$/,
      url_base: "https://boost.ink",
    },
    {
      name: "boost.fusedgt",
      regex: /^https?:\/\/boost\.fusedgt\.com/i,
      valid_url_regex: /^https?:\/\/boost\.fusedgt\.com\/.+/,
      url_base: "https://boost.fusedgt.com",
    },
    {
      name: "dragonslayer",
      regex: /^(https?:\/\/)?thedragonslayer2\.github\.io\/.*$/i,
      valid_url_regex: /^https?:\/\/thedragonslayer2\.github\.io\/GetKey\.html\?\w+$/,
      url_base: "https://thedragonslayer2.github.io",
    },
    {
      name: "empebau",
      regex: /^https?:\/\/empebau\.eu/i,
      valid_url_regex: /^https?:\/\/empebau\.eu\/s\/(linker\/)?[a-zA-Z0-9-]+$/,
      url_base: "https://empebau.eu",
    },
    {
      name: "google_url",
      regex: /https?:\/\/www\.google\.com\/url/,
      valid_url_regex: /https?:\/\/www\.google\.com\/url.+/,
      url_base: "https://www.google.com/url",
    },
    {
      name: "is.gd",
      regex: /^https?:\/\/is\.gd/i,
      valid_url_regex: /^https?:\/\/is\.gd\/[a-zA-Z0-9-_]+$/,
      url_base: "https://is.gd",
    },
    {
      name: "justpaste",
      regex: /https?:\/\/justpaste\.it\/redirect\/[0-9a-z]+\//gm,
      valid_url_regex: /https?:\/\/justpaste\.it\/redirect\/[0-9a-z]+\//,
      url_base: "https://justpaste.it",
    },
    {
      name: "leasurepartment",
      regex: /^(https?:\/\/)?leasurepartment\.xyz\/.*$/i,
      valid_url_regex: /^https?:\/\/leasurepartment\.xyz\/\?h=[^&]+&tid=\d+&cc=[^&]+$/,
      url_base: "https://leasurepartment.xyz",
    },
    {
      name: "letsboost",
      regex: /^https?:\/\/letsboost\.net/i,
      valid_url_regex: /^https?:\/\/letsboost\.net\/[a-zA-Z0-9-_]+$/,
      url_base: "https://letsboost.net",
    },
    {
      name: "linkvertise",
      regex: /^https?:\/\/(linkvertise\.(com|download)|(adf\.ly)|(link-(center|target|hub|to)|direct-link|file-link|link-target)\.net)/i,
      valid_url_regex: /^(https?:\/\/(?:www\.)?(linkvertise\.com|linkvertise\.net|link-to\.net)\/(?!$|search|login|profile|assets\/vendor\/|assets\/external\/thinksuggest|publisher|link-mutation|blog)(.*))$/i,
      url_base: "https://linkvertise.com",
    },
    {
      name: "loot-link",
      regex: /^https:\/\/(?:loot-link|loot-links|lootlinks|lootdest|links-loot|linksloot|lootlink)\.(?:com|co|org|net|info)\/s\?./i,
      valid_url_regex: /^https:\/\/(?:loaf-link|loot-links|lootlinks|lootdest|links-loot|linksloot|lootlink)\.(?:com|co|org|net|info)\/s\?./,
      url_base: "https://loot-link.com",
    },
    {
      name: "mboost",
      regex: /^https?:\/\/mboost\.me/i,
      valid_url_regex: /^https?:\/\/mboost\.me\/a\/[a-zA-Z0-9-_]{3}$/,
      url_base: "https://mboost.me",
    },
    {
      name: "rekonise",
      regex: /^https?:\/\/(rekonise\.com|rkns\.link)/i,
      valid_url_regex: /^https?:\/\/(rekonise\.com|rkns\.link)\/[a-zA-Z0-9-]+(?:#[a-zA-Z0-9-_]+)?$/,
      url_base: "https://rekonise.com",
    },
    {
      name: "shortest",
      regex: /^https?:\/\/(shorte\.st|sh\.st|gestyy\.com|destyy\.com)/i,
      valid_url_regex: /^https?:\/\/(shorte\.st|sh\.st|gestyy\.com|destyy\.com)\/[a-zA-Z0-9\/-]+(?:\?.*)?$/,
      url_base: "https://shorte.st",
    },
    {
      name: "social-unlock",
      regex: /^https?:\/\/social-unlock\.com/i,
      valid_url_regex: /^https?:\/\/social-unlock\.com\/[a-zA-Z0-9]+\/?$/,
      url_base: "https://social-unlock.com",
    },
    {
      name: "socialwolvez",
      regex: /^https?:\/\/socialwolvez\.com\/app\/l\//i,
      valid_url_regex: /^https?:\/\/socialwolvez\.com\/app\/l\/[a-zA-Z0-9]+\/?(?:#.*)?$/,
      url_base: "https://socialwolvez.com",
    },
    {
      name: "sub1s",
      regex: /^https?:\/\/sub1s\.com\//i,
      valid_url_regex: /^https?:\/\/sub1s\.com\/(l\/)?[a-zA-Z0-9-_]+\/?$/,
      url_base: "https://sub1s.com",
    },
    {
      name: "sub2get",
      regex: /^https?:\/\/(www\.)?sub2get\.com/i,
      valid_url_regex: /^https?:\/\/(www\.)?sub2get\.com\/link(\.php)?\?(l|id)=\d+\/?(?:#.*)?$/,
      url_base: "https://sub2get.com",
    },
    {
      name: "subtolink",
      regex: /^https?:\/\/(www\.)?(subtolink|subfinal)\.com/i,
      valid_url_regex: /^https?:\/\/(www\.)?(subtolink|subfinal)\.com\/.+/,
      url_base: "https://subtolink.com",
    },
    {
      name: "sub2unlock",
      regex: /https?:\/\/sub2unlock\.com/i,
      valid_url_regex: /^https?:\/\/sub2unlock\.com\/[a-zA-Z0-9-_]+\/?$/,
      url_base: "https://sub2unlock.com",
    },
    {
      name: "unlocknow",
      regex: /^https?:\/\/unlocknow\.net\/*/i,
      valid_url_regex: /^https?:\/\/unlocknow\.net\/.+/,
      url_base: "https://unlocknow.net",
    },
    {
      name: "v.gd",
      regex: /https?:\/\/v\.gd/i,
      valid_url_regex: /^https?:\/\/v\.gd\/[a-zA-Z0-9-_]+\/?$/,
      url_base: "https://v.gd",
    },
  ];
  const linkConfig = regexObjects;

  // src/bypass-city.ts
  const bypassCityListener = async () => {
    if (!["bypass.city", "localhost", "adbypass.org"].includes(window.location.hostname)) return;
    injectScriptInfo();
    sendUserscriptInfoEvent();
    window.addEventListener("bypassComplete", async (event) => {
      const data = event.detail;
      const redirectURL = await UserScript.getValue("bypass.callback");
      await WrappedSet("bypass.data", data);
      await UserScript.deleteValue("bypass.callback");
      window.open(redirectURL, "_self", "noopener,noreferrer");
    });
  };

  const injectScriptInfo = () => {
    const script = document.createElement("script");
    script.textContent = `window.scriptInfo = ${JSON.stringify(config)}`;
    document.body.appendChild(script);
  };

  const sendUserscriptInfoEvent = () => {
    window.dispatchEvent(new CustomEvent("userScriptInfo", { detail: config }));
  };

  // src/commonResolver.ts
  const match = (url) => {
    for (const regex of linkConfig) {
      if (regex.regex.test(url) && regex.valid_url_regex.test(url)) {
        return { match: true, name: regex.name, base: regex.url_base, valid_url: regex.valid_url_regex };
      }
    }
    return { match: false };
  };

  const linksListner = async () => {
    const matchData = match(window.location.href);
    if (!matchData.match) return;

    const bypassData = await WrappedGet("bypass.data");
    if (bypassData) {
      notify({ text: "Redirecting now...", title: "Bypass Complete" });
      const targetUrl = bypassData.bypassData;
      await UserScript.deleteValue("bypass.data");
      window.open(targetUrl, "_self");
    } else {
      const redirectBase = (await ping()) ? "https://bypass.city" : "https://adbypass.org";
      notify({ text: "Preparing bypass...", title: "Bypass Initiated" });
      await Promise.all([
        UserScript.deleteValue("bypass.data"),
        UserScript.setValue("bypass.callback", matchData.base),
      ]);
      const bypassCityUrl = new URL(`${redirectBase}/bypass`);
      bypassCityUrl.searchParams.set("bypass", window.location.href);
      bypassCityUrl.searchParams.set("userscript", "true");
      bypassCityUrl.searchParams.set("userscript-version", config.version);
      window.open(bypassCityUrl.href, "_self");
    }
  };

  // src/main.ts
  (async () => {
    console.info("Linkvertise Userscript", config.version, window.location.href);
    await Promise.all([bypassCityListener(), linksListner()]);
  })();
})();
