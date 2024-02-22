
const btn = document.querySelector('#btn')
const ul = document.querySelector('.ulList');
var input = document.querySelector("#name");
const silBtn = document.querySelector("#silBtn");
const silInput = document.querySelector("#silInput");
const names = JSON.parse(localStorage.getItem('locname') || "[]");



AddList()
function saveData() {
  if (input.value.length == 0) {
    alert('inputu bos yazmaq olmaz')
  } else {
    var data = document.getElementById("name").value;
    names.push(data);
    localStorage.setItem('locname', JSON.stringify(names));
    AddList()
    input.value = ''
  }
}

function AddList() {
  ul.innerHTML = '';
  for (var text of names) {
    var li = document.createElement("li");
    li.innerHTML = text;
    li.classList.add('demka')
    const button = document.createElement("button");
    button.innerHTML = 'button';
    button.classList.add('btn')
    button.addEventListener('click', deletFunc)
    ul.appendChild(li)
    li.appendChild(button)
    // console.log(li)
  }

}
function deletFunc(e) {
  let target = e.currentTarget.parentNode;
  target.remove();
}

function yoxla(data) {
  var data = document.getElementById("checkName").value;
  var one = document.getElementById('one');
  if (names.includes(data)) {
    // location.href = "https://www.google.com/";
    var d = document.querySelectorAll('.demka')
    d.forEach((item) => {
      one.style.display = 'block'
      one.innerHTML = `Hörmətli <b style="font-size: 25px">${item.firstChild.textContent}</b> bəy sizin adınız tapıldı.`
    });
  } else {
    console.log(false)

  }
}

// const pdk = JSON.parse(localStorage.getItem('locname'));
silBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const iVal = silInput.value;
  pdk.push(iVal);
  localStorage.setItem("locname", JSON.stringify(pdk));

  localStorage.removeItem('locname');

  console.log(iVal)
})
