let count = 0;
const btn = document.getElementById("btn");

btn.onclick = function () {
  count++;
  btn.innerHTML = count;
};
