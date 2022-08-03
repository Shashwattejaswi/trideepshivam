all methods and its descriptions for javascipt used styles.

use this content delivery network to add main.js style methods...

	  <script src='https://cdn.statically.io/gh/TrideepShivam/trideepshivam/main/jsCode/main.js'></script>
    
for css style please link the cdn of mainStyle.css as...

	<link rel='stylesheet' type='text/css' href='https://cdn.statically.io/gh/TrideepShivam/trideepshivam/main/cssCode/mainStyle.css'>
  
describe here all the new methods with argument and the description.

1. Special type of effect...

html:

		<fieldset class='txtcontainer'>
			<legend class='topname'>[your text which will be displayed as placeholder]</legend>
			<input type='text' class='contactTxt' onfocusout='txtUnfocused(this)' onfocus='txtFocused(this)'>
		</fieldset>
    
description: use above html code to create your special effect textbox like plaeholder will be transferred to the top of the text box with transition. use mentioned js and css cdn link.

2. slider checkbox or radio button.
html:

		<div class="checkboxMiddleSection" onclick="checkboxWithSliderStyle(this,'your_color')">
			<input type="checkbox" class="checkboxStyleOne">
			<button class="checkboxSlider"></button>
		</div>
    
description: use above html code to create your slider radio or checkbox with transition and set your color code what you want. use mentioned js and css cdn link.

3. glow checkbox button and class="outerCheckboxaajtak".
html:

		<div class="outerCheckboxaajtak" onclick="outerCheckboxGlow(this)">
			<input type="checkbox">
			<h3>&#10004;</h3>
		</div>
    
description: use above html code to create your glow checkbox with glowed transition. use mentioned js and css cdn link.

4.trafic light checkbox with class="trafficOuter".
html:
	
	<div class="trafficOuter" onclick="getTrafficLight(this)" title="red=disagree,green=agree">
		<div ></div>
		<div ></div>
		<input type="checkbox">
	</div>

description: use above html code to create your checkbox with traffic signal style. if user select green the value will be 'agree' if red then 'disagree'.

5.popup box range with class="popuprange".
html:

	<div class="popuprange">
		<div>50</div>
		<input type="range" max="222" min="0" oninput="popuprangeinput(this,max)">
		<div></div>
	</div>
	
description: use above html code to create a range with popupbox value displayer on hover effect.

6.box range with class="popuprange".
html:

	<div class="BoxRange" >
		<input type="range" max="250" min="0" oninput="boxWalaRange(this)">
		<div  title="Use arrow key for minor change">50</div>	
	</div>

description: use above html code to create a range into a cantainer box with value displayer on input effect.

7. notifyMe('msg','color');

description: use above method with arguments to create a notification box with argumented message at the bottom center of the body. it includes 300px width with a top centered close button to disappear the notification box. color argument will be used to set your notification box border and close box border. it will appear from opacity 0 to 1.
	if you wanna display some error, success or general notification, just send red, green or white color or it's color code as argument.

8. displayToolTip(event,element,msg);

description: use above method with essential agruments. event is any type of mouse event, element is the element on which the tooltip will be shown and msg is the displayable msg. all all argumented then the method will create a tooltip for you and the tooltip class is 'tooltipBoard' with will be styled also with internal css implementation.






