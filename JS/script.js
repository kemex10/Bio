/*---------------------------*/
/* Function constructor */
/*---------------------------*/

let getValue = (function () { // class with the name getValue so we can log it later

    let User = function (name, email, password) { // Function Constructor, so we can create an object out of our input fields
        this.name = name;
        this.email = email;
        this.password = password;
    };

    // Create new user object by returning this when logging getValue();
    return newUser = new User(this.name, this.email, this.password); // We create a new object using our input values, after submitting
});

/*---------------------------*/
/* Submit buttons (form) */
/*---------------------------*/

// Making a const for submit and field at the top since they are to be global and not lokal
const submit = document.getElementById('submit');
const field = document.querySelectorAll('.field');
// Createing an event on click for the submit button, so it activates the form event with a submit event to it.
submit.addEventListener('click', () => {

    console.log(getValue()) // Log my UserObj (the user information after submitting the form)
    const form = document.getElementById('form');

    form.addEventListener('submit', (e) => { // e = event and this is a submit event
        e.preventDefault(); // Prevents the submit event from refreshing the page each time we click on it

        // Our inputs we want to get checked on
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const password = document.getElementById('password');

        let eligibleToSubmit = false; // eligibleToSubmit is set to false, so if I set it to true, it will be used as a confirmation for the page to ask if it's okay to reload, if all eligibleToSubmit is true/the requirements are all met, then issue the reload function longer down

        // NAME VALIDATOR
        if (name.value === "") { // If there is nothing in the input field, issue this command
            error(name); // Error is set to name, so it targets this input box, and not all other input boxes
            this.name = name.value; // Were setting it up so if nothing is in the field, our object should not have a name either (we are taking th this.name form the User contructor up earlier)
            return false; // We return it false;
        } else { // If the field is not empty we want it to write in the names value of the input field, if we did not say this.name = name.value up earlier, it would have just kept using the old name instead of resetting it to no name ("")
            this.name = name.value;
            eligibleToSubmit = true; // This is the true statement of the if() name statement
        };

        // EMAIL VALIDATOR
        if (email.value === "") { // If there is nothing in the input field, issue this command
            error(email);
            this.email = email.value;
            return false;
        } else if (!emailError(email.value)) { // If emailError is not = email.value then issue this statement
            error(email);
            this.email = email.value;
            let emailErrors = document.querySelector('.emailError'); // Getting the emailError element form the HTML
            emailErrors.style.display = "block" // We set it to display block (it's originally set to display none in the css) so we can see it when email has an error
            return false;
        } else {
            this.email = email.value;
            let emailErrors = document.querySelector('.emailError');
            emailErrors.style.display = 'none'; // Here we set it to none again, when the email is then correct
            eligibleToSubmit = true; // This is the true statement of the if() email statement
        };

        if (eligibleToSubmit == true) {
            location.reload()
        }

    });
});

// Error input
function error(input) { // Parameter = input(input = value or variable we write in error("")) [it targets a specefic input]
    // On keypress(any) remove field class error and error circle()
    input.style.border = "2px solid #ff0000"
    input.addEventListener('keypress', () => { // If not keypress we can't make it so the error disappears inside, with just pressing any key on the keyboard
        input.style.border = "none"
        let emailErrorKeypress = document.querySelector('.emailError');
        emailErrorKeypress.style.display = 'none'; // Dispaly help message for email to none
    });
};

// Function for email (so user  have to use @ and .)
function emailError(email) {
    // Email pattern (RegEx)
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
};