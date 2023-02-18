import { RedirectObject } from "src/lib/types/redirect";

export const redirectTable: RedirectObject[] = [
  {
    type: "static",
    handle: "lkd",
    target: {
      label: "linkedin.com/in/mazharz",
      value: "https://www.linkedin.com/in/mazharz",
    },
  },
  {
    type: "static",
    handle: "gr",
    target: {
      label: "goodreads.com/user/show/121886408-mazhar-zandsalimi",
      value: "https://www.goodreads.com/user/show/121886408-mazhar-zandsalimi",
    },
  },
  {
    type: "static",
    handle: "duo",
    target: {
      label: "duolingo.com/profile/m47h4r",
      value: "https://www.duolingo.com/profile/m47h4r",
    },
  },
  {
    type: "dynamic",
    handle: "gh",
    target: {
      label: "github.com/mazharz",
      value: "https://www.github.com/mazharz",
    },
    subTarget: {
      label: "github.com/mazharz",
      value: "https://www.github.com/mazharz",
    },
  },
  {
    type: "dynamic",
    handle: "blg",
    target: { label: "blog.mazhar.pro", value: "https://blog.mazhar.pro" },
    subTarget: { label: "blog.mazhar.pro", value: "https://blog.mazhar.pro" },
  },
];
