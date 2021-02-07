const emailCollectorForm = document.getElementById('Email-Collector');

emailCollectorForm.addEventListener('submit', event => {
    event.preventDefault()

    const formData = new FormData(emailCollectorForm);


    const userFirstName = formData.get('firstName');
    const userEmail = formData.get('emailAddress');

    const updatedHtmlContent = `
        <h2>Congratulations, ${userFirstName}!</h2>
        <p>You're on your way to becoming a BBQ Master!</p>
        <p class="fine-print">You will get weekly BBQ tips sent to: ${userEmail}</p>
    `;
    document.getElementById('Main-Content').innerHTML = updatedHtmlContent;
})