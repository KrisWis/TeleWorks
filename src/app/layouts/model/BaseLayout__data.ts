const PortNow: string = location.port;
let urlPart: string;
if (PortNow == "6006") {
  urlPart = "";
} else {
  urlPart = "/TeleWorks";
}

export const URL_PART = urlPart;
