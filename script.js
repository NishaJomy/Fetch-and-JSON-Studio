// TODO: add code here
window.addEventListener('load',function(){

    fetch("https://handlers.education.launchcode.org/static/astronauts.json")
    .then( function(response){
        return response.json();
    }).then(function(response){

let sortedData=response.sort(function(a,b){
    return a.hoursInSpace-b.hoursInSpace
})

        let finalData='';
for(let i=0;i<response.length;i++){
    let dataToContainer=`

    <div class="astronaut">
            <div class="bio">
                <h3>${sortedData[i].firstName} ${sortedData[i].lastName}</h3>
                <ul>
                    <li>Hours in space: ${sortedData[i].hoursInSpace}</li>
                    <li>Active:${sortedData[i].active} </li>
                    
                    <li>Skills:${sortedData[i].skills.join(", ")}</li>
                </ul>
            </div>
    <img class="avatar" src="${sortedData[i].picture}">
    </div> 
    `

finalData+=dataToContainer;

    }

    document.getElementById("container").innerHTML=finalData;
     
    })
    
});