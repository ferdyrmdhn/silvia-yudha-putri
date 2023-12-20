document.addEventListener("DOMContentLoaded", function () {
  var now = new Date();
  var greeting = "Selamat ";

  var hours = now.getHours();

  if (hours < 12) {
    greeting += "Pagi";
  } else if (hours < 18) {
    greeting += "Sore";
  } else {
    greeting += "Malam";
  }

  var daysOfWeek = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
  ];
  var dayOfWeek = daysOfWeek[now.getDay()];
  var date = now.getDate();
  var monthNames = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  var monthName = monthNames[now.getMonth()];
  var year = now.getFullYear();

  var greetingElement = document.getElementById("greeting");
  var dateElement = document.getElementById("date");

  greetingElement.textContent = greeting;
  dateElement.textContent = `${dayOfWeek}, ${date} ${monthName} ${year}`;
});
