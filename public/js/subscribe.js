const subscriptionButtons = document.querySelectorAll(".subscribe-btn");

// document.getElementById("music-subscribe").addEventListener("click", function() {
//     fetch(`/api/subscription/${id}`, {
//       method: "POST",
//       body: JSON.stringify({}),
//       headers: {
//         "Content-Type": "application/json"
//       }
//     })
//     .then(response => {
//       if (response.ok) {
//         return response.json();
//       } else {
//         throw new Error('Failed to subscribe :(');
//       }
//     })
//     .then(data => {
//       addSubscription(data.hobby);
//       document.location.replace('/');
//     })
//     .catch(error => {
//       alert(error.message);
//     });
//   });
  
  // Define function to add a subscription to the list
  function addSubscription(hobby) {
    const newSubscription = document.createElement('li');
    newSubscription.textContent = hobby;
    subscriptionList.appendChild(newSubscription);
  }
  

  

  


  // Define variables for the buttons and the subscription list
const subscribeButtons = document.querySelectorAll('.subscribe-btn');
const subscriptionList = document.querySelector('#subscription-list');

// Define function to add a subscription to the list
function addSubscription(hobby) {
  const newSubscription = document.createElement('li');
  newSubscription.textContent = hobby;
  subscriptionList.appendChild(newSubscription);
}

// Define event listener for each subscribe button
subscribeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const hobby = button.getAttribute('data-hobby');
    console.log(`Subscribe button clicked for ${hobby}`);
    addSubscription(hobby);
  });
});

