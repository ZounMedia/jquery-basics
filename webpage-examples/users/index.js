$(document).ready(function () {
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/users",
    method: "GET",
    success: function (users) {
      console.log(users);
      users.forEach(function (user) {
        let userCard = `<div class="col-md-4 user-card">
                            <a href='https://jsonplaceholder.typicode.com/users/${user.id}' target='_blank'>
                            <div class="card">
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
        $("#user-cards").append(userCard);
      });
    },
    error: function (error) {
      console.log(error);
    },
  });
});

//Sam example using feetch instead of ajax
$(document).ready(function () {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
      users.forEach(function (user) {
        var userCard = `<div class="col-md-4 user-card">
                            <a href='https://jsonplaceholder.typicode.com/users/${user.id}' target='_blank'>
                            <div class="card">
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
        $("#user-cards").append(userCard);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
