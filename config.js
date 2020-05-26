"use strict";

const subtitle =
  "Welcome to my personal blog where I share my thoughts, rants, and poems. I'm a husband, father, and ex-military from Neapl 🇳🇵";

module.exports = {
  url: "https://phatye.com.np",
  pathPrefix: "/",
  title: "Phatye Sunuwar",
  subtitle,
  copyright: "© All rights reserved.",
  disqusShortname: "",
  postsPerPage: 4,
  googleAnalyticsId: "UA-124720935-2",
  menu: [
    {
      label: "Articles",
      path: "/",
    },
    {
      label: "About me",
      path: "/pages/about",
    },
    {
      label: "Contact me",
      path: "/pages/contacts",
    },
  ],
  author: {
    name: "Phatye Sunuwar",
    photo: "/photo.jpg",
    bio: subtitle,
    contacts: {
      email: "contact@phatye.com.np",
      facebook: "phatye.sunuwar",
      twitter: "",
      github: "psunuwar",
      instagram: "",
      rss: "/rss.xml",
    },
  },
};
