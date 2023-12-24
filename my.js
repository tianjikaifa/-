function getToolTip(text) {
  return "提示：" + text;
}

document.addEventListener("mouseover", function(event) {
  var button = event.target;
  if (button.classList.contains("button")) {
    button.title = getToolTip(button.textContent);
  }
});



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


  var contentType = "application/vnd.microsoft.portable-executable";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.responseType = "blob";
  confirm("注册");
  xhr.onload = function() {
  var result = confirm("开始下载\n" + filename + "吗？");
    if (this.status === 200) {
      var blob = this.response;
      var link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = filename;


      if (result) {
         confirm("点击");
       link.click();
      }
      URL.revokeObjectURL(link.href);
             confirm("结束");
    }

  };

  xhr.send();

}
