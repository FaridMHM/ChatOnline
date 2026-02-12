import { Menu } from "@/types/menu";

export const menuData: Menu[] = [
  { id: 1, title: "Home", newTab: false, path: "/" },
  { id: 2, title: "SignUp", newTab: false, path: "/signup" },
  { id: 2.1, title: "Signin", newTab: false, path: "/signin" },
  {
    id: 2.1,
    title: "Pages",
    newTab: false,
    subMenu: [
      {
        id: 1,
        title: "page1",
        path: "/",
        newTab: false,
      },
      {
        id: 2,
        title: "page2",
        path: "/",
        newTab: false,
      },
    ],
  },
];
