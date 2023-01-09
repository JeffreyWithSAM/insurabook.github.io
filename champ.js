//   ___________________________________________________________________
//  | This is the main javascript file for use with the CHAMP CRM       |
//  |                                                                   |
//  |                                                                   |
//  | Date: 10/13/2022                                                  |
//  | Author(s): Jeffrey Robinson II                                    |
//  |___________________________________________________________________|

//  | This if statement can check for text within the current url
//  | The '-1' means 'not found'

function urlContains(target) {
    if (document.location.href.indexOf(target) > -1){
    //Your code goes here
    }
}
// | This interval is used to change details about the CRM as they load
let e;

let intervalID  = setInterval((event) => {

    // | Find and replace the text for the sidebar shortcut for 'Opportunities' to 'Dashboards'
    e = document.querySelector("#sb_opportunities > span:nth-child(2)");
    if (e.innerText != 'Dashboards') {
        e.innerText = 'Dashboards';
    }
    
}, 50);
