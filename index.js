let db = [];

if (localStorage.getItem("data") !== null) {
    db = JSON.parse(localStorage.getItem("data"));
    for (let i = db.length - 1; i >= 0; i--) {
        addData(
            db[i].name,
            db[i].email,
            db[i].password,
            db[i].dob,
            db[i].acceptTerms
        );
    }
}

document.querySelector("form").onsubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    addData(
        formData.get("name"),
        formData.get("email"),
        formData.get("password"),
        formData.get("dob"),
        formData.get("acceptTerms")
    );

    db.unshift({
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
        dob: formData.get("dob"),
        acceptTerms: formData.get("acceptTerms"),
    });

    localStorage.setItem("data", JSON.stringify(db));
};

function addData(name, email, password, dob, termsAccepted) {
    const table = document.querySelector("table");
    const newRow = table.insertRow(1);

    const newCell0 = newRow.insertCell(0);
    const newCell1 = newRow.insertCell(1);
    const newCell2 = newRow.insertCell(2);
    const newCell3 = newRow.insertCell(3);
    const newCell4 = newRow.insertCell(4);

    newCell0.className =
        newCell1.className =
        newCell2.className =
        newCell3.className =
        newCell4.className =
            "py-2 px-4 border-b text-center";

    newCell0.textContent = name;
    newCell1.textContent = email;
    newCell2.textContent = password;
    newCell3.textContent = dob;
    newCell4.textContent = termsAccepted === "on";
}
