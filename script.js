function addInTable()
{
    let newRow = document.createElement("tr");
    let tdKey = document.createElement("td");
    let tdValue = document.createElement("td");
    let button1 = document.createElement("td");
    let button2 = document.createElement("td");
    let button3 = document.createElement("td");

    tdKey.innerHTML=`<input type="text" class="key">`;
    tdValue.innerHTML=`<input type="text" class="value">`;
    button1.innerHTML=`<button onclick="moveUpRow(this)">↑</button>`;
    button2.innerHTML=`<button onclick="moveDownRow(this)">↓</button>`;
    button3.innerHTML=`<button onclick="deleteRow(this)">x</button>`;
    
    newRow.appendChild(tdKey);
    newRow.appendChild(tdValue);
    newRow.appendChild(button1);
    newRow.appendChild(button2);
    newRow.appendChild(button3);
    document.querySelector("tbody").append(newRow);

    // Other option through classes
    // button1.addEventListener("click", function(e){
    //     let nowRow = e.target.closest("tr");
    //     let upperRow = nowRow.previousElementSibling;
    //     nowRow.closest("tbody").insertBefore(nowRow, upperRow);
    // });
    // button2.addEventListener("click", function(e){
    //     let nowRow = e.target.closest("tr");
    //     let underRow = nowRow.nextElementSibling;
    //     nowRow.closest("tbody").insertBefore(underRow, nowRow);
    // });
    // button3.addEventListener("click", function(e){
    //     e.target.closest("tr").remove();
    // });
};

function saveTable()
{
    let rows = document.querySelectorAll("table tr");
    let stringMap;
    if(rows.length == 0){
        stringMap = "Table is empty"; 
    }
    else{
        stringMap = "{";
        Array.from(rows).forEach((row) => {
            stringMap += `"${row.querySelector(".key").value}":"${row.querySelector(".value").value}",`;
        });
        stringMap = stringMap.slice(0, -1);
        stringMap += "}";    
    }
    document.querySelector(".saveMap").textContent = stringMap;
}

function moveUpRow(e)
{
    let nowRow = e.closest("tr");
    let upperRow = nowRow.previousElementSibling;
    if(upperRow != null){
        nowRow.closest("tbody").insertBefore(nowRow, upperRow);
    };
}

function moveDownRow(e)
{
    let nowRow = e.closest("tr");
    let underRow = nowRow.nextElementSibling;
    if(underRow != null){
        nowRow.closest("tbody").insertBefore(underRow, nowRow);  
    };
}

function deleteRow(e)
{
    e.closest("tr").remove();
}
