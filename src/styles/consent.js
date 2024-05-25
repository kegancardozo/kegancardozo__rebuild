
var cookie_expires = (new Date(Date.now() + 86400 * 7000)).toUTCString();
if (cookies["cookie_consent"] == "accept") {
  gtmLazy()
};

function acceptCookies() {
  document.cookie = "cookie_consent=accept;" + "expires=" + String(cookie_expires);
  gtmLazy();
  document.getElementById("consent-popup").classList.toggle("hidden");
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
      'event': 'cookie_accepted'
  });
};

function rejectCookies() {
  document.cookie = "cookie_consent=reject;" + "expires=" + String(cookie_expires);
  document.getElementById("consent-popup").classList.toggle("hidden");
};