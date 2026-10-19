/* ============================================================
   TheosWorld App Store — app registry
   ------------------------------------------------------------
   This is the single list the directory (index.html) reads from.
   To publish a new app:
     1. Copy an existing app folder to apps/<slug>/ and edit its index.html
     2. Drop the installer .exe into apps/<slug>/
     3. Add an entry below. `slug` must match the folder name.
   ============================================================ */

window.THEOSWORLD_APPS = [
  {
    slug: "theosworld-radio",
    name: "TheosWorld Radio",
    tagline: "Thousands of internet radio stations in one tiny player.",
    description: "Stream internet radio from around the world. Save favourites, browse by genre or country, and keep it running quietly in the system tray.",
    category: "Media",
    tags: ["radio", "music", "streaming"],
    icon: "🎧",
    color: "ic-blue",
    version: "1.4.2",
    size: "18 MB",
    updated: "2026-09-28",
    download: "TheosWorld-Radio-Setup.exe",
    featured: true
  },
  {
    slug: "theosworld-notes",
    name: "TheosWorld Notes",
    tagline: "Fast, offline Markdown notes that stay on your machine.",
    description: "A distraction-free note-taking app with Markdown preview, folders, tags, and instant full-text search. No account, no cloud, no tracking.",
    category: "Productivity",
    tags: ["notes", "markdown", "offline"],
    icon: "📝",
    color: "ic-green",
    version: "2.0.0",
    size: "24 MB",
    updated: "2026-10-05",
    download: "TheosWorld-Notes-Setup.exe",
    featured: true
  },
  {
    slug: "pixel-forge",
    name: "Pixel Forge",
    tagline: "A friendly pixel-art and sprite editor.",
    description: "Draw sprites, tilesets and animations with layers, onion-skinning, palettes and one-click export to PNG or sprite sheets.",
    category: "Creative",
    tags: ["pixel-art", "editor", "sprites"],
    icon: "🎨",
    color: "ic-pink",
    version: "0.9.1",
    size: "31 MB",
    updated: "2026-08-14",
    download: "PixelForge-Setup.exe",
    featured: false
  },
  {
    slug: "clip-vault",
    name: "Clip Vault",
    tagline: "A clipboard history manager that lives in your tray.",
    description: "Keep everything you copy, search it instantly, pin snippets you reuse, and paste with a global hotkey. Text, links and images supported.",
    category: "Utilities",
    tags: ["clipboard", "hotkeys", "tray"],
    icon: "📋",
    color: "ic-slate",
    version: "1.2.0",
    size: "6 MB",
    updated: "2026-07-22",
    download: "ClipVault-Setup.exe",
    featured: false
  },
  {
    slug: "dungeon-dash",
    name: "Dungeon Dash",
    tagline: "A fast-paced arcade roguelike. Every run is different.",
    description: "Dash through procedurally generated dungeons, collect relics, and outrun the collapsing floor. Gamepad and keyboard supported.",
    category: "Games",
    tags: ["roguelike", "arcade", "singleplayer"],
    icon: "🗡️",
    color: "ic-red",
    version: "1.0.3",
    size: "142 MB",
    updated: "2026-09-10",
    download: "DungeonDash-Setup.exe",
    featured: true
  },
  {
    slug: "code-snip",
    name: "Code Snip",
    tagline: "Your personal code snippet library.",
    description: "Store, tag and search snippets in any language with syntax highlighting. Export to Gist or plain files whenever you want your data out.",
    category: "Developer Tools",
    tags: ["snippets", "developer", "search"],
    icon: "💻",
    color: "ic-purple",
    version: "3.1.0",
    size: "27 MB",
    updated: "2026-10-12",
    download: "CodeSnip-Setup.exe",
    featured: false
  },
  {
    slug: "sky-watch",
    name: "Sky Watch",
    tagline: "A minimal weather widget for your desktop.",
    description: "Hourly and 7-day forecasts, rain alerts and a sunrise/sunset ring, all in a small always-on-top widget you can tuck in a corner.",
    category: "Utilities",
    tags: ["weather", "widget", "forecast"],
    icon: "🌤️",
    color: "ic-teal",
    version: "1.1.0",
    size: "9 MB",
    updated: "2026-06-30",
    download: "SkyWatch-Setup.exe",
    featured: false
  },
  {
    slug: "beat-lab",
    name: "Beat Lab",
    tagline: "A step-sequencer drum machine for quick ideas.",
    description: "Sixteen-step patterns, swing, built-in kits and WAV export. Made for sketching beats fast, not for replacing your DAW.",
    category: "Media",
    tags: ["music", "drum-machine", "audio"],
    icon: "🥁",
    color: "ic-orange",
    version: "0.5.0",
    size: "58 MB",
    updated: "2026-05-18",
    download: "BeatLab-Setup.exe",
    featured: false
  },
  {
    slug: "lumos-ai-coding-assistant",
    name: "Lumos AI Coding Assistant",
    tagline: "A 100% free AI coding assistant for your projects.",
    description: "Ask it to explain code, fix bugs, add features and run your builds and tests. Completely free. Needs an internet connection and 1 GB of storage.",
    category: "Developer Tools",
    tags: ["ai", "coding", "assistant", "free"],
    icon: "✨",
    color: "ic-teal",
    version: "0.1.0",
    size: "97 MB",
    updated: "2026-10-19",
    download: "LumosCode-Setup-0.1.0.exe",
    featured: true
  }
];
