// Feature 1: Form Validation
function validateForm() {
  const firstName = document.getElementById("firstname").value;
  const lastName = document.getElementById("lastname").value;
  const address1 = document.getElementById("address1").value;
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;
  const zipcode = document.getElementById("zipcode").value;
  const country = document.getElementById("country").value;
  const email = document.getElementById("email").value;
  const donation = document.querySelector('input[name="donation"]:checked');

  if (!firstName || !lastName || !address1 || !city || !state || !zipcode || !country || !email || !donation) {
    alert("Please fill in all required fields.");
    return false;
  }

  // Feature 2: Email Validation
  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  return true;
}

// Email Validation Function
function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}

// Feature 3: Donation Amount Check
document.querySelectorAll('input[name="donation"]').forEach((radio) => {
  radio.addEventListener('change', function () {
    const otherAmount = document.getElementById('otherAmount');
    if (this.value === 'Other') {
      otherAmount.style.display = 'block';
    } else {
      otherAmount.style.display = 'none';
    }
  });
});

// Feature 4: Recurring Donation Fields
document.querySelector('input[name="recurring"]').addEventListener('change', function() {
  const recurringFields = document.querySelector('.recurring-fields');
  if (this.checked) {
    recurringFields.style.display = 'block';
  } else {
    recurringFields.style.display = 'none';
  }
});
// Feature 5: Select State and Country Default Options
window.onload = function() {
  document.querySelector('select[name="state"]').value = "New York";
  document.querySelector('select[name="country"]').value = "USA";
};


// Feature 7: Reset Button Confirmation
const resetButton = document.querySelector('button[type="reset"]');
resetButton.addEventListener('click', function () {
  const confirmation = confirm("Are you sure you want to reset the form?");
  if (!confirmation) {
    event.preventDefault();
  }
});

// Feature 8: Show/Hide Honor Name Placeholder
document.querySelectorAll('input[name="donation_radio"]').forEach((radioButton) => {
  radioButton.addEventListener('change', function() {
    const nameField = document.getElementById('name');
    if (this.id === 'to_honor') {
      nameField.placeholder = "Name to honor";
    } else if (this.id === 'in_memory_of') {
      nameField.placeholder = "Name in memory of";
    }
  });
});

// Feature 9: Character Limit on Comments
document.getElementById("comments").addEventListener('input', function () {
  const charLimit = 200;
  if (this.value.length > charLimit) {
    alert("Character limit reached (200 characters)!");
    this.value = this.value.substring(0, charLimit);
  }
});

// Feature 10: Optional Recurring Total (Example for Extension)
document.querySelector('input[name="monthly_amount"]').addEventListener('input', function() {
  const monthlyAmount = parseFloat(this.value) || 0;
  const months = parseInt(document.querySelector('input[name="months"]').value) || 0;
  const total = monthlyAmount * months;
 
  const totalElement = document.createElement('p');
  totalElement.textContent = `Total donation for ${months} months: $${total}`;
  document.querySelector('.recurring-fields').appendChild(totalElement);
});

// Attach validation to form submit
document.querySelector('form').addEventListener('submit', function (event) {
  if (!validateForm() || !validatePassword()) {
    event.preventDefault();
  }
});

