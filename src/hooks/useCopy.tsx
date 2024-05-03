const copy = (code: any, idElement: string, content: string) => {
  navigator.clipboard.writeText(code);
  if (document.getElementById(idElement)!.innerHTML !== 'Đã sao chép') {
    setTimeout(() => {
      document.getElementById(idElement)!.innerHTML = content;
    }, 3000);
  }
  document.getElementById(idElement)!.innerHTML = 'Đã sao chép';
};

export default copy;
