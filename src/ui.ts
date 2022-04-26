import JSZip from "../node_modules/jszip/dist/jszip.min.js";
import { AppIconEntry } from "./plugin.js";

function typedArrayToBuffer(array) {
  return array.buffer.slice(
    array.byteOffset,
    array.byteLength + array.byteOffset
  );
}

function exportTypeToBlobType(type: string) {
  switch (type) {
    case "PDF":
      return "application/pdf";
    case "SVG":
      return "image/svg+xml";
    case "PNG":
      return "image/png";
    case "JPG":
      return "image/jpeg";
    default:
      return "image/png";
  }
}

function exportTypeToFileExtension(type: string) {
  switch (type) {
    case "PDF":
      return ".pdf";
    case "SVG":
      return ".svg";
    case "PNG":
      return ".png";
    case "JPG":
      return ".jpg";
    default:
      return ".png";
  }
}

function zipImages(zip: JSZip, appIconEntries: AppIconEntry[]) {
  for (let iconEntry of appIconEntries) {
    const { filename } = iconEntry;
    const { bytes } = iconEntry.exportableBytes;
    const cleanBytes = typedArrayToBuffer(bytes);
    let blob = new Blob([cleanBytes], { type: "application/json" });
    zip.file(filename, blob, { base64: true });
  }
}

function zipJSON(zip: JSZip, appIconEntries: AppIconEntry[]) {
  let jsonImages = [];
  for (let iconEntry of appIconEntries) {
    const { idiom, size, scale, filename } = iconEntry;
    jsonImages.push({
      idiom: idiom,
      size: size,
      scale: scale,
      filename: filename,
    });
  }
  var json = {
    info: {
      author: "xcode-app-icon-exporter",
      version: 1,
    },
    images: jsonImages,
  };

  var jsonString = JSON.stringify(json, null, 2);
  var blob = new Blob([jsonString], { type: "application/json" });
  zip.file(`Contents.json`, blob, { base64: true });
}

window.onmessage = async (event) => {
  if (!event.data.pluginMessage) return;
  const { appIconEntries } = event.data.pluginMessage;

  return new Promise<void>((resolve) => {
    let zip = new JSZip();

    zipImages(zip, appIconEntries);
    zipJSON(zip, appIconEntries);

    zip.generateAsync({ type: "blob" }).then((content: Blob) => {
      const blobURL = window.URL.createObjectURL(content);
      const link = document.createElement("a");
      link.className = "button button--primary";
      link.href = blobURL;
      link.download = "AppIcon.appiconset.zip";
      link.click();
      link.setAttribute("download", name + ".zip");
      resolve();
    });
  }).then(() => {
    window.parent.postMessage({ pluginMessage: "Done!" }, "*");
  });
};
