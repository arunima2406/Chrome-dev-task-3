const btn = document.getElementById('popup')
const title = document.getElementById('display')
const likeCount = document.querySelector(".likeCount");
const commentCount = document.querySelector(".commentCount");

let likes = document.getElementsByClassName('artdeco-button__text react-button__text')[0].querySelector("span").innerHTML.replace(/\s/g, '')
let addComments = document.getElementsByClassName('ql-editor')[0].querySelector("div").innerHTML.replace(/\s/g, '')
let post = document.getElementsByClassName('artdeco-button__text')[0].querySelector("span").innerHTML.replace(/\s/g, '')
    





// browser.runtime.onMessage.addListener((request) => {
//   console.log("Message from the background script:");
//   console.log(request.greeting);
//   return Promise.resolve({ response: "Hi from content script" });
// });



// function connectToTab(tabs) {
//   if (tabs.length > 0) {
//     let examplePort = browser.tabs.connect(
//       tabs[0].id,
//       {name: "tabs-connect-example"}
//     );
//     examplePort.postMessage({greeting: "Hi from background script"});
//   }
// }

// function onError(error) {
//   console.log(`Error: ${error}`);
// }

// browser.browserAction.onClicked.addListener(() => {
//   let gettingActive = browser.tabs.query({
//     currentWindow: true, active: true
//   });
//   gettingActive.then(connectToTab, onError);
// });




// btn.addEventListener("click", function() {
//   const likeCountinfo = likeCount.value;
  
// post.addEventListener("submit", addNewComment);
// const comments_arr = [];
// const display_comments = () => {
//   let list = commentCount;
//    comments_arr.forEach(comment => {
//     list += `${comment}`;
//   })
//   comments.innerHTML = list;
// }

// clear.onclick = function(event){
//   event.preventDefault(); 
//    comments_arr.length = 0;
//   display_comments();
// }

// submit.onclick = function(event){
//     event.preventDefault();
//     const content = field.value;
//     if(content.length > 0){ // if there is content
//       comments_arr.push(content);
//       display_comments();
//     }
// }
    

// const getContactInfo =  ()=> { 
//     return new Promise((resolve,reject)=>{
//     document.getElementById("top-card-text-details-contact-info").click()
//     let contactInfo = {
//        linkedIn: "",
//        email: "",
//    }
//     setTimeout(()=>{
//         try {
//             contactInfo.linkedIn = document.getElementsByClassName("artdeco-modal__content")[0].getElementsByClassName("pv-contact-info__ci-container")[0].querySelector("a").innerHTML.replace(/\s/g, '')
//             contactInfo.email = document.getElementsByClassName("artdeco-modal__content")[0].getElementsByClassName("pv-contact-info__ci-container")[1].querySelector("a").innerHTML.replace(/\s/g, '')
//             resolve(contactInfo)
//             document.getElementsByClassName("artdeco-modal__dismiss")[0].click()
//         } catch (err) {
//             document.getElementsByClassName("artdeco-modal__dismiss")[0].click()
//             reject(contactInfo)
//         }
//     },5000)     
// })}


// const logginguserData = async ()=>{

//     const contacts = await getContactInfo()
//         .then(data => {return data})
//         .catch((err) => {return error})


//     const userInfo = {
//             name: getInfo().userName,
//             place: getInfo().location,
//             contactDetails: contacts
//         }

//     console.log(userInfo)
// }

// logginguserData()