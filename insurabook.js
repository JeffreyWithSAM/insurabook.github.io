//  | This is the main javascript file for use with the Insurabook CRM
//  | 
//  | 
//  | Date: 10/13/2022
//  | Author(s): Jeffrey Robinson II

//  | This if statement can check for text within the current url
//  | The '-1' means 'not found'

function urlContains(x) {
    if (document.location.href.indexOf(x) > -1){ 
        return true;
    } else {
        return false;
    }
    
}

function favicon() {
    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = 'https://halotoxin.github.io/IB-Favicon.png';
}

function main() {
    favicon();
    
    try {
        console.log(urlContains("TR2M2XqUylHeOoLksd0z"));
    } catch (error) {
        console.error(error);
    }
    
    /* Change the logo for the Digital Blend Leads subaccount
    if (urlContains("TR2M2XqUylHeOoLksd0z")) {
        var logo = document.querySelector(".object-contain");
        logo.src = "https://halotoxin.github.io/DBL-Blender.png";
    } */
}

main();
