type SocialMedia = {
  alt: string;
  icon: string;
  inFooter: boolean;
  link: string;
};

export const social_medias: SocialMedia[] = [
    {
        alt: "Github",
        link: "https://github.com/nandolopez/",
        icon: "svg_social/Github.svg",
        inFooter: true,
    },
    {
      alt: "Instagram",
      link: "https://www.instagram.com/nandolopez_tech/",
      icon: "svg_social/Instagram.svg",
      inFooter: true,
    },
    {
      alt: "Spotify list",
      link: "https://www.youtube.com/channel/UCg4pdmmXX07n89Axjm41Gqw",
      icon: "svg_social/Spotify.svg",
      inFooter: false,
    },
    {
      alt: "Tiktok Channel",
      link: "https://www.tiktok.com/@fernanlm88",
      icon: "svg_social/Tiktok.svg",
      inFooter: false,
    },
    {
      alt: "Youtube Channel",
      link: "https://www.youtube.com/channel/UCg4pdmmXX07n89Axjm41Gqw",
      icon: "svg_social/Youtube.svg",
      inFooter: true,
    },
    {
      alt: "X / Twitter",
      link: "https://www.twitter.com",
      icon: "svg_social/X.svg",
      inFooter: false,
    }
];
