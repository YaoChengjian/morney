const objTag = {
  loading() {
    let modeTag: string[];
    return (modeTag = JSON.parse(window.localStorage.getItem("getTag")!) || [
      "衣",
      "食",
      "住",
      "行",
    ]);
  },
};

export default objTag;
