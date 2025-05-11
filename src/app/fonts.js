import localFont from "next/font/local";

export const myFont = localFont({
  src: [
    {
      path: "../public/fonts/Hendrigo.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Random Wednesday.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
});
