document.addEventListener("DOMContentLoaded", () => {
    const form = document.forms.new_contact;

    form.addEventListener("submit", onSubmit);

    const resetEl = form.querySelector('button[type="reset"]');
    resetEl?.addEventListener("click", onReset);

    function onSubmit(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(form);
        const firstname = formData.get("first_name");
        const lastname = formData.get("last_name");
        const street = formData.get("street");
        const postalcode = formData.get("postal_code");
        const location = formData.get("location");
        const email = formData.get("email");

        // Build new contact card
        const h1 = document.querySelector("h1");
        const new_contact = document.createElement("div");
        new_contact.classList.add("contact");

        const fullnameEl = document.createElement("h2");
        fullnameEl.innerText = `${firstname} ${lastname}`;
        new_contact.appendChild(fullnameEl);

        const address = document.createElement("div");
        address.classList.add("address");
        const streetEl = document.createElement("p");
        streetEl.innerText = street;
        address.appendChild(streetEl);

        const locationEl = document.createElement("p");
        locationEl.innerText = `${postalcode} ${location}`;
        address.appendChild(locationEl);

        new_contact.appendChild(address);

        const emailEl = document.createElement("p");
        emailEl.innerText = email;
        new_contact.appendChild(emailEl);

        h1.after(new_contact);

        // Empty form, no reload
        form.reset();
    }

    function onReset() {
        form.reset();
    }
});