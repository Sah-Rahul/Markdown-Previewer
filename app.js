const markdownInput = document.querySelector("#markdown-input");
const preview = document.querySelector(".preview");
const clear = document.querySelector(".reset-btn");




// grab the input data 
const markInput = () => {
  markdownInput.addEventListener("input", (e) => {
    preview.innerHTML = DOMPurify.sanitize(marked.parse(e.target.value));
  });
};

// Configure marked.js options
marked.setOptions({
  breaks: true,
  gfm: true,
  smartLists: true,
});

// clear preview data
const clearPreview = () => {
  clear.addEventListener("click", () => {
    markdownInput.value = "";
    preview.innerHTML = "";
  });
};


// call all function here 

markInput();
clearPreview()