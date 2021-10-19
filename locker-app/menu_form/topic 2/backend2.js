"use-strict";


//function 
function submitOrder() 
{
    //variable is preallocated
    let order=[];
    let lengtho=order.length;
    let idx=0;
    let message=document.getElementById("resultArea");
    let que=Math.floor(Math.random() * Math.floor(100));
    bill=0;
    let dispice='';
    let disdrink='';
    let meatburger='';

    //Ingrediants variable containing a reference of all the input fields
    let Ingrediants={
        meat:{
            1:'chicken',
            2:'pork',
            3:'beef',
        },
        cheese:{
            1:'cheddar',
            2:'Brie',
            3:'Goat_Cheese',
            4:'Stilton',
            5:'Smoked_Goude'
    
        },
        sauce:{
            1:'Classic_Burger_Sauce',
            2:'Frenchie',
            3:'Blue_Cheese_Mayo',
            4:'Maple_Bacon_Relish'
        },
        Veg:{
            1:'Onion',
            2:'Pickle',
            3:'Tomatoes',
            4:'Lettuce'
        },
    }



    //price object is created to compare and link id of menu items to its respective price 
    let price=[
            {   
                //spice level 
                None:0,
                Mild:0.5,
                Medium:0.75,
                Extra:1
            },
            {
                //drinks
                ['Coke $2']:2,
                ['Mountain Dew $2']:2,
                ['Sprite $2']:2,
                ['Bunderberg $2']:2,
            }
    ]


    //search for all the input field from meat to veg
    for (i in Ingrediants)
    {   
        for (j in Ingrediants[i])
        {
           //allocate input field i to a variable to be manipulated 
            let searchfield=Ingrediants[i][j];
            let searchcat=`${Ingrediants[i]}`
        
            let inputfield=document.getElementById(searchfield);
            
            //check if inputfield is checked by customer
            if (inputfield.checked===true) 
            {
                //if checked its cost is added
                let inputval=inputfield.value;
                //string is converted to num and added
                bill+=Number(inputval);
                //_ was used in place of space so replace() method is used to convert _ to " "
                let label =(`${searchfield}`)
                label=label.replace(/_/g, " ")
                //check if field is meat, otherwise proceed
                if (Ingrediants[i]=='meat')
                {
                    meatburger+=`${label}`;
                }
                //map name of inputfield to an array of choosen ingrediants 
                order.push(`${label}`);
            }
            
        }
    }


        //searches the input field for drink and spicelevel    
        spiceval=document.getElementById("spicelevel");
       if (spiceval!==undefined || null)
        {   spiceval=spiceval.value;
            dispice=`${spiceval}`;
            bill+=Number(price[0][spiceval]);
        } 
        drinkval=document.getElementById("drinks");
        if (drinkval!==undefined || null)
        {   drinkval=drinkval.value;
            disdrink=`${drinkval}`;
            bill+=Number(price[1][drinkval]);
        }
         
        //customer info is collected: phone no/name
        let customername=document.getElementById("customername").value;
        let customerno=document.getElementById("phoneno").value;

        //a html tag is created to display our results on the html page
        let display=`<p>${customername}, your order number is ${que} and total cost is $${bill}. <br> Your ${order.splice(0,1)} Burger includes  ${order} 
        and is ${dispice} spicy. Your drink is ${disdrink.slice(0,-2)} <br> Enjoy! </p>`;
        //html display is added to the html page 
        message.innerHTML=display


    }


















