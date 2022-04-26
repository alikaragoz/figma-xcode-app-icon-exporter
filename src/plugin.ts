const { selection } = figma.currentPage;

export interface ExportableBytes {
  settings: ExportSettingsImage | ExportSettingsPDF | ExportSettingsSVG;
  bytes?: Uint8Array;
}

export interface AppIconEntry {
  idiom: string;
  size: string;
  scale: string;
  filename: string;
  exportableBytes: ExportableBytes;
}

function hasValidSelection(nodes: readonly SceneNode[]) {
  return !(!nodes || nodes.length === 0);
}

const appIconEntries: AppIconEntry[] = [
  {
    idiom: "ios-marketing",
    size: "1024x1024",
    scale: "1x",
    filename: "appstore1024.png",
    exportableBytes: {
      settings: { format: "PNG", constraint: { type: "WIDTH", value: 1024 } },
    },
  },
  {
    idiom: "iphone",
    size: "20x20",
    scale: "2x",
    filename: "notification40.png",
    exportableBytes: {
      settings: { format: "PNG", constraint: { type: "WIDTH", value: 40 } },
    },
  },
  {
    idiom: "iphone",
    size: "20x20",
    scale: "3x",
    filename: "notification60.png",
    exportableBytes: {
      settings: { format: "PNG", constraint: { type: "WIDTH", value: 60 } },
    },
  },
  {
    idiom: "iphone",
    size: "29x29",
    scale: "2x",
    filename: "settings58.png",
    exportableBytes: {
      settings: { format: "PNG", constraint: { type: "WIDTH", value: 58 } },
    },
  },
  {
    idiom: "iphone",
    size: "29x29",
    scale: "3x",
    filename: "settings87.png",
    exportableBytes: {
      settings: { format: "PNG", constraint: { type: "WIDTH", value: 87 } },
    },
  },
  {
    idiom: "iphone",
    size: "40x40",
    scale: "2x",
    filename: "spotlight80.png",
    exportableBytes: {
      settings: { format: "PNG", constraint: { type: "WIDTH", value: 80 } },
    },
  },
  {
    idiom: "iphone",
    size: "40x40",
    scale: "3x",
    filename: "spotlight120.png",
    exportableBytes: {
      settings: { format: "PNG", constraint: { type: "WIDTH", value: 120 } },
    },
  },
  {
    idiom: "iphone",
    size: "60x60",
    scale: "2x",
    filename: "iphone120.png",
    exportableBytes: {
      settings: { format: "PNG", constraint: { type: "WIDTH", value: 120 } },
    },
  },
  {
    idiom: "iphone",
    size: "60x60",
    scale: "3x",
    filename: "iphone180.png",
    exportableBytes: {
      settings: { format: "PNG", constraint: { type: "WIDTH", value: 180 } },
    },
  },
  {
    idiom: "ipad",
    size: "20x20",
    scale: "1x",
    filename: "ipadNotification20.png",
    exportableBytes: {
      settings: { format: "PNG", constraint: { type: "WIDTH", value: 20 } },
    },
  },
  {
    idiom: "ipad",
    size: "20x20",
    scale: "2x",
    filename: "ipadNotification40.png",
    exportableBytes: {
      settings: { format: "PNG", constraint: { type: "WIDTH", value: 40 } },
    },
  },
  {
    idiom: "ipad",
    size: "29x29",
    scale: "1x",
    filename: "ipadSettings29.png",
    exportableBytes: {
      settings: { format: "PNG", constraint: { type: "WIDTH", value: 29 } },
    },
  },
  {
    idiom: "ipad",
    size: "29x29",
    scale: "2x",
    filename: "ipadSettings58.png",
    exportableBytes: {
      settings: { format: "PNG", constraint: { type: "WIDTH", value: 58 } },
    },
  },
  {
    idiom: "ipad",
    size: "40x40",
    scale: "1x",
    filename: "ipadSpotlight40.png",
    exportableBytes: {
      settings: { format: "PNG", constraint: { type: "WIDTH", value: 40 } },
    },
  },
  {
    idiom: "ipad",
    size: "40x40",
    scale: "2x",
    filename: "ipadSpotlight80.png",
    exportableBytes: {
      settings: { format: "PNG", constraint: { type: "WIDTH", value: 80 } },
    },
  },
  {
    idiom: "ipad",
    size: "76x76",
    scale: "1x",
    filename: "ipad76.png",
    exportableBytes: {
      settings: { format: "PNG", constraint: { type: "WIDTH", value: 76 } },
    },
  },
  {
    idiom: "ipad",
    size: "76x76",
    scale: "2x",
    filename: "ipad152.png",
    exportableBytes: {
      settings: { format: "PNG", constraint: { type: "WIDTH", value: 152 } },
    },
  },
  {
    idiom: "ipad",
    size: "83.5x83.5",
    scale: "2x",
    filename: "ipadPro167.png",
    exportableBytes: {
      settings: { format: "PNG", constraint: { type: "WIDTH", value: 167 } },
    },
  },
  {
    idiom: "mac",
    size: "16x16",
    scale: "1x",
    filename: "mac16.png",
    exportableBytes: {
      settings: { format: "PNG", constraint: { type: "WIDTH", value: 16 } },
    },
  },
  {
    idiom: "mac",
    size: "16x16",
    scale: "2x",
    filename: "mac32.png",
    exportableBytes: {
      settings: { format: "PNG", constraint: { type: "WIDTH", value: 32 } },
    },
  },
  {
    idiom: "mac",
    size: "32x32",
    scale: "1x",
    filename: "mac32.png",
    exportableBytes: {
      settings: { format: "PNG", constraint: { type: "WIDTH", value: 32 } },
    },
  },
  {
    idiom: "mac",
    size: "32x32",
    scale: "2x",
    filename: "mac64.png",
    exportableBytes: {
      settings: { format: "PNG", constraint: { type: "WIDTH", value: 64 } },
    },
  },
  {
    idiom: "mac",
    size: "128x128",
    scale: "1x",
    filename: "mac128.png",
    exportableBytes: {
      settings: { format: "PNG", constraint: { type: "WIDTH", value: 128 } },
    },
  },
  {
    idiom: "mac",
    size: "128x128",
    scale: "2x",
    filename: "mac256.png",
    exportableBytes: {
      settings: { format: "PNG", constraint: { type: "WIDTH", value: 256 } },
    },
  },
  {
    idiom: "mac",
    size: "256x256",
    scale: "1x",
    filename: "mac256.png",
    exportableBytes: {
      settings: { format: "PNG", constraint: { type: "WIDTH", value: 256 } },
    },
  },
  {
    idiom: "mac",
    size: "256x256",
    scale: "2x",
    filename: "mac512.png",
    exportableBytes: {
      settings: { format: "PNG", constraint: { type: "WIDTH", value: 512 } },
    },
  },
  {
    idiom: "mac",
    size: "512x512",
    scale: "1x",
    filename: "mac512.png",
    exportableBytes: {
      settings: { format: "PNG", constraint: { type: "WIDTH", value: 512 } },
    },
  },
  {
    idiom: "mac",
    size: "512x512",
    scale: "2x",
    filename: "mac1024.png",
    exportableBytes: {
      settings: { format: "PNG", constraint: { type: "WIDTH", value: 1024 } },
    },
  },
];

async function performExport(
  nodes: readonly SceneNode[],
  appIconEntries: readonly AppIconEntry[]
): Promise<void> {
  if (nodes.length === 0) {
    return Promise.reject("No frame selected 😉");
  } else if (nodes.length > 1) {
    return Promise.reject("Please selected only one frame 😇");
  }

  for (let iconEntry of appIconEntries) {
    const bytes = await nodes[0].exportAsync(
      iconEntry.exportableBytes.settings
    );
    iconEntry.exportableBytes.bytes = bytes;
  }

  figma.showUI(__html__, { visible: false });
  figma.ui.postMessage({ appIconEntries });

  return new Promise((res) => {
    figma.ui.onmessage = () => {
      res();
    };
  });
}
performExport(selection, appIconEntries)
  .then(() => figma.closePlugin("Done!"))
  .catch((error) => {
    figma.closePlugin(error);
  });
