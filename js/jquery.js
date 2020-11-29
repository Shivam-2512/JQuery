$(document).ready(function () {
    console.log("We are using Jquery.");
    //$('selector').action()
    //$(#id).action()
    //$(.class).action()
    //$('p').click();   //click
    //element SELECTOR
    /* $('p').click(function () {
        console.log('you clicked on p ', this);
        //$('p').hide();
        //$(this).hide();
    });
    $('p').dblclick(function () {
        console.log('you double clicked on p ', this);
        //$('p').hide();
        //$(this).hide();
    });
    $('p').mouseenter(function () {
        console.log('you enter on p ', this);
        //$('p').hide();
        //$(this).hide();
    });
    $('p').mousedown(function () {
        console.log('you mouse down on p ', this);
        //$('p').hide();
        //$(this).hide();
    });
        //to apply logic on all the elements
        //$('*').click();
*/
    //Events 
    //mouse clicks = clicks, dblclick, mouseenter, mouseleave
    //Keyboard events = keypress , keydown , keyup ,mediakeyStatusMap
    //form events = submit, change, focus, blur
    //window event = scroll, load, resize



    //on click method

    /* $('p').on({
        click : function() {
            console.log('This is an on click process..', this);
        },
        mouseleave : function(){
            console.log('Thank you for visiting the element...', this)
        }
    })
    $('.div1').hide(1000, function(){
        console.log('Hidden')
    }) */

    $('#btn').click(function () {
        $('.div1').toggle(2000, function () {
            console.log('hidden');
        })
        //fadein()
        //fadeout()
        //fadeto()
        //fadetoggle()
        //SlideUp()
        //SlideDown()
        //SlideToggle()



        //animate function in JQuery
       
        $('.div1').animate(function(){
            opacity = 0.3,
            height ='190px',
            weight ='150px'
        },2000)
            
        
    })
}
)