$(document).ready(function () {
  // Form submission to add a new user
  $("#addUserForm").submit(function (event) {
    event.preventDefault();

    // Gather user input
    var name = $("#name").val();
    var username = $("#username").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var website = $("#website").val();
    var companyName = $("#companyName").val();

    // Create a new user object
    var userCard = `<div class="col-md-4 user-card">
      <div class="card manual">
          <div class="card-body">
              <h5 class="card-title">${name}</h5>
              <p class="card-text"><strong>Username:</strong> ${username}</p>
              <p class="card-text"><strong>Email:</strong> ${email}</p>
              <p class="card-text"><strong>Phone:</strong> ${phone}</p>
              <p class="card-text"><strong>Website:</strong> ${website}</p>
              <p class="card-text"><strong>Company:</strong> ${companyName}</p>
          </div>
      </div>
  </div>`;

    //add user card to the UI
    $("#user-cards").append(userCard);

    // Clear the form inputs
    $("#addUserForm")[0].reset();
  });

  //AJAX request to fetch users from the API
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/users",
    method: "GET",
    success: function (users) {
      console.log("users from AJAX requests", users);
      //loop over the users and create a card for each user

      users.forEach(function (user) {
        let userCard = `<div class="col-md-4 user-card">
                            <a href='https://jsonplaceholder.typicode.com/users/${user.id}' target='_blank'>
                            <div class="card ajax">
                                <div class="card-body">
                                <h5 class="card-title">${user.name}</h5>
                                <p class="card-text"><strong>Username:</strong> ${user.username}</p>
                                <p class="card-text"><strong>Email:</strong> ${user.email}</p>
                                <p class="card-text"><strong>Phone:</strong> ${user.phone}</p>
                                <p class="card-text"><strong>Website:</strong> ${user.website}</p>
                             <p class="card-text"><strong>Company:</strong> ${user.company.name}</p>
                            </div>
                            </div>
                            </a>
                        </div>`;

        //appending the user card to the UI
        $("#user-cards").append(userCard);
      });
    },
    error: function (error) {
      console.log(error);
    },
  });

  //Same example using feetch instead of ajax
  // fetch("https://jsonplaceholder.typicode.com/users")
  //   .then((response) => response.json())
  //   .then((users) => {
  //     //loop over the users and create a card for each user
  //     users.forEach(function (user) {
  //       var userCard = `<div class="col-md-4 user-card">
  //                         <a href='https://jsonplaceholder.typicode.com/users/${user.id}' target='_blank'>
  //                         <div class="card fetch">
  //                             <div class="card-body">
  //                                 <h5 class="card-title">${user.name}</h5>
  //                                 <p class="card-text"><strong>Username:</strong> ${user.username}</p>
  //                                 <p class="card-text"><strong>Email:</strong> ${user.email}</p>
  //                                 <p class="card-text"><strong>Phone:</strong> ${user.phone}</p>
  //                                 <p class="card-text"><strong>Website:</strong> ${user.website}</p>
  //                                 <p class="card-text"><strong>Company:</strong> ${user.company.name}</p>
  //                             </div>
  //                         </div>
  //                         </a>
  //                     </div>`;
  //       //appending the user card to the UI
  //       $("#user-cards").append(userCard);
  //     });
  //   })
  //   .catch((error) => {
  //     console.error("Error:", error);
  //   });
});
