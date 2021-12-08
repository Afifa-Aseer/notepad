function newElement() {
    var outer_div = document.getElementById("card-outer");
    var title = document.getElementById("myInput1").value;
    var desc = document.getElementById("myInput2").value;
    if (title === '' && desc === '') {
            alert("You must write something!");
          } else {
            outer_div.innerHTML += `<div class="card" id="myUL" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title" id="title">${title}</h5>
              <p class="card-text">${desc}</p>
              <button class="btn btn-info" onclick="edit(this)">edit</button>
              <button class="btn btn-info" onclick="del(this)">del</button>
            </div>
          </div>`;
          }
          document.getElementById("myInput1").value = "";
          document.getElementById("myInput2").value = "";
  }

  function edit(e){
        var title = e.closest(".card-body").querySelector('.card-title').innerHTML;
        var dec = e.closest(".card-body").querySelector('.card-title').innerHTML
        e.closest(".card-body").querySelector('.card-text').innerHTML = editdec;
        var edit_title = prompt("ENTER TITLE VALUE", title);
        var editdec = prompt("ENTER DESCRIPTION VALUE", dec);
        e.closest(".card-body").querySelector('.card-title').innerHTML = edit_title;
        e.closest(".card-body").querySelector('.card-text').innerHTML = editdec;
  }
  
  function del(e){
    e.closest(".card").innerHTML = "";
  }
  
  
  
  function delElement() {
    var del= document.getElementById("card-outer")
    del.innerHTML = "";
  }
  
  
  