

function getFileNameFromPath(path) {
    var lastSlashIndex = path.lastIndexOf('/');
    if (lastSlashIndex === -1) {
        lastSlashIndex = path.lastIndexOf('\\'); // 处理Windows路径
    }

    if (lastSlashIndex === -1) {
        return path; // 如果路径中没有斜杠或反斜杠，那么整个字符串就是文件名
    } else {
        return path.substring(lastSlashIndex + 1); // 截取最后一个斜杠或反斜杠后的部分作为文件名
    }
}

function downloadFile(url) {
  var filename = getFileNameFromPath(url);
  var result = confirm("开始下载\n" + filename + "吗？");
  if (result){
    saveAs(url,filename)
  }
  }
