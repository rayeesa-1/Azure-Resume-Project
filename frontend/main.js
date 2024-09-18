window.addEventListener('DOMContentLoaded', (event)=>{
    getVisitCount();})

const functionApiUrl = 'https://raygetresumecounter.azurewebsites.net/api/GetResumeCounter?code=CEdXWNWPChvtnDKld1oqwi1qx_ixW1GCuOO_aEDLR1HsAzFuCWv1iQ%3D%3D';
const localfunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () =>{
    let count = 30
    fetch(functionApiUrl).then(response =>{
        return response.json()
    }).then(response =>{
        console.log("website called function API.");
        count = response.count;
        document.getElementById("counter").innerText=count;
    }).catch(function(error){
        console.log(error);
    });
    return count;

}