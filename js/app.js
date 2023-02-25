const displayCards = () => {
    const header = document.getElementById('header');
    header.innerText = `${person.message}`
    const cardContainer = document.getElementById('card-container');
    const allPerson = person.result;
    allPerson.forEach(element => {
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `
        <div class="card w-full bg-base-100 shadow-lg rounded-md">
            <div class="card-body">
                <h2 class="card-title">Person Name: ${element.name.common}</h2>
                <p>Age: ${element.age}</p>
                <p><span>Street: ${element.address.street}, House No: ${element.address.house}</span></p>
            </div>
        </div>
        `
        cardContainer.appendChild(newDiv);
    });
}
displayCards();