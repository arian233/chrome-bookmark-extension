const inputbtn = document.getElementById("input-btn")
let myLeads = ["fgd"]
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deletebtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")




if (localStorage.getItem("myLeads") != null){
    myLeads = JSON.parse(localStorage.getItem("myLeads"))
    renderLeads(myLeads)
}


tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs=>{
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        renderLeads(myLeads)
    })


    

})

deletebtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    renderLeads(myLeads)
})


inputbtn.addEventListener("click", function(){
    var link = document.getElementById("input-el").value
    myLeads.push(link)
    inputEl.value = ""
        localStorage.setItem("myLeads", JSON.stringify(myLeads))


    renderLeads(myLeads)


    console.log(localStorage.getItem("mLeads"))
})

function renderLeads(leads){
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
        <li>
            <a href=${leads[i]}
                target='_blank'>${leads[i]}
            </a>
         </li>`
    }

    ulEl.innerHTML = listItems
}


