const reasonInput = document.querySelector("#input-reason");
const amountInput = document.querySelector("#input-amount");
const cancelBtn = document.querySelector("#btn-cancel");
const confirmBtn = document.querySelector("#btn-confirm");
const expensesList = document.querySelector("#expenses-list");
const totalExpenses = document.querySelector("#expenses-total");
const alertCtrl = document.querySelector("ion-alert-controller");

let total = 0;

const clear = () => {
    reasonInput.value = '';
    amountInput.value = '';
};

confirmBtn.addEventListener('click', () => {
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;

    // validation check
    if (enteredReason.trim().length <= 0 || 
        enteredAmount <= 0 || enteredAmount.trim().length <= 0) {

        alertCtrl.create({
            message: 'Please enter valid reason and amount',
            header: 'Invalid inputs',
            buttons: ['Okay']
        }).then(alertElement => {
            alertElement.present();
        });
        return;
    }
    
    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason + ": $" + enteredAmount;
    expensesList.appendChild(newItem);

    // convert to a number from string and add to total
    total += +enteredAmount;
    totalExpenses.textContent = total;

    clear();
});

cancelBtn.addEventListener('click', clear)

