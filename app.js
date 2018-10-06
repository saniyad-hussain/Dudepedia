let details = document.getElementById("details");

//Eventlistener
document.getElementById("filterInput").addEventListener("keyup", () => {
  let filterInputValue = document
    .getElementById("filterInput")
    .value.toUpperCase();
  let ul = document.getElementById("names");
  let li = ul.querySelectorAll("li.list-group-item");
  for (let i = 0; i < li.length; i++) {
    let contacts = li[i].getElementsByTagName("a")[0];
    //if matched
    if (contacts.innerHTML.toUpperCase().indexOf(filterInputValue) > -1) {
      li[i].style.display = "";
      details.innerText = `${contacts.innerText.toLowerCase()}`;
      if (details.innerText === "ahmed") {
        details.innerHTML = `<div class="\ card"\ style="\width: 18rem;"\>
                                <img class="\ card-img-top"\ src="\ https://scontent.fdac16-1.fna.fbcdn.net/v/t1.0-9/27867009_1711244845601954_2912337016737111084_n.jpg?_nc_cat=107&oh=71e223cc545dbb77739dcb00f9eac6bb&oe=5C614900\" alt="\Card image cap"\>
                                <div class="\card-body"\>
                                    <h5 class="\ard-title"\>Ahmed Mohammed</h5>
                                    <p class="\card-text"\>Tall guy, whose brain is in Hatuth(knee)..LOL</p>
                                    <a href="\https://www.facebook.com/profile.php?id=100001493650453"\ class="\ btn btn-danger"\>Facebook Id</a>
                                </div>
                                </div>`;
      } else if (details.innerText === "sakib") {
        details.innerHTML = `<div class="\ card"\ style="\width: 18rem;"\>
                                <img class="\ card-img-top"\ src="\ https://scontent.fdac16-1.fna.fbcdn.net/v/t1.0-9/36961330_2185108141531030_1115385444649926656_n.jpg?_nc_cat=105&oh=67706ec631072fcf36002395c7d2738e&oe=5C5E94D6\" alt="\Card image cap"\>
                                <div class="\card-body"\>
                                    <h5 class="\ard-title"\>Sakib Rahman</h5>
                                    <p class="\card-text"\>He has talent but he doesnt like to use it.So,i call him GARIYA</p>
                                    <a href="\https://www.facebook.com/sakib.rahman3"\ class="\ btn btn-danger"\>Facebook Id</a>
                                </div>
                                </div>`;
      } else if (details.innerText === "nipu") {
        details.innerHTML = `<div class="\ card"\ style="\width: 18rem;"\>
                                <img class="\ card-img-top"\ src="\ https://scontent.fdac16-1.fna.fbcdn.net/v/t1.0-9/32876527_1894964967220269_7521593852583477248_n.jpg?_nc_cat=108&oh=406b60a1226517a9959fbee9f76fad3b&oe=5C4BC4C2\" alt="\Card image cap"\>
                                <div class="\card-body"\>
                                    <h5 class="\ard-title"\>Imran Alom</h5>
                                    <p class="\card-text"\>Without him adda jome na.He looks innocent but he is not. </p>
                                    <a href="\https://www.facebook.com/imran.alom"\ class="\ btn btn-danger"\>Facebook Id</a>
                                </div>
                                </div>`;
      }
    }

    if (filterInputValue === "") {
      li[i].style.display = "";
      info.innerHTML = "";
      details.innerHTML = "";
    } else {
      li[i].style.display = "none";
    }
  }
});
