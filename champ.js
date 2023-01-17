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

let interval1  = setInterval((event) => {

    // | Find and replace the text for the sidebar shortcut for 'Opportunities' to 'Dashboards'
    try {
        e = document.querySelector("#sb_opportunities > span:nth-child(2)");
    } catch (error) {
        console.error(error);
    }
    if (e.innerText != 'Dashboards') {
        e.innerText = 'Dashboards';
    }

    // Replace stuff when looking at a card in a dashboard
    try {
        e = document.querySelector("div.modal:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h2:nth-child(1)");
        let f = document.querySelector("div.col-sm-6:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(3)");
        e.innerHTML = "<i class='icon icon-edit'></i>Edit Card -- " + f.value;
    } catch (error) {
        console.error(error);
    }

    // OnClick function for the FC Link
    try {
        if (!document.getElementById('fc_link')) {
            let a = document.querySelector("div.py-3:nth-child(6) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(3)");
            console.log('Here there be dragons!');
            let t = a.value;
            a.onclick = () => {
                window.open(t, '_blank');
            }
            // a.value = "Click Here";
            let icon = document.createElement('a');
            icon.href = a.value;
            icon.id = 'fc_link';
            let parent = a.parentElement();
            parent.replaceChild(a,icon);
            let open_img = document.createElement('img');
            open_img.src = "https://secureagentmarketing.com/wp-content/uploads/2023/01/triad.png";
            a.appendChild(open_img);
        }
    } catch (error) {
            console.error("FC Link OnClick Error");
    }
    
}, 50);