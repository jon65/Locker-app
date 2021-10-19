/** 
 * shared.js 
 * This file contains shared code that runs on both view.html and index.html
 */

"use strict";
// Constants used as KEYS for LocalStorage
const LOCKER_INDEX_KEY = "selectedLockerIndex";
const LOCKER_DATA_KEY = "lockerLocalData";
// TODO: Write code to implement the Locker class
class Locker {
    constructor(id) {
        this._id = id;
        this._label = "";
        this._locked = false;
        this._pin = "";
        this._color = '#'+Math.floor(Math.random()*16777215).toString(16);
        this._contents = "";
    }


    //accessors
    get id() { return this._id; }
    get label() { return this._label; }
    get locked() { return this._locked; }
    get pin() { return this._pin; }
    get color() { return this._color; }
    get contents() { return this._contents; }

    //mutators
    set label(text) {
        this._label = text
    }
    set locked(state) {
        this._locked = state
    }
    set pin(pin) {
        this._pin = pin
    }
    set color(color) {
        this._color = color
    }
    set contents(text) {
        this._contents = text
    }
    fromData(data) {
        this._id = data._id;
        this._label = data._label;
        this._locked = data._locked;
        this._pin = data._pin;
        this._color = data._color;
        this._contents = data._contents;
        this._locked = data._locked;
    }
}







// TODO: Write code to implement the LockerList class
class LockerList {

    constructor() {
        this._lockers = [];
    }


    addLocker(id) {
        this._lockers.push(new Locker(id));
    }

    get lockers() { return this._lockers; }
    get count() { return this._lockers.length; }

    getLocker(index) { return this._lockers[index]; }

    removeLocker(id) {
        for (let i=0; i<lockers.count;i++)
        {
            let idx=this._lockers[i].id;
            if(idx==id)
            {
             this._lockers.splice(i, 1);
             break
            }

        }
        
    }

    fromData(data) {
        this._lockers = [];
            for (let i = 0; i < data.length; i++) {
                let lock = new Locker();
                lock.fromData(data[i]);
                this._lockers.push(lock);
            }
    }
}
// TODO: Write the function checkIfDataExistsLocalStorage
function checkIfDataExistsLocalStorage() {
    let data = localStorage.getItem(LOCKER_DATA_KEY);
    if (typeof(Storage) !== "undefined") 
    {
    if (data !== null) {
        return true
    }    
    else
    {
        return false
    }
    }

}

// TODO: Write the function updateLocalStorage
function updateLocalStorage(data) {
    localStorage.setItem(LOCKER_DATA_KEY, JSON.stringify(data))
    
}

// TODO: Write the function getDataLocalStorage
function getDataLocalStorage() {
    let pdata = JSON.parse(localStorage.getItem(LOCKER_DATA_KEY));
    return pdata
}


// Global LockerList instance variable
let lockers = new LockerList();

// TODO: Write the code that will run on load here

let check1 = checkIfDataExistsLocalStorage();
if (check1 == true) {
    let data = getDataLocalStorage();
    lockers.fromData(data);
}
else {

    lockers.addLocker('A001');
    console.log(lockers)
    updateLocalStorage(lockers);
    
}
