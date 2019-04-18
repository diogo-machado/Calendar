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


const monthsOfTheYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const captionMonth = document.getElementById('month');
const captionYear = document.getElementById('year');


function fillMonth() {
  let captionMonth = document.getElementById('month');
  let captionYear = document.getElementById('year');
  captionMonth.innerText = monthsOfTheYear[currentDate.getMonth()];
  captionYear.innerText = currentDate.getFullYear();

  const totalDaysMonth = lastDayOfTheMonth.getDate();
  let renderNum = 1;
  let tableBody = document.getElementById('table-body');
  for (let i = 0; i < 6; i++) {
    let row = document.createElement('tr');
    for (let c = 0; c < 7; c++) {
      if (i === 0 && c < firstDayOfTheMonth.getDay()) {
        let td = document.createElement('td');
        td.classList.add('empty');
        row.append(td);
      } else if (renderNum > totalDaysMonth) {
        break;
      } else {
        let td = document.createElement('td');
        td.textContent = renderNum;
        row.append(td);
        renderNum++;
      }
    }
    tableBody.append(row);
  }
}