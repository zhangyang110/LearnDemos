/** ZhangYang on 2020/11/12
 *@desc: 前端压缩 图片
 */

// 64码流转文件
export const base64ToFile= function (dataURI, origFile) {
  let byteString, mimestring;

  if (dataURI.split(',')[0].indexOf('base64') !== -1) {
    byteString = atob(dataURI.split(',')[1]);
  } else {
    byteString = decodeURI(dataURI.split(',')[1]);
  }

  mimestring = dataURI.split(',')[0].split(':')[1].split(';')[0];

  let content = new Array();
  for (let i = 0; i < byteString.length; i++) {
    content[i] = byteString.charCodeAt(i);
  }
  let newFile = new File(
    [new Uint8Array(content)], origFile.name, {type: mimestring}
  );
  // Copy props set by the dropzone in the original file
  let origProps = [
    "upload", "status", "previewElement", "previewTemplate", "accepted"
  ];
  origProps.forEach((item) => {
    newFile[item] = origFile[item];
  });
  return newFile;
}

export const compressImgFn = function (origFile, callback) {
  let MAX_WIDTH = 800;
  let MAX_HEIGHT = 600;
  let reader = new FileReader();
  reader.addEventListener('load', function (event) {
    let origImg = new Image();
    origImg.src = event.target.result;
    origImg.addEventListener("load", function () {
      //event 参数
      let width = MAX_WIDTH; //event.target.width;
      let height = MAX_HEIGHT; //event.target.height;
      let canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      let ctx = canvas.getContext("2d");

      ctx.drawImage(origImg, 0, 0, width, height);
      let imageData = ctx.getImageData(0, 0, width, height);
      for (let i = 0; i < imageData.data.length; i += 4) {// 将透明色 背景的图片的背景色改为白色
        if (imageData.data[i + 3] == 0) {// 背景色;如果是其他颜色不设置
          imageData.data[i]=255;
          imageData.data[i+1]=255;
          imageData.data[i+2]=255;
          imageData.data[i+3]=255;
        }
      }
      ctx.putImageData(imageData,0,0)
      let resizedFile = base64ToFile(canvas.toDataURL("image/jpeg", 80 / 100), origFile);
      callback ? callback(resizedFile) : ''
    });
  });
  reader.readAsDataURL(origFile);
};

export const getBase64=function (img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}