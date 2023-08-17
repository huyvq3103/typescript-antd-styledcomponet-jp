const colors = { black: "#414141", gray: "#777777" };
const fontSizes = [
  "1.2rem",
  "1.4rem",
  "1.6rem",
  "1.8rem",
  "2.4rem",
  "2.8rem",
  "3.2rem",
  "4.0rem",
  "4.8rem",
  "6.4rem",
];

interface StyleTheme {
  fontSizes: string[];
  colors: { [key in keyof typeof colors]: string };
}

export const theme: StyleTheme = {
  colors,
  fontSizes,
};
