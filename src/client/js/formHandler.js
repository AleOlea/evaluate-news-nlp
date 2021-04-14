function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formText = document.getElementById("name").value;
    Client.checkForName(formText); //ALE

    console.log("::: Form Submitted :::");
    fetch("http://localhost:8081/test/") //ALE 11/4following course instrctions changed port to 8081
        .then((res) => res.json())
        .then(function(res) {
            document.getElementById("results").innerHTML = res.message;
        });
}

export { handleSubmit };