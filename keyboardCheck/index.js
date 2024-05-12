let keyElement = document.querySelector(".key");
document.addEventListener("keypress", (e) => {
    let key =  e.key;
    let code = e.code;
    let keyCode = e.keyCode;
    keyElement.innerHTML = `<table>
        <tr>
            <th>Key Name</th> 
            <th>Key Code</th>
            <th>Code</th>
        </tr>
        <tr>
            <td>${code}</td>
            <td>${key}</td>
            <td>${keyCode}</td>
        </tr>
    </table>`;
    
});