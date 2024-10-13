export const Storybook_URL_PART: string = "http://26.193.232.147:6007";

export const PortNow: string = location.port;
let urlPart: string;
if (PortNow == "6006") {
  urlPart = "";
} else if (PortNow == "6007") {
  urlPart = "";
} else {
  urlPart = "/TeleWorks";
}

export const URL_PART = urlPart;
window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

export const laptop_mediaQuery: MediaQueryList = window.matchMedia(
  "(max-width: 1600px)"
);

export const tablet_mediaQuery: MediaQueryList = window.matchMedia(
  "(max-width: 1300px)"
);

export const tabletHeight_mediaQuery: MediaQueryList = window.matchMedia(
  "(max-height: 1000px)"
);
export const tablet_small_mediaQuery: MediaQueryList =
  window.matchMedia("(max-width: 900px)");

export const mobile_mediaQuery: MediaQueryList =
  window.matchMedia("(max-width: 700px)");

export const transitionDuration: number = 300;

export const transitionDurationMedium: number = 700;

export const IndexedDBName: string = "TeleWorks";
