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
      primary: "#6c5ce7",
      accent: "#00d1ff",
      text: "#f6f7fb",
      muted: "#cfd3e3",
    },
  },
  user: {
    displayName: "Aya",
    avatar: "./assets/avatar.png",
    banner: "./assets/banner.png",
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
      enabled: true,
      userId: "286233015837917195",
      sourcePriority: ["japi", "lanyard"],
      refreshMs: 10000,
      overrideDisplayName: true,
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