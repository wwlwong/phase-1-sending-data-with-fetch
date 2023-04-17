// Add your code here
function submitData(userName, userEmail){
    const formData = {
        name: userName,
        email: userEmail,
    };
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(formData),
  };

  return fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
        return response.json();
    })
    .then(function (object) {
        const element = document.createElement("div");
        document.body.appendChild(element);
        document.querySelector('div').innerHTML = object.id;
    })
    .catch(function (error) {
        document.querySelector('div').innerHTML = error.message;
    })
}
