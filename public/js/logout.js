//used for the logout
// refer to module 14 activity 16

//  asynchrnous function to logout
async function logout() {
    // this variable will respond to the response from the server and will be used to send the response to the client.
    const response = await fetch('/logout', {
        // the method is POST
        method: 'post',
        // the headers are the headers we want to send to the server
        headers:  {'Content-Type': 'application/json'}
    });

    // if the response is ok we send the response to the client and we redirect to the homepage
    if (response.ok) {
        document.location.replace('/');
    } else {
        // if the response is not ok we send the response to the client
        alert(response.statusText);
    };
};

// add the event listener to the logout button with the id of logout
document.querySelector('#logout').addEventListener('click', logout);