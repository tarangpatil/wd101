let db = [];

if (localStorage.getItem("data") !== null) {
    db = JSON.parse(localStorage.getItem("data"));
    db.forEach((i) => {
        addData(i.name, i.email, i.dob, i.acceptTerms);
    });
}

document.querySelector("form").onsubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    addData(
        formData.get("name"),
        formData.get("email"),
        formData.get("dob"),
        formData.get("acceptTerms")
    );

    db.unshift({
        name: formData.get("name"),
        email: formData.get("email"),
        dob: formData.get("dob"),
        acceptTerms: formData.get("acceptTerms"),
    });

    localStorage.setItem("data", JSON.stringify(db));
};

function addData(name, email, dob, termsAccepted) {
    const table = document.querySelector("table");
    const newRow = table.insertRow(1);

    const newCell0 = newRow.insertCell(0);
    const newCell1 = newRow.insertCell(1);
    const newCell2 = newRow.insertCell(2);
    const newCell3 = newRow.insertCell(3);

    newCell0.className =
        newCell1.className =
        newCell2.className =
        newCell3.className =
            "py-2 px-4 border-b text-center";

    newCell0.textContent = name;
    newCell1.textContent = email;
    newCell2.textContent = dob;
    newCell3.textContent = termsAccepted === "on";
}
