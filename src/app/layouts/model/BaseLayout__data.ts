const PortNow: string = location.port;
let urlPart: string;
if (PortNow == "6006") {
  urlPart = "";
} else {
  urlPart = "/TeleWorks";
}

export const URL_PART = urlPart;

export const tablet_mediaQuery: MediaQueryList = window.matchMedia(
  "(max-width: 1200px)"
);

export const mobile_mediaQuery: MediaQueryList =
  window.matchMedia("(max-width: 600px)");
