import { AppIconEntry } from "./lib";
import { appIconEntries } from "./resources/appicon-entries";

const { selection } = figma.currentPage;

function hasValidSelection(nodes: readonly SceneNode[]) {
  return !(!nodes || nodes.length === 0);
}

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
