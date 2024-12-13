
const text_hidden = document.getElementById("ReadMore");
const extraContant = document.getElementById("extraContant");

extraContant.onclick = () => {
  if (text_hidden.style.display === "none") {
    text_hidden.style.display = "inline"; 
    extraContant.textContent = "Read Less"; 
  } else {
    text_hidden.style.display = "none";
    extraContant.textContent = "Read More"; 
  }
};

const text = document.getElementById("Read-More");
const extra = document.getElementById("Extra");

text.onclick = () => {
  if (extra.style.display === "none") {
    extra.style.display = "inline"; 
    text.textContent = "Read Less"; 
  } else {
    extra.style.display = "none";
    text.textContent = "Read More"; 
  }
};


const text1 = document.getElementById("readMore");
const extra_Contant = document.getElementById("extra-Contant");

text1.onclick = () => {
  if (extra_Contant.style.display === "none") {
    extra_Contant.style.display = "inline"; 
    text1_Contant.textContent = "Read Less"; 
  } else {
    extra_Contant.style.display = "none";
    text1.textContent = "Read More"; 
  }
};


const text2 = document.getElementById("read-More");
const Extra_Contant = document.getElementById("ExtraContant");

text2.onclick = () => {
  if (Extra_Contant.style.display === "none") {
    Extra_Contant.style.display = "inline"; 
    text2.textContent = "Read Less";  
  } else {
    Extra_Contant.style.display = "none";
    text2.textContent = "Read More"; 
  }
};
