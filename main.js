let oyna = document.querySelector('#oyna');
let tugma = document.querySelector('#tugma');
let list = document.querySelector('#list')

tugma.addEventListener('click', yaratish)

function yaratish(event) {
  event.preventDefault();

  let qiymat = oyna.value;
  if (qiymat !== "") {
    // li yaratish va ichiga p joylab ketish
    let item = document.createElement("li");
    item.setAttribute("class", "main__item");
    item.setAttribute("id", "item");
    list.appendChild(item);
    let text = document.createElement('p');
    text.setAttribute("class", "main__text");
    text.setAttribute("id", "text");
    item.appendChild(text);
    text.textContent = qiymat;

    // Bajarilgan ishlar uchun
    let element = document.createElement("div");
    element.setAttribute("class", "main__element");
    item.appendChild(element);

    element.addEventListener("click", belgi);
    let tekshir = false;
    let checkbox;
    function belgi() {
      if (!tekshir) {
        checkbox = document.createElement('img');
        checkbox.setAttribute("src", "check.png");
        checkbox.setAttribute("class", "main__checkbox");
        element.appendChild(checkbox);
        tekshir=true;
      }
      else{
        checkbox.remove();
        tekshir=false;
      }

    }





    // div yaratish va ichiga rasm qo'shish
    let box = document.createElement('div');
    box.setAttribute("class", "main__box");
    box.setAttribute("id", "box");
    item.appendChild(box);
    let pic = document.createElement('img');
    pic.setAttribute("class", "main__pic");
    pic.setAttribute("id", "pic");
    pic.setAttribute("src", "trash.png");
    box.appendChild(pic);

    box.addEventListener("click", deleteLI);

    function deleteLI() {
      item.remove();
    }
  } else {
    return;
  }


  oyna.value = ""
}