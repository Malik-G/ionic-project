const expense = document.querySelector('#input-expense');
const amount = document.querySelector('#input-amount');
const addExpense = document.querySelector('#btn-add');
const clearHistory = document.querySelector('#btn-clear');
const totalSpan = document.querySelector('#total-amount');
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
    totalSpan.textContent = currentTotal;
    expenseList.appendChild(newItem);
    expense.value = '';
    amount.value = '';
  }
});

clearHistory.addEventListener('click', () => {
  currentTotal = 0
  totalSpan.innerHTML = '';
  expenseList.innerHTML = '';
  expense.value = '';
  amount.value = '';
})
