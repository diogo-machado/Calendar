if (document.readyState !== 'loading') {
  console.log('document is already ready, just execute code here');
  myInitCode();
} else {
  document.addEventListener('DOMContentLoaded', function () {
    console.log('document was not ready, place code here');
    myInitCode();
  });
}

function myInitCode() {
  fillMonth();
}


const currentDate = new Date();
const firstDayOfTheMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
const lastDayOfTheMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

function renderTableCaption() {
  const monthsOfTheYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const captionMonth = document.getElementById('month');
  const captionYear = document.getElementById('year');
  captionMonth.innerText = monthsOfTheYear[currentDate.getMonth()];
  captionYear.innerText = currentDate.getFullYear();
}

function generateDay(dayNumber) {
  let td = document.createElement('td');
  td.textContent = dayNumber;
  return td;
}

function generateEmptyDay() {
  let td = document.createElement('td');
  td.classList.add('empty');
  return td;
}

function fillMonth() {
  renderTableCaption();
  const totalDaysMonth = lastDayOfTheMonth.getDate();
  let tableBody = document.getElementById('table-body');
  let dayOfTheMonth = 1;
  for (let weekNumber = 0; weekNumber < 6; weekNumber++) {
    let week = document.createElement('tr');
    for (let day = 0; day < 7; day++) {
      if (weekNumber === 0 && day < firstDayOfTheMonth.getDay()) {
        week.append(generateEmptyDay());
      } else if (dayOfTheMonth > totalDaysMonth) {
        break;
      } else {
        week.append(generateDay(dayOfTheMonth));
        dayOfTheMonth++;
      }
    }
    tableBody.append(week);
  }
}