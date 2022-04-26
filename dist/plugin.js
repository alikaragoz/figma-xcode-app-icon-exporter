/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./src/plugin.ts ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
const { selection } = figma.currentPage;
function hasValidSelection(nodes) {
    return !(!nodes || nodes.length === 0);
}
const appIconEntries = [
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
async function performExport(nodes, appIconEntries) {
    if (nodes.length === 0) {
        return Promise.reject("Something wrong with export settings");
    }
    for (let iconEntry of appIconEntries) {
        const bytes = await nodes[0].exportAsync(iconEntry.exportableBytes.settings);
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


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw2QkFBNkIsNEJBQTRCO0FBQ2pGLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDZCQUE2Qiw2QkFBNkI7QUFDbEYsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNkJBQTZCLDZCQUE2QjtBQUNsRixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw2QkFBNkIsNkJBQTZCO0FBQ2xGLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDZCQUE2Qiw2QkFBNkI7QUFDbEYsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNkJBQTZCLDZCQUE2QjtBQUNsRixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw2QkFBNkIsOEJBQThCO0FBQ25GLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGdCQUFnQjtBQUM3QywyQkFBMkIsZ0JBQWdCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ1MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly94Y29kZS1hcHAtaWNvbi1leHBvcnRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly94Y29kZS1hcHAtaWNvbi1leHBvcnRlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3hjb2RlLWFwcC1pY29uLWV4cG9ydGVyLy4vc3JjL3BsdWdpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgeyBzZWxlY3Rpb24gfSA9IGZpZ21hLmN1cnJlbnRQYWdlO1xuZnVuY3Rpb24gaGFzVmFsaWRTZWxlY3Rpb24obm9kZXMpIHtcbiAgICByZXR1cm4gISghbm9kZXMgfHwgbm9kZXMubGVuZ3RoID09PSAwKTtcbn1cbmNvbnN0IGFwcEljb25FbnRyaWVzID0gW1xuICAgIHtcbiAgICAgICAgaWRpb206IFwiaW9zLW1hcmtldGluZ1wiLFxuICAgICAgICBzaXplOiBcIjEwMjR4MTAyNFwiLFxuICAgICAgICBzY2FsZTogXCIxeFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJhcHBzdG9yZTEwMjQucG5nXCIsXG4gICAgICAgIGV4cG9ydGFibGVCeXRlczoge1xuICAgICAgICAgICAgc2V0dGluZ3M6IHsgZm9ybWF0OiBcIlBOR1wiLCBjb25zdHJhaW50OiB7IHR5cGU6IFwiV0lEVEhcIiwgdmFsdWU6IDEwMjQgfSB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZGlvbTogXCJpcGhvbmVcIixcbiAgICAgICAgc2l6ZTogXCIyMHgyMFwiLFxuICAgICAgICBzY2FsZTogXCIyeFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJub3RpZmljYXRpb240MC5wbmdcIixcbiAgICAgICAgZXhwb3J0YWJsZUJ5dGVzOiB7XG4gICAgICAgICAgICBzZXR0aW5nczogeyBmb3JtYXQ6IFwiUE5HXCIsIGNvbnN0cmFpbnQ6IHsgdHlwZTogXCJXSURUSFwiLCB2YWx1ZTogNDAgfSB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZGlvbTogXCJpcGhvbmVcIixcbiAgICAgICAgc2l6ZTogXCIyMHgyMFwiLFxuICAgICAgICBzY2FsZTogXCIzeFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJub3RpZmljYXRpb242MC5wbmdcIixcbiAgICAgICAgZXhwb3J0YWJsZUJ5dGVzOiB7XG4gICAgICAgICAgICBzZXR0aW5nczogeyBmb3JtYXQ6IFwiUE5HXCIsIGNvbnN0cmFpbnQ6IHsgdHlwZTogXCJXSURUSFwiLCB2YWx1ZTogNjAgfSB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZGlvbTogXCJpcGhvbmVcIixcbiAgICAgICAgc2l6ZTogXCIyOXgyOVwiLFxuICAgICAgICBzY2FsZTogXCIyeFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJzZXR0aW5nczU4LnBuZ1wiLFxuICAgICAgICBleHBvcnRhYmxlQnl0ZXM6IHtcbiAgICAgICAgICAgIHNldHRpbmdzOiB7IGZvcm1hdDogXCJQTkdcIiwgY29uc3RyYWludDogeyB0eXBlOiBcIldJRFRIXCIsIHZhbHVlOiA1OCB9IH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkaW9tOiBcImlwaG9uZVwiLFxuICAgICAgICBzaXplOiBcIjI5eDI5XCIsXG4gICAgICAgIHNjYWxlOiBcIjN4XCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInNldHRpbmdzODcucG5nXCIsXG4gICAgICAgIGV4cG9ydGFibGVCeXRlczoge1xuICAgICAgICAgICAgc2V0dGluZ3M6IHsgZm9ybWF0OiBcIlBOR1wiLCBjb25zdHJhaW50OiB7IHR5cGU6IFwiV0lEVEhcIiwgdmFsdWU6IDg3IH0gfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWRpb206IFwiaXBob25lXCIsXG4gICAgICAgIHNpemU6IFwiNDB4NDBcIixcbiAgICAgICAgc2NhbGU6IFwiMnhcIixcbiAgICAgICAgZmlsZW5hbWU6IFwic3BvdGxpZ2h0ODAucG5nXCIsXG4gICAgICAgIGV4cG9ydGFibGVCeXRlczoge1xuICAgICAgICAgICAgc2V0dGluZ3M6IHsgZm9ybWF0OiBcIlBOR1wiLCBjb25zdHJhaW50OiB7IHR5cGU6IFwiV0lEVEhcIiwgdmFsdWU6IDgwIH0gfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWRpb206IFwiaXBob25lXCIsXG4gICAgICAgIHNpemU6IFwiNDB4NDBcIixcbiAgICAgICAgc2NhbGU6IFwiM3hcIixcbiAgICAgICAgZmlsZW5hbWU6IFwic3BvdGxpZ2h0MTIwLnBuZ1wiLFxuICAgICAgICBleHBvcnRhYmxlQnl0ZXM6IHtcbiAgICAgICAgICAgIHNldHRpbmdzOiB7IGZvcm1hdDogXCJQTkdcIiwgY29uc3RyYWludDogeyB0eXBlOiBcIldJRFRIXCIsIHZhbHVlOiAxMjAgfSB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZGlvbTogXCJpcGhvbmVcIixcbiAgICAgICAgc2l6ZTogXCI2MHg2MFwiLFxuICAgICAgICBzY2FsZTogXCIyeFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJpcGhvbmUxMjAucG5nXCIsXG4gICAgICAgIGV4cG9ydGFibGVCeXRlczoge1xuICAgICAgICAgICAgc2V0dGluZ3M6IHsgZm9ybWF0OiBcIlBOR1wiLCBjb25zdHJhaW50OiB7IHR5cGU6IFwiV0lEVEhcIiwgdmFsdWU6IDEyMCB9IH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkaW9tOiBcImlwaG9uZVwiLFxuICAgICAgICBzaXplOiBcIjYweDYwXCIsXG4gICAgICAgIHNjYWxlOiBcIjN4XCIsXG4gICAgICAgIGZpbGVuYW1lOiBcImlwaG9uZTE4MC5wbmdcIixcbiAgICAgICAgZXhwb3J0YWJsZUJ5dGVzOiB7XG4gICAgICAgICAgICBzZXR0aW5nczogeyBmb3JtYXQ6IFwiUE5HXCIsIGNvbnN0cmFpbnQ6IHsgdHlwZTogXCJXSURUSFwiLCB2YWx1ZTogMTgwIH0gfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWRpb206IFwiaXBhZFwiLFxuICAgICAgICBzaXplOiBcIjIweDIwXCIsXG4gICAgICAgIHNjYWxlOiBcIjF4XCIsXG4gICAgICAgIGZpbGVuYW1lOiBcImlwYWROb3RpZmljYXRpb24yMC5wbmdcIixcbiAgICAgICAgZXhwb3J0YWJsZUJ5dGVzOiB7XG4gICAgICAgICAgICBzZXR0aW5nczogeyBmb3JtYXQ6IFwiUE5HXCIsIGNvbnN0cmFpbnQ6IHsgdHlwZTogXCJXSURUSFwiLCB2YWx1ZTogMjAgfSB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZGlvbTogXCJpcGFkXCIsXG4gICAgICAgIHNpemU6IFwiMjB4MjBcIixcbiAgICAgICAgc2NhbGU6IFwiMnhcIixcbiAgICAgICAgZmlsZW5hbWU6IFwiaXBhZE5vdGlmaWNhdGlvbjQwLnBuZ1wiLFxuICAgICAgICBleHBvcnRhYmxlQnl0ZXM6IHtcbiAgICAgICAgICAgIHNldHRpbmdzOiB7IGZvcm1hdDogXCJQTkdcIiwgY29uc3RyYWludDogeyB0eXBlOiBcIldJRFRIXCIsIHZhbHVlOiA0MCB9IH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkaW9tOiBcImlwYWRcIixcbiAgICAgICAgc2l6ZTogXCIyOXgyOVwiLFxuICAgICAgICBzY2FsZTogXCIxeFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJpcGFkU2V0dGluZ3MyOS5wbmdcIixcbiAgICAgICAgZXhwb3J0YWJsZUJ5dGVzOiB7XG4gICAgICAgICAgICBzZXR0aW5nczogeyBmb3JtYXQ6IFwiUE5HXCIsIGNvbnN0cmFpbnQ6IHsgdHlwZTogXCJXSURUSFwiLCB2YWx1ZTogMjkgfSB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZGlvbTogXCJpcGFkXCIsXG4gICAgICAgIHNpemU6IFwiMjl4MjlcIixcbiAgICAgICAgc2NhbGU6IFwiMnhcIixcbiAgICAgICAgZmlsZW5hbWU6IFwiaXBhZFNldHRpbmdzNTgucG5nXCIsXG4gICAgICAgIGV4cG9ydGFibGVCeXRlczoge1xuICAgICAgICAgICAgc2V0dGluZ3M6IHsgZm9ybWF0OiBcIlBOR1wiLCBjb25zdHJhaW50OiB7IHR5cGU6IFwiV0lEVEhcIiwgdmFsdWU6IDU4IH0gfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWRpb206IFwiaXBhZFwiLFxuICAgICAgICBzaXplOiBcIjQweDQwXCIsXG4gICAgICAgIHNjYWxlOiBcIjF4XCIsXG4gICAgICAgIGZpbGVuYW1lOiBcImlwYWRTcG90bGlnaHQ0MC5wbmdcIixcbiAgICAgICAgZXhwb3J0YWJsZUJ5dGVzOiB7XG4gICAgICAgICAgICBzZXR0aW5nczogeyBmb3JtYXQ6IFwiUE5HXCIsIGNvbnN0cmFpbnQ6IHsgdHlwZTogXCJXSURUSFwiLCB2YWx1ZTogNDAgfSB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZGlvbTogXCJpcGFkXCIsXG4gICAgICAgIHNpemU6IFwiNDB4NDBcIixcbiAgICAgICAgc2NhbGU6IFwiMnhcIixcbiAgICAgICAgZmlsZW5hbWU6IFwiaXBhZFNwb3RsaWdodDgwLnBuZ1wiLFxuICAgICAgICBleHBvcnRhYmxlQnl0ZXM6IHtcbiAgICAgICAgICAgIHNldHRpbmdzOiB7IGZvcm1hdDogXCJQTkdcIiwgY29uc3RyYWludDogeyB0eXBlOiBcIldJRFRIXCIsIHZhbHVlOiA4MCB9IH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkaW9tOiBcImlwYWRcIixcbiAgICAgICAgc2l6ZTogXCI3Nng3NlwiLFxuICAgICAgICBzY2FsZTogXCIxeFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJpcGFkNzYucG5nXCIsXG4gICAgICAgIGV4cG9ydGFibGVCeXRlczoge1xuICAgICAgICAgICAgc2V0dGluZ3M6IHsgZm9ybWF0OiBcIlBOR1wiLCBjb25zdHJhaW50OiB7IHR5cGU6IFwiV0lEVEhcIiwgdmFsdWU6IDc2IH0gfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWRpb206IFwiaXBhZFwiLFxuICAgICAgICBzaXplOiBcIjc2eDc2XCIsXG4gICAgICAgIHNjYWxlOiBcIjJ4XCIsXG4gICAgICAgIGZpbGVuYW1lOiBcImlwYWQxNTIucG5nXCIsXG4gICAgICAgIGV4cG9ydGFibGVCeXRlczoge1xuICAgICAgICAgICAgc2V0dGluZ3M6IHsgZm9ybWF0OiBcIlBOR1wiLCBjb25zdHJhaW50OiB7IHR5cGU6IFwiV0lEVEhcIiwgdmFsdWU6IDE1MiB9IH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkaW9tOiBcImlwYWRcIixcbiAgICAgICAgc2l6ZTogXCI4My41eDgzLjVcIixcbiAgICAgICAgc2NhbGU6IFwiMnhcIixcbiAgICAgICAgZmlsZW5hbWU6IFwiaXBhZFBybzE2Ny5wbmdcIixcbiAgICAgICAgZXhwb3J0YWJsZUJ5dGVzOiB7XG4gICAgICAgICAgICBzZXR0aW5nczogeyBmb3JtYXQ6IFwiUE5HXCIsIGNvbnN0cmFpbnQ6IHsgdHlwZTogXCJXSURUSFwiLCB2YWx1ZTogMTY3IH0gfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWRpb206IFwibWFjXCIsXG4gICAgICAgIHNpemU6IFwiMTZ4MTZcIixcbiAgICAgICAgc2NhbGU6IFwiMXhcIixcbiAgICAgICAgZmlsZW5hbWU6IFwibWFjMTYucG5nXCIsXG4gICAgICAgIGV4cG9ydGFibGVCeXRlczoge1xuICAgICAgICAgICAgc2V0dGluZ3M6IHsgZm9ybWF0OiBcIlBOR1wiLCBjb25zdHJhaW50OiB7IHR5cGU6IFwiV0lEVEhcIiwgdmFsdWU6IDE2IH0gfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWRpb206IFwibWFjXCIsXG4gICAgICAgIHNpemU6IFwiMTZ4MTZcIixcbiAgICAgICAgc2NhbGU6IFwiMnhcIixcbiAgICAgICAgZmlsZW5hbWU6IFwibWFjMzIucG5nXCIsXG4gICAgICAgIGV4cG9ydGFibGVCeXRlczoge1xuICAgICAgICAgICAgc2V0dGluZ3M6IHsgZm9ybWF0OiBcIlBOR1wiLCBjb25zdHJhaW50OiB7IHR5cGU6IFwiV0lEVEhcIiwgdmFsdWU6IDMyIH0gfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWRpb206IFwibWFjXCIsXG4gICAgICAgIHNpemU6IFwiMzJ4MzJcIixcbiAgICAgICAgc2NhbGU6IFwiMXhcIixcbiAgICAgICAgZmlsZW5hbWU6IFwibWFjMzIucG5nXCIsXG4gICAgICAgIGV4cG9ydGFibGVCeXRlczoge1xuICAgICAgICAgICAgc2V0dGluZ3M6IHsgZm9ybWF0OiBcIlBOR1wiLCBjb25zdHJhaW50OiB7IHR5cGU6IFwiV0lEVEhcIiwgdmFsdWU6IDMyIH0gfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWRpb206IFwibWFjXCIsXG4gICAgICAgIHNpemU6IFwiMzJ4MzJcIixcbiAgICAgICAgc2NhbGU6IFwiMnhcIixcbiAgICAgICAgZmlsZW5hbWU6IFwibWFjNjQucG5nXCIsXG4gICAgICAgIGV4cG9ydGFibGVCeXRlczoge1xuICAgICAgICAgICAgc2V0dGluZ3M6IHsgZm9ybWF0OiBcIlBOR1wiLCBjb25zdHJhaW50OiB7IHR5cGU6IFwiV0lEVEhcIiwgdmFsdWU6IDY0IH0gfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWRpb206IFwibWFjXCIsXG4gICAgICAgIHNpemU6IFwiMTI4eDEyOFwiLFxuICAgICAgICBzY2FsZTogXCIxeFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJtYWMxMjgucG5nXCIsXG4gICAgICAgIGV4cG9ydGFibGVCeXRlczoge1xuICAgICAgICAgICAgc2V0dGluZ3M6IHsgZm9ybWF0OiBcIlBOR1wiLCBjb25zdHJhaW50OiB7IHR5cGU6IFwiV0lEVEhcIiwgdmFsdWU6IDEyOCB9IH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkaW9tOiBcIm1hY1wiLFxuICAgICAgICBzaXplOiBcIjEyOHgxMjhcIixcbiAgICAgICAgc2NhbGU6IFwiMnhcIixcbiAgICAgICAgZmlsZW5hbWU6IFwibWFjMjU2LnBuZ1wiLFxuICAgICAgICBleHBvcnRhYmxlQnl0ZXM6IHtcbiAgICAgICAgICAgIHNldHRpbmdzOiB7IGZvcm1hdDogXCJQTkdcIiwgY29uc3RyYWludDogeyB0eXBlOiBcIldJRFRIXCIsIHZhbHVlOiAyNTYgfSB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZGlvbTogXCJtYWNcIixcbiAgICAgICAgc2l6ZTogXCIyNTZ4MjU2XCIsXG4gICAgICAgIHNjYWxlOiBcIjF4XCIsXG4gICAgICAgIGZpbGVuYW1lOiBcIm1hYzI1Ni5wbmdcIixcbiAgICAgICAgZXhwb3J0YWJsZUJ5dGVzOiB7XG4gICAgICAgICAgICBzZXR0aW5nczogeyBmb3JtYXQ6IFwiUE5HXCIsIGNvbnN0cmFpbnQ6IHsgdHlwZTogXCJXSURUSFwiLCB2YWx1ZTogMjU2IH0gfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWRpb206IFwibWFjXCIsXG4gICAgICAgIHNpemU6IFwiMjU2eDI1NlwiLFxuICAgICAgICBzY2FsZTogXCIyeFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJtYWM1MTIucG5nXCIsXG4gICAgICAgIGV4cG9ydGFibGVCeXRlczoge1xuICAgICAgICAgICAgc2V0dGluZ3M6IHsgZm9ybWF0OiBcIlBOR1wiLCBjb25zdHJhaW50OiB7IHR5cGU6IFwiV0lEVEhcIiwgdmFsdWU6IDUxMiB9IH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkaW9tOiBcIm1hY1wiLFxuICAgICAgICBzaXplOiBcIjUxMng1MTJcIixcbiAgICAgICAgc2NhbGU6IFwiMXhcIixcbiAgICAgICAgZmlsZW5hbWU6IFwibWFjNTEyLnBuZ1wiLFxuICAgICAgICBleHBvcnRhYmxlQnl0ZXM6IHtcbiAgICAgICAgICAgIHNldHRpbmdzOiB7IGZvcm1hdDogXCJQTkdcIiwgY29uc3RyYWludDogeyB0eXBlOiBcIldJRFRIXCIsIHZhbHVlOiA1MTIgfSB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZGlvbTogXCJtYWNcIixcbiAgICAgICAgc2l6ZTogXCI1MTJ4NTEyXCIsXG4gICAgICAgIHNjYWxlOiBcIjJ4XCIsXG4gICAgICAgIGZpbGVuYW1lOiBcIm1hYzEwMjQucG5nXCIsXG4gICAgICAgIGV4cG9ydGFibGVCeXRlczoge1xuICAgICAgICAgICAgc2V0dGluZ3M6IHsgZm9ybWF0OiBcIlBOR1wiLCBjb25zdHJhaW50OiB7IHR5cGU6IFwiV0lEVEhcIiwgdmFsdWU6IDEwMjQgfSB9LFxuICAgICAgICB9LFxuICAgIH0sXG5dO1xuYXN5bmMgZnVuY3Rpb24gcGVyZm9ybUV4cG9ydChub2RlcywgYXBwSWNvbkVudHJpZXMpIHtcbiAgICBpZiAobm9kZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcIlNvbWV0aGluZyB3cm9uZyB3aXRoIGV4cG9ydCBzZXR0aW5nc1wiKTtcbiAgICB9XG4gICAgZm9yIChsZXQgaWNvbkVudHJ5IG9mIGFwcEljb25FbnRyaWVzKSB7XG4gICAgICAgIGNvbnN0IGJ5dGVzID0gYXdhaXQgbm9kZXNbMF0uZXhwb3J0QXN5bmMoaWNvbkVudHJ5LmV4cG9ydGFibGVCeXRlcy5zZXR0aW5ncyk7XG4gICAgICAgIGljb25FbnRyeS5leHBvcnRhYmxlQnl0ZXMuYnl0ZXMgPSBieXRlcztcbiAgICB9XG4gICAgZmlnbWEuc2hvd1VJKF9faHRtbF9fLCB7IHZpc2libGU6IGZhbHNlIH0pO1xuICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgYXBwSWNvbkVudHJpZXMgfSk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMpID0+IHtcbiAgICAgICAgZmlnbWEudWkub25tZXNzYWdlID0gKCkgPT4ge1xuICAgICAgICAgICAgcmVzKCk7XG4gICAgICAgIH07XG4gICAgfSk7XG59XG5wZXJmb3JtRXhwb3J0KHNlbGVjdGlvbiwgYXBwSWNvbkVudHJpZXMpXG4gICAgLnRoZW4oKCkgPT4gZmlnbWEuY2xvc2VQbHVnaW4oXCJEb25lIVwiKSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgZmlnbWEuY2xvc2VQbHVnaW4oZXJyb3IpO1xufSk7XG5leHBvcnQge307XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=