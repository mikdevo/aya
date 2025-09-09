window.PROFILE_CONFIG = {
  site: {
    backgroundImage: "./assets/background.png",
    animatedBackground: {
      enabled: true,
      type: "blobs",
      blobs: 5,
      speed: 28
    },
    theme: {
      primary: "#ffffff",
      accent: "#ffc0cb",
      secondary: "#f0f0f0",
      text: "#ffffff",
      muted: "#e8e8e8",
    },
  },
  user: {
    displayName: "⌯ ˹ᴀʏᴀ˼ ❀",
    avatar: "./avatar.png",
    banner: "./banner.png",
    roles: [
      "Designer",
      "Quoter",
      "Creative Artist",
      "Digital Creator",
    ],
  },
  roles: {
    "Designer": '<i class="fas fa-palette"></i>',
    "Quoter": '<i class="fas fa-quote-left"></i>',
    "Creative Artist": '<i class="fas fa-paint-brush"></i>',
    "Digital Creator": '<i class="fas fa-laptop-code"></i>',
  },
  dynamic: {
    discord: {
      enabled: false,
      userId: "",
      sourcePriority: ["japi", "lanyard"],
      refreshMs: 10000,
      overrideDisplayName: false,
      imageSizes: { avatar: 512, banner: 2048 },
    },
  },
  socials: [
    { name: "Discord", url: "https://discord.gg/iraq", icon: "fab fa-discord" },
    { name: "Telegram", url: "https://t.me/dd_964", icon: "fab fa-telegram" },
    { name: "Tellonym", url: "https://tellonym.me/Aya90z", icon: "fas fa-comment" },
    { name: "Instagram", url: "https://www.instagram.com/its_ayat_1?igsh=MWRrbGhvYzY4Z3RwYQ%3D%3D&utm_source=qr", icon: "fab fa-instagram" },
  ],
};
