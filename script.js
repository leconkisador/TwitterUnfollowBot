
// Function that will unfoolow n persons, n have to be not too high 25 max 
function Unfollowing(n) {
    for (let i = 1; i <= n; i++) {
        //geting the JS Path of the little div who say " this guy is following you"
        const selector = `#react-root > div > div > div.css-175oi2r.r-1f2l425.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div > div > section > div > div > div:nth-child(${i}) > div > div > div > div > div.css-175oi2r.r-1iusvr4.r-16y2uox > div.css-175oi2r.r-1awozwy.r-18u37iz.r-1wtj0ep > div.css-175oi2r.r-1wbh5a2.r-dnmrzs.r-1ny4l3l > div > div.css-175oi2r.r-1awozwy.r-18u37iz.r-1wbh5a2 > div.css-175oi2r.r-1awozwy.r-z2wwpe.r-6koalj.r-1q142lx`;
        const element = document.querySelector(selector);
        setTimeout(()=>{
            // if the div doesnt exist that mean he didnt follow you back so we Unfollow him using the unfollow function
            if (!element) {                
                Unfollow(i)  
            }
        },200*i) //delaying each unfollow by 0.2sec because the function Unfollow take 0.1 sec       
    }
}

// This function is recursive and unfollow as many none follow back person as possible
function UnfollowMax (){
    //setting 0.5sec between each unfollow so user can understand what is happening and stop the process if needed 
    //YOU CAN CHANGE THIS SETTING AS YOU WANT BUT KEEP IT HIGHER THAN 0.25sec
    setTimeout(() => {
        const parentElement = document.querySelector("#react-root > div > div > div.css-175oi2r.r-1f2l425.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div > div > section > div > div");
        const children = parentElement.children;

        //children lenght is the number of child currently loaded because if you scroll up or down this number can increase or decrease 
        for (let i = 0; i < children.length  -1; i++) {
            
            //geting the JS Path of the little div who say " this guy is following you"
            const child = children[i];
            const selector = `div:nth-child(${i+1}) > div > div > div > div > div.css-175oi2r.r-1iusvr4.r-16y2uox > div.css-175oi2r.r-1awozwy.r-18u37iz.r-1wtj0ep > div.css-175oi2r.r-1wbh5a2.r-dnmrzs.r-1ny4l3l > div > div.css-175oi2r.r-1awozwy.r-18u37iz.r-1wbh5a2 > div.css-175oi2r.r-1awozwy.r-z2wwpe.r-6koalj.r-1q142lx > div > span`;
            
            //element1 is the button follow/unfollow
            const element1 = document.querySelector(`#react-root > div > div > div.css-175oi2r.r-1f2l425.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div > div > section > div > div > div:nth-child(${i+1}) > div > div > div > div > div.css-175oi2r.r-1iusvr4.r-16y2uox > div.css-175oi2r.r-1awozwy.r-18u37iz.r-1wtj0ep > div.css-175oi2r.r-19u6a5r > div`);
            const element = child.querySelector(selector);
            // checking 2 condition here : If the element have the following back div and if the person have been unfollowed before (if the button is black that mean its a follow button)
            if (!element && !(window.getComputedStyle(element1).getPropertyValue('background-color')==="rgb(15, 20, 25)")) {
                //Unfollowing the first none follow back person -> call itself -> stop 
                Unfollow(i+1)
                UnfollowMax()  
                return      
            }          
        } 
    }, 500);
    
    
    
}


// the principal component of our all code is this micro function :   this click the button unfolow of the index one and confirm the unfollow 0.2sec after
function Unfollow(index){

    //getting the JS path of the button and clicking it
    const selector = `#react-root > div > div > div.css-175oi2r.r-1f2l425.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div > div > section > div > div > div:nth-child(${index}) > div > div > div > div > div.css-175oi2r.r-1iusvr4.r-16y2uox > div.css-175oi2r.r-1awozwy.r-18u37iz.r-1wtj0ep > div.css-175oi2r.r-19u6a5r > div`;
    const element = document.querySelector(selector);
    element.click()

    // wait 0.2sec for the confirm message and click on confirm button
    setTimeout(() => {
        document.querySelector("#layers > div:nth-child(2) > div > div > div > div > div > div.css-175oi2r.r-1ny4l3l.r-18u37iz.r-1pi2tsx.r-1777fci.r-1xcajam.r-ipm5af.r-1kihuf0.r-xr3zp9.r-1awozwy.r-1pjcn9w.r-9dcw1g > div.css-175oi2r.r-14lw9ot.r-pm9dpa.r-1rnoaur.r-1867qdf.r-z6ln5t.r-494qqr.r-1jgb5lz.r-13qz1uu > div.css-175oi2r.r-eqz5dr.r-1hc659g.r-1n2ue9f.r-11c0sde.r-13qz1uu > div:nth-child(1)").click()
    }, 200);
}






//receving the activation message from the pop up:

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    //activation message 
    if (message.action === "modActivate") {
        //getting the input variable
       let n = message.n
        
        if (n*1 === -1){
                UnfollowMax()   
        }       
        else{
           Unfollowing(n) 
        }
    }
    //desactivation message just reloading the page so the processus stop
    if (message.action === "modNotActivate") {
        window.location.reload();
    }
});
