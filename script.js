function Unfollowing(n) {
    for (let i = 1; i <= n; i++) {
        const selector = `#react-root > div > div > div.css-175oi2r.r-1f2l425.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div > div > section > div > div > div:nth-child(${i}) > div > div > div > div > div.css-175oi2r.r-1iusvr4.r-16y2uox > div.css-175oi2r.r-1awozwy.r-18u37iz.r-1wtj0ep > div.css-175oi2r.r-1wbh5a2.r-dnmrzs.r-1ny4l3l > div > div.css-175oi2r.r-1awozwy.r-18u37iz.r-1wbh5a2 > div.css-175oi2r.r-1awozwy.r-z2wwpe.r-6koalj.r-1q142lx`;
        const element = document.querySelector(selector);
        setTimeout(()=>{
            if (element) {
                console.log(i, "yes");
                
                
            } else {
                console.log(i, "no");
                
                // Unfollow(i)
                
            }
        },200*i)       
    }
}

function UnfollowMax (){

    setTimeout(() => {
        const parentElement = document.querySelector("#react-root > div > div > div.css-175oi2r.r-1f2l425.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div > div > section > div > div");

        const children = parentElement.children;
        

        for (let i = 0; i < children.length  -1; i++) {
            

            const child = children[i];
            const selector = `div:nth-child(${i+1}) > div > div > div > div > div.css-175oi2r.r-1iusvr4.r-16y2uox > div.css-175oi2r.r-1awozwy.r-18u37iz.r-1wtj0ep > div.css-175oi2r.r-1wbh5a2.r-dnmrzs.r-1ny4l3l > div > div.css-175oi2r.r-1awozwy.r-18u37iz.r-1wbh5a2 > div.css-175oi2r.r-1awozwy.r-z2wwpe.r-6koalj.r-1q142lx > div > span`;
                            // div:nth-child(32) > div > div > div > div > div.css-175oi2r.r-1iusvr4.r-16y2uox > div.css-175oi2r.r-1awozwy.r-18u37iz.r-1wtj0ep > div.css-175oi2r.r-1wbh5a2.r-dnmrzs.r-1ny4l3l > div > div.css-175oi2r.r-1awozwy.r-18u37iz.r-1wbh5a2 > div.css-175oi2r.r-1awozwy.r-z2wwpe.r-6koalj.r-1q142lx ")
            
            const element1 = document.querySelector(`#react-root > div > div > div.css-175oi2r.r-1f2l425.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div > div > section > div > div > div:nth-child(${i+1}) > div > div > div > div > div.css-175oi2r.r-1iusvr4.r-16y2uox > div.css-175oi2r.r-1awozwy.r-18u37iz.r-1wtj0ep > div.css-175oi2r.r-19u6a5r > div`);
            const element = child.querySelector(selector);
                if (!element && !(window.getComputedStyle(element1).getPropertyValue('background-color')==="rgb(15, 20, 25)")) {
                    
                    Unfollow(i+1)
                    UnfollowMax()  
                    return 
                    
                    
            }        
                    
            
            
        } 
    }, 1000);
    
    
    
}


    
function Unfollow(n){
    const selector = `#react-root > div > div > div.css-175oi2r.r-1f2l425.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div > div > section > div > div > div:nth-child(${n}) > div > div > div > div > div.css-175oi2r.r-1iusvr4.r-16y2uox > div.css-175oi2r.r-1awozwy.r-18u37iz.r-1wtj0ep > div.css-175oi2r.r-19u6a5r > div`;
    //               "#react-root > div > div > div.css-175oi2r.r-1f2l425.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div > div > section > div > div > div:nth-child(1) > div > div > div > div > div.css-175oi2r.r-1iusvr4.r-16y2uox > div.css-175oi2r.r-1awozwy.r-18u37iz.r-1wtj0ep > div.css-175oi2r.r-19u6a5r > div")
    const element = document.querySelector(selector);
    element.click()


    setTimeout(() => {
        document.querySelector("#layers > div:nth-child(2) > div > div > div > div > div > div.css-175oi2r.r-1ny4l3l.r-18u37iz.r-1pi2tsx.r-1777fci.r-1xcajam.r-ipm5af.r-1kihuf0.r-xr3zp9.r-1awozwy.r-1pjcn9w.r-9dcw1g > div.css-175oi2r.r-14lw9ot.r-pm9dpa.r-1rnoaur.r-1867qdf.r-z6ln5t.r-494qqr.r-1jgb5lz.r-13qz1uu > div.css-175oi2r.r-eqz5dr.r-1hc659g.r-1n2ue9f.r-11c0sde.r-13qz1uu > div:nth-child(1)").click()
    }, 200);
    
}






chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === "modActivate") {
       let n = message.n
       console.log("La valeur de 'n' est :", n );
        
        if (n*1 === -1){
                UnfollowMax()
                
                
         
            
        }       
        else{
           Unfollowing(n) 
        }
    }
    if (message.action === "modNotActivate") {
        window.location.reload();
    }

});
