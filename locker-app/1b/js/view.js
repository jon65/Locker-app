/** 
 * view.js 
 * This file contains code that runs on load for view.html
 */

"use strict";
// TODO: Write the function displayLockerInfo
function displayLockerInfo(locker)
{
    document.getElementById('deleteLocker').addEventListener("click", deleteThisLocker);
    document.getElementById("lockerColor").value = locker.color;
    document.getElementById("lockerContents").innerHTML = locker.contents;
    document.getElementById("lockerLabel").value = locker.label;
}

// TODO: Write the function unlock
function unlock(locker)
{
    let userinput = prompt("Enter pin");
    if (userinput==locker.pin)
    {
        locker.locked=false;
        locker.pin="";
        displayLockerInfo(locker);
    }
    else
    {
        window.location = "index.html";
    }

}

// TODO: Write the function deleteThisLocker
function deleteThisLocker()
{
    
    if (confirm('Are you sure?'))
    {
        
        lockers.removeLocker(locker.id);
        console.log(lockers)
        updateLocalStorage(lockers._lockers);
        alert('Locker has been deleted');
        window.location = "index.html";
     
    }
   
}



// TODO: Write the function lockLocker
function lockLocker()
{
    if (confirm('Confirm lock locker?'))
    {
        let pin1=prompt("Please enter Pin:")
        
        let pin2=prompt("Please enter Pin again:")
        if (pin1==pin2)
        {
            locker.contents=document.getElementById('lockerContents').value;
            locker.label=document.getElementById('lockerLabel').value;
            locker.color=document.getElementById('lockerColor').value;
            locker.pin=`${pin1}`;
            locker.locked=true;
            lockers._lockers[index]=locker;
            updateLocalStorage(lockers._lockers);
            window.location = "index.html";
        
        }
        else 
        {
            alert(" Wrong pin")
        }
        
    }
}

// TODO: Write the function closeLocker
function closeLocker()
{
    if (confirm('Confirm  close locker without looking?'))
    {
            locker.contents=document.getElementById('lockerContents').value;
            locker.label=document.getElementById('lockerLabel').value;
            locker.color=document.getElementById('lockerColor').value;
            lockers._lockers[index]=locker;
            updateLocalStorage(lockers._lockers);
            console.log('hello')
            alert("locker is closed but not locked")
            window.location = "index.html";
        
    }
        
    
}1 

// Retrieve the stored index from local storage
let index = localStorage.getItem(LOCKER_INDEX_KEY)
// using the getLocker method, retrieve the current Locker instance
let locker = lockers.getLocker(index);
console.log(locker)

// TODO: Write the code that will run on load here

if (locker.locked==true)
{

    unlock(locker);
}
displayLockerInfo(locker);
