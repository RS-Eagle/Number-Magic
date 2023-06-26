let a = [1, 2, 3, 4, 5, 6, 7];
let b = [8, 9, 10, 11, 12, 13, 14];
let c = [15, 16, 17, 18, 19, 20, 21];
let newarr = [];
let i = -1;
let editedarr = [];
let invalu = 0;
let btn = document.querySelector("button");
let input = document.querySelector("input");
var aa;

const attacher = (one, two, third) => {
  editedarr = one.concat(two);
  newarr = editedarr.concat(third);
  console.log(newarr);
  a = [];
  b = [];
  c = [];
  shorter();
};

const shorter = () => {
  i++;
  putter();
};

const putter = () => {
  while (i < 21) {
    a.push(newarr[i]);
    i++;
    b.push(newarr[i]);
    i++;
    c.push(newarr[i]);
    i++;
  }
  invalu++;
  aa = b[3];
  if (invalu < 3) {
    populator();

    populator2();
    populator3();
  } else {
    a = [1, 2, 3, 4, 5, 6, 7];
    b = [8, 9, 10, 11, 12, 13, 14];
    c = [15, 16, 17, 18, 19, 20, 21];
    populator();

    populator2();
    populator3();
  }

  other_essential_trigger();
};

const populator = () => {
  i = -1;
  for (let fi = 0; fi < a.length; fi++) {
    // console.log("hii");
    document.querySelector("li").remove();
    let newli = document.createElement("li");
    let div = document.querySelector(".list1");
    newli.innerHTML = a[fi];
    div.appendChild(newli);
  }
};
const populator2 = () => {
  for (let si = 0; si < b.length; si++) {
    // console.log(si);
    document.querySelector(".li2").remove();
    let newli2 = document.createElement("li");
    newli2.classList.add("li2");
    let div22 = document.querySelector(".list2");
    newli2.innerHTML = b[si];
    div22.appendChild(newli2);
  }
};
const populator3 = () => {
  for (let ti = 0; ti < c.length; ti++) {
    document.querySelector(".li3").remove();
    let newli3 = document.createElement("li");
    newli3.classList.add("li3");
    let div3 = document.querySelector(".list3");
    newli3.innerHTML = c[ti];
    div3.appendChild(newli3);
  }
};

const runner = (userinput) => {
  //   var userinput = Number(prompt(""));

  if (userinput == 1) {
    attacher(b, a, c);
  } else if (userinput == 2) {
    attacher(a, b, c);
  } else if (userinput == 3) {
    attacher(a, c, b);
  } else {
    alert("Incorrect");
    input.value = "";
  }
};

function other_essential_trigger() {
  if (invalu < 2) {
    document.querySelector(".h1_in").innerHTML =
      "Now Find Your Number And Enter It's List No.";
  } else if (invalu == 2) {
    document.querySelector(".h1_in").innerHTML =
      "Now Again Find Your Number And Enter It's List No.";
  } else if (invalu == 3) {
    inc(aa);
    btn.disabled = true;
  }
  input.value = "";
}

btn.addEventListener("click", () => {
  var userinput = input.value;
  runner(userinput);
});

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    if (invalu < 3) {
      var userinput = input.value;
      runner(userinput);
    }
  }
});

let gg = -1;

const inc = (aa) => {
  gg++;
  console.log(aa);
  if (gg === aa) {
    document.querySelector(".h1_in").innerHTML = `You Have Selected ${gg}`;
    document.querySelector(".main-title").innerHTML =
      "Please Referesh It To Play Again";
    gg = -1;
  } else {
    setTimeout(() => {
      document.querySelector(".h1_in").innerHTML = `You Have Selected ${gg}`;
      inc(aa);
    }, 300);
  }
};
// // runner();
// attacher(b, a, c);
input.focus();
input.select();
