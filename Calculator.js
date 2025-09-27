
const Display=document.querySelector('.display');


function press(input){

Display.value +=input;
}


function clearDisplay() {
    Display.value = "";
}

function backSpace() {
    Display.value = Display.value.slice(0, -1);

}
    function calculate(){
        try {
            Display.value = eval(Display.value);
        } catch (error) {
            Display.value = "Error";
        }
    }

