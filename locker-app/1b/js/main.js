/** 
 * main.js 
 * This file contains code that runs on load for index.html
 */
"use strict";
// TODO: Write the function displayLockers
function displayLockers(data)
{
    let output='';
    let index=0;
    for (let i=0; i<data.count; i++)
    {
        let idref=data.lockers[i].id;
        let labelref=data._lockers[i].label;
        let lockedref=data._lockers[i].locked;
        let colourref=data._lockers[i].color;
        let colour_check=colourref;
        let font_color='';



        let pattern_color = "^#([A-Fa-f0-9]{6})$";
        if (colourref.match(pattern_color)) {
            let rgb_col=colour_check.replace("#", "");
                let R = parseInt(rgb_col.substring(0, 2), 16);
                let G = parseInt(rgb_col.substring(2, 4), 16);
                let B = parseInt(rgb_col.substring(4, 6), 16);
                let brightness= Math.sqrt( 0.299*Math.pow(R,2) + 0.587*Math.pow(G,2) + 0.114*Math.pow(B,2));
                
                if (brightness>150)
                {
                     font_color='000000'; //black
                }  
                else
                {
                    font_color='ffffff'; //white
                }

        }

        if (lockedref==true)
        {
            lockedref='close';
        }
        else
        {
            lockedref='open';
        }
        
        output+=`<div>
                    <div class="mdl-cell mdl-cell--4-col">
                        <div class="mdl-card mdl-shadow--2dp locker" id='locker_color' style="background-color:${colourref}">
                            <div class="mdl-card__title mdl-card--expand">
                                <h2 style="color:#${font_color}">${idref}</h2>
                                <h4 style="color:#${font_color}">&nbsp;${labelref}</h4>
                                <button class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab">
                                <i class="material-icons" onclick="delete_locker(${index})">delete</i>
                                </button>
                            </div>
                            <div class="mdl-card__actions mdl-card--border">
                                <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" onclick="view(${index})"><p  style="color:#${font_color}">Open Locker<p></a>
                                <div class="mdl-layout-spacer"></div>
                                <i class="material-icons">lock_${lockedref}</i>
                            </div>
                        </div>
                    </div>
                </div>`
    
        index++;
    }
    document.getElementById("lockerDisplay").innerHTML = output;
    

    //let colouref=document.getElementById("background_color").style.backgroundcolor;
    //let brightness  =  sqrt( .299 R^2 + .587 G^2 + .114 B^2 );
    //if()

}

// TODO: Write the function addNewLocker
function addNewLocker()
{
    let id='';
    if (lockers.count==0)
    {
        id='A001';
        
    }
    else
    {
        let idx=lockers.count+1;
        if (idx>=10)
        {
            id=`A0${idx}`;
            
            if (idx>=100)
        {
            id=`A${idx}`;
        }
        }
        else
        {
            id=`A00${idx}`
        }
    }

    lockers.addLocker(id);
    updateLocalStorage(lockers._lockers);
    displayLockers(lockers._lockers);
}

// TODO: Write the function view
function view(index)
{
    localStorage.setItem(LOCKER_INDEX_KEY, JSON.stringify(index));
     window.location = "view.html";
    
}


function delete_locker(index)
{
    localStorage.setItem(LOCKER_INDEX_KEY, JSON.stringify(index));
    let index_locker = localStorage.getItem(LOCKER_INDEX_KEY)
    // using the getLocker method, retrieve the current Locker instance
    let locker = lockers.getLocker(index_locker); 
    if (confirm('Are you sure?'))
    {
        
        lockers.removeLocker(locker.id);
        console.log(lockers)
        updateLocalStorage(lockers._lockers);
        alert('Locker has been deleted');
        window.location = "index.html";
    }
   
}

// TODO: Write the code that will run on load here
displayLockers(lockers);

