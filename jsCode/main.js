/* special txt effect */
function txtFocused(t){
	if(t.value==""){	
		text=t.previousElementSibling;
		box =t.parentElement;
		text.style.transform="scale(1) translate(0%,0%)";
		box.style.borderRadius="10px";
		box.style.border="1px solid aqua";
		text.style.color="silver";
	}
}
function txtUnfocused(t){
	if(t.value==""){
		text=t.previousElementSibling;
		box =t.parentElement;
		box.style.border="none";
		box.style.borderBottom="1px solid cornflowerblue";
		text.style.transform="scale(1.8) translate(10%,80%)";
		box.style.borderRadius="0px";
		text.style.color="grey";
	}else{
		if(t.type=='text'){
			if(!checkAlphabate(t.value)){
				redAlert(t);
				alert("invalid Name.");
			}
		}else if(t.type=='number'){
			if(t.value.length!=10||!checkNumber(t.value)){
				redAlert(t);
				alert("invalid Phone number.Use only 10 digits.");
			}
		}else if(t.type=='email'){
			if(!checkEmail(t.value)){
				redAlert(t);
				alert("invalid email. Please provide valid Email.");
			}
		}
	}
}

function checkboxWithSliderStyle(container,color){
	let ele = container.children;
	let t=ele[1];
	let cb=ele[0];
	if(!cb.checked){
		t.style.cssText="transform:translatex(59px);border:2px solid rgb(0,255,200);box-shadow:0 0 2px black inset,0 0 3px rgb(0,255,200);";
		container.style.backgroundColor=color;
		cb.checked=true;
	}else{
		t.style.cssText="transform:translatex(0px);border:2px solid rgb(255,255,255);box-shadow:0 0 2px black inset,0 0 3px rgba(0,0,0,.4);";
		container.style.backgroundColor="silver";
		cb.checked=false;
	}			
}	


function redAlert(ele){
	ele.parentElement.style.border="1px solid red";
	ele.value="";
}

/* name number email validation mthods */
function checkAlphabate(str){
	var regex= /^[A-Za-z ]+$/;
	return regex.test(str);
}
function checkNumber(str){
	var regex= /^[0-9]+$/;
	return regex.test(str);
}
function checkEmail(str){
	let flag=0;
	let len=str.length;
	for(let i=0;i<len;i=i+1){
		if(str.charAt(i)=='@'){flag++;}
	}
	if(flag!=1){return false;}
	flag=0;
	for(i=0;i<len;i=i+1){
		if(str.charAt(i)=='.'){flag++;}
	}
	if(flag==0||flag>2){return false;}
	return true;
}

/* check that input element have data or not */
function checkNullValue(t){
	if(t.value==""){
		return true;
	}else{
		return false;
	}
}

function outerCheckboxGlow(ele){
	 if(ele .childNodes[1].checked==false)
	 {
		ele .childNodes[1].checked=true;
		ele .style .cssText="border:3px solid skyblue;background:rgba(105,105,105);color:skyblue;text-shadow:0px 0px 1.8px rgba(135,206,235) inset;box-shadow:0px 0px 3px rgba(135,206,235) inset;";	
	 }
	 else{
		ele .childNodes[1].checked=false;
		ele .style.cssText="border:3px solid gray;color:rgb(105,105,105);";
		ele .firstChild.style.cssText="text-shadow:0px 0px 0px skyblue";
	 }	 
}



function getTrafficLight(objs)
{
	if (objs .childNodes[5].checked==false)
	{
		objs .childNodes[5].checked=true;
		objs.childNodes[3].style.cssText="border:2px solid gray;background:rgb(255,0,0,.4);box-shadow:0px 0px 4px gray inset, 0px 0px 4px gray inset;";
		setTimeout(function(){
			objs.childNodes[1].style.cssText="border:2px solid #E2E2E2;background:rgb(84,156,48);box-shadow:0px 0px 5px rgba(84,156,48,.7), 0px 0px 5px rgba(84,156,48,.7);";
			},200);
	}
	else{
		objs .childNodes[5].checked=false;
		objs.childNodes[1].style.cssText="border:2px solid gray;background:rgba(84,156,48,.4);box-shadow:0px 0px 4px gray inset, 0px 0px 4px gray inset;";
		setTimeout(function(){
			objs.childNodes[3].style.cssText="border:2px solid #E2E2E2;background:rgb(255,0,0);box-shadow:0px 0px 4px (187,30,16,.7) inset, 0px 0px 4px (187,30,16,.7) inset;";
		},200);
	}
}


function popuprangeinput(elem,max){
    let pointers=elem.previousElementSibling;
    let runDiv=elem.nextElementSibling;
    let valuess=elem .value;
    let maximum=max/100;
    pointers.innerHTML=valuess;
    pointers.style.left=(valuess/maximum)+"%";
    runDiv.style.width=(valuess/maximum)+"%";
}


function boxWalaRange(obj){
    let divNumber=obj.nextElementSibling;
    divNumber.innerHTML=obj .value;
    let valdig=parseInt(obj .value)-200;
    obj.style.background="rgb(50,"+obj.value+","+valdig+")";
    obj.parentElement.style.borderColor="rgb(50,"+obj.value+","+valdig+")";
    divNumber.style.color="rgb(50,"+obj.value+","+valdig+")";
}


function notifyMe(msg='Please provide a message.',c='yellow'){
    let newContainer = document.createElement("div");
    newContainer.setAttribute('class','noticeBoard');
    let close = document.createElement("button");
    close.innerHTML="&#10005;";
    newContainer.appendChild(close);
    close.style.cssText="position: absolute;top: -20px;left: 138px;border: none;border-radius: 50%;background: #4f4f4f;color: white;font-size: 18px;font-weight: bold;margin-bottom: 5px;cursor: pointer;border:1px solid "+c;
    let txt = document.createTextNode(msg);
    newContainer.style.border="1px solid "+c;
    newContainer.appendChild(txt);
    document.body.appendChild(newContainer);
    close.addEventListener('click',function(){
        document.body.removeChild(this.parentElement);
    });
} 

function displayToolTip    (e,ele,msg='Please provide a message.'){
    let prevEle=ele.previousElementSibling;
    let createToolTip = false;
    if(prevEle!=null){
        if(prevEle.className != 'tooltipBoard'){
            createToolTip=true;
        }
    }else{
        createToolTip=true;
    }
    if(createToolTip){
        let newContainer = document.createElement("div");
        newContainer.setAttribute('class','tooltipBoard');
        let txt = document.createTextNode(msg);
        newContainer.style.cssText="left:"+(e.pageX-100)+"px;top:"+(e.pageY-75)+"px;";
        newContainer.appendChild(txt);
    
        ele.parentNode.insertBefore(newContainer,ele);
        setTimeout(function(){
            newContainer.remove();
        },4000);
    }
}














