
import datepicker from 'js-datepicker';
import { DateTime } from "luxon";

// variables
let dateInput = document.querySelector('.calculator__input input');
let answer = document.querySelector('.answer');

// Attach the picker to an input element.
const picker = datepicker(".datepicker", {
  maxDate: new Date(),
  onSelect: (instance, date) => {
    // Do stuff when a date is selected (or unselected) on the calendar.
    // You have access to the datepicker instance for convenience.
    dateInput.value = date.toLocaleDateString();

    // calculate
  var birthDate = DateTime.fromISO(date.toISOString());
  var today = DateTime.fromISO(new Date().toISOString());

  // var diff = today.diff(birthDate, ['years', 'months']);
  // var calculatedValue = diff.toObject();
  // console.log(calculatedValue);
  // answer.innerText = `You are ${calculatedValue.years} years ${parseInt(calculatedValue.months)} months old`
  }
});

// Toggle the calendar when a button is clicked.
dateInput.addEventListener('click', e => {
  // THIS!!! Prevent Datepicker's event handler from hiding the calendar.
  e.stopPropagation()

  // Toggle the calendar.
  const isHidden = picker.calendarContainer.classList.contains('qs-hidden')
  picker[isHidden ? 'show' : 'hide']()
})

document.querySelector('.calculator__button').addEventListener('click', calculateAge);

function calculateAge() {
  let enteredDate = document.querySelector('.calculator__input input');
  // calculate
  var convertedDate = new Date(enteredDate.value);
  var birthDate = DateTime.fromISO(convertedDate.toISOString());
  var today = DateTime.fromISO(new Date().toISOString());

  var diff = today.diff(birthDate, ['years', 'months']);
  var calculatedValue = diff.toObject();
  console.log(calculatedValue);
  answer.innerText = `You are ${calculatedValue.years} years ${parseInt(calculatedValue.months)} months old`
}