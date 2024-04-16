document.addEventListener('DOMContentLoaded', function() {
    const link = document.getElementById('dateLink');

    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor click behavior
        const currentDate = getCurrentDate();
        link.href = "/real_connection/" + currentDate + ".html"; // Set the href attribute
        window.location.href = link.href; // Redirect to the new URL
    });

    function getCurrentDate() {
        const now = new Date();
        const month = now.getMonth() + 1;
        const day = now.getDate();
        return `${month}-${day}`;
    }
});
