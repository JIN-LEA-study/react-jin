// 페이지 다른 스크립트가 실행되기 전 먼저 로드할 스크립트

const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  notificationApi: {
    sendNotification(message, jsExpression) {
      eval(jsExpression);
      // ipcRenderer.send("notify", message);
    },
  },
  batteryApi: {},
  fileApi: {},
});

// window.sendNotification = message => {
//   console.log(window.notSecure);
//   ipcRenderer.send("notify", message);
// };
