//your JS code here. If required.
const submitBtn = document.getElementById(`submit`);
const checkBox = document.getElementById(`checkbox`);
const userName = document.getElementById(`username`);
const parent = document.getElementById(`form_holder`);
let localData = localStorage.getItem("user");

submitBtn.addEventListener("click", function () {
  if (checkBox.checked) {
    localStorage.setItem("user", JSON.stringify(userName.value));
  }
  alert(`Logged in as ${userName.value}`);
});

function startApplicatoin() {
  if (localData == undefined || localData == null) {
    return;
  }

  //   let existingBtn = document.createElement("button");
  //   existingBtn.id = "existing";
  //   existingBtn.textContent = `Logged in as ${localData}`;
  //   parent.appendChild(existingBtn);

  //   existingBtn.addEventListener("click", function () {
  //     alert(`Logged in as ${localData}`);
  //   });
}

startApplicatoin();
