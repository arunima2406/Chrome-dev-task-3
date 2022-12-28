const btn = document.getElementById('popup')
const title = document.getElementById('display')
const likeCount = document.querySelector(".likeCount");
const commentCount = document.querySelector(".commentCount");



btn.disabled = true;
likeCount.addEventListener("change", stateHandle);

 function stateHandle() {
    if(document.querySelector(".likeCount").value === "") {
        btn.disabled = true;
    } else {
        btn.disabled = false;
    }
}
commentCount.addEventListener("change", commentHandle);
function commentHandle () {
    if(document.querySelector(".commentCount").value === "") {
        btn.disabled = true;
    } else {
        btn.disabled = false;
    }
}

async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
        let [tab]  = await chrome.tabs.query(queryOptions);
        title.innerHTML = tab.title;
        console.log(tab);
        
  chrome.tabs.create({
        active: true,
        url: 'https://www.linkedin.com/feed/'
    })
    
}
btn.addEventListener('click',function(){
    getCurrentTab();
});






    


