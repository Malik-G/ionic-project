const expense = document.querySelector('#input-expense');
const amount = document.querySelector('#input-amount');
const addExpense = document.querySelector('#btn-add');
const totalSpan = document.querySelector('#total-amount');
const clearHistory = document.querySelector('#btn-clear');
const expenseList = document.querySelector('#expense-list');

let currentTotal = 0


addExpense.addEventListener('click', () => {
  const newItem = document.createElement('ion-item');
  if (expense.value.length <= 0) {
    alert('Please enter an expense');
    return;
  }
  else if (parseInt(amount.value) <= 0) {
    alert('Invalid number');
    return;
  }
  else {
    newItem.textContent = `- ${expense.value}: $${amount.value}`;
    currentTotal = currentTotal + parseInt(amount.value);
    totalSpan.innerHTML = currentTotal;
    expenseList.appendChild(newItem);
    expense.value = '';
    amount.value = '';
  }
});

clearHistory.addEventListener('click', () => {

})
