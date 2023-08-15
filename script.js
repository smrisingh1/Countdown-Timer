const end_date_user = new Date("1 December 2023 4:00 pm").toLocaleString();

document.getElementById("end-date").innerText = end_date_user;

const inputs = document.querySelectorAll("input");

function clock() {
  const end_date = new Date(end_date_user);
  const now_date = new Date();
  const differnce = end_date - now_date;
  console.log(differnce);

  if (differnce < 0) return;

  // days
  inputs[0].value = Math.floor(differnce / (1000 * 60 * 60 * 24));

  // hour
  inputs[1].value = Math.floor(
    (differnce % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  // min
  inputs[2].value = Math.floor((differnce % (1000 * 60 * 60)) / (1000 * 60));

  // sec
  inputs[3].value = Math.floor((differnce % (1000 * 60)) / 1000);
}

clock();

setInterval(() => {
  clock();
}, 1000);
