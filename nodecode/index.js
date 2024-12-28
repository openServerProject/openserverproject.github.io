// Window dragging script
// Go through each div with 'window' class and make draggable
let collection = document.getElementsByClassName("window");
Array.from(collection).forEach(function (element) {
  dragElement(element);
  console.log(element);
  console.log(element.id);
});

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
	// if present, the header is where you move the DIV from:
	document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
	console.log(document.getElementById(elmnt.id + "header"));
  } else {
	// otherwise, move the DIV from anywhere inside the DIV:
	elmnt.onmousedown = dragMouseDown;
	console.log("Moving DIV "+document.getElementById(elmnt.id + "header")+" from anywhere inside box")
  }

  function dragMouseDown(e) {
	e = e || window.event;
	e.preventDefault();
	// get the mouse cursor position at startup:
	pos3 = e.clientX;
	pos4 = e.clientY;
	document.onmouseup = closeDragElement;
	// call a function whenever the cursor moves:
	document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
	e = e || window.event;
	e.preventDefault();
	// calculate the new cursor position:
	pos1 = pos3 - e.clientX;
	pos2 = pos4 - e.clientY;
	pos3 = e.clientX;
	pos4 = e.clientY;
	// set the element's new position:
	elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
	elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
	// stop moving when mouse button is released:
	document.onmouseup = null;
	document.onmousemove = null;
  }
}

// Hide function
function hide(id) {
  var x = document.getElementById(id);
  x.style.display = "none";
}
// Show function
function show(id) {
  var x = document.getElementById(id);
  x.style.display = "block";
}

// Remove deciamal function
function rdec(num) {
  return Math.trunc(num);
}

// Set content of span
function setSpan(id, text) {
  const spanElement = document.getElementById(id);
  spanElement.textContent = text;
}

// Set mutt texture
function setMuttType(type) {
	switch (type) {
		case 0:
			hide('mutt-hat-sword');
			hide('mutt-hat');
			hide('mutt-sword');
			show('mutt');
      hide('mutt-hat-sword1');
			hide('mutt1');
			hide('mutt-sword1');
			hide('mutt-hat1');
			break;
		case 1:
			hide('mutt-hat-sword');
			hide('mutt');
			hide('mutt-sword');
			show('mutt-hat');
      hide('mutt-hat-sword1');
			hide('mutt1');
			hide('mutt-sword1');
			hide('mutt-hat1');
			break;
		case 2:
			hide('mutt');
			hide('mutt-hat');
			hide('mutt-sword');
			show('mutt-hat-sword');
      hide('mutt-hat-sword1');
			hide('mutt1');
			hide('mutt-sword1');
			hide('mutt-hat1');
			break;
		case 3:
			hide('mutt-hat');
			hide('mutt');
			hide('mutt-hat-sword');
			show('mutt-sword');
      hide('mutt-hat-sword1');
			hide('mutt1');
			hide('mutt-sword1');
			hide('mutt-hat1');
			break;
    case 4:
			hide('mutt-hat-sword1');
			hide('mutt-hat1');
			hide('mutt-sword1');
			show('mutt1');
      hide('mutt');
			hide('mutt-hat');
			hide('mutt-sword');
			hide('mutt-hat-sword');
			break;
		case 5:
			hide('mutt-hat-sword1');
			hide('mutt1');
			hide('mutt-sword1');
			show('mutt-hat1');
      hide('mutt');
			hide('mutt-hat');
			hide('mutt-sword');
			hide('mutt-hat-sword');
			break;
		case 6:
			hide('mutt1');
			hide('mutt-hat1');
			hide('mutt-sword1');
			show('mutt-hat-sword1');
      hide('mutt');
			hide('mutt-hat');
			hide('mutt-sword');
			hide('mutt-hat-sword');
			break;
		case 7:
			hide('mutt-hat1');
			hide('mutt1');
			hide('mutt-hat-sword1');
			show('mutt-sword1');
      hide('mutt');
			hide('mutt-hat');
			hide('mutt-sword');
			hide('mutt-hat-sword');
			break;
	};
}

/* 
 * VERY IMPORTANT!
 * Update this every time a major, minor, or bugfix happens.
*/
const ver = '0.1.0-DEV';

fetch('https://raw.githubusercontent.com/AzureTecDevsOffical/azuretecdevsoffical.github.com/refs/heads/main/nodecodeversions.txt')
  .then(response => response.text())
  .then(content => {
    console.log(`ACCESS FILE @ https://raw.githubusercontent.com/AzureTecDevsOffical/azuretecdevsoffical.github.com/refs/heads/main/nodecodeversions.txt :\n${content}`);
    if (content.includes(ver)) {
      hide('newver');
      console.log(`You are using the latest version (${ver})`)
    } else {
      show('newver');
      setSpan('newvermsg', `The latest available version is 1.0.0 (using ${ver})`);
      console.warn(`The latest available version is 1.0.0 (using ${ver})`);
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });

setMuttType(0);

var graph = new LGraph();

var canvas = new LGraphCanvas("#mycanvas", graph);

//mutt node
function muttNode() {
  this.addInput("Defense","defence");
  this.addInput("Item 1","item");
  this.addInput("Item 2","item");
  this.addWidget("slider", "Input", 20, (value) => {
    console.log("Input value changed:", value);
    this.numvalw = value;
  }, {min: 20, max: 60});
  this.properties = {};
}
hp = 0;
damage = 5;
defense = 0;
defenseBonus = 0;
armourBonus = 0;
muttNode.title = "Mutt";
muttNode.prototype.onExecute = function() {
  if (this.numvalw == NaN || this.numvalw == undefined) {
    this.numvalw = 20;
  }
  hp = this.numvalw
  if (this.getInputData(1) == "Sword" && this.getInputData(2) != "Hat" || this.getInputData(2) == "Sword" && this.getInputData(1) != "Hat") {
    setMuttType(3);
    damage = 10;
    defense = defenseBonus + armourBonus + 5;
    hp = this.numvalw;
    defenseBonus = 0;
  } else if (this.getInputData(1) == "Hat" && this.getInputData(2) != "Sword" || this.getInputData(2) == "Hat" && this.getInputData(1) != "Sword") {
    setMuttType(1);
    damage = 5;
    defense = defenseBonus + armourBonus + 5;
    defenseBonus = 5;
  } else if (this.getInputData(1) == "Sword" && this.getInputData(2) == "Hat" || this.getInputData(2) == "Sword" && this.getInputData(1) == "Hat") {
    setMuttType(2);
    damage = 10;
    defense = defenseBonus + armourBonus + 5;
    defenseBonus = 5;
  } else {
    setMuttType(0);
    damage = 5;
    defense = defenseBonus + armourBonus + 5;
    hp = this.numvalw;
    defenseBonus = 0;
  }
  if (this.getInputData(0) == "Simple Armour") {
    armourBonus = 10;
  } else if (this.getInputData(0) == "Decent Armour") {
    armourBonus = 15;
  } else {
    armourBonus = 0;
  }
  setSpan('hp', rdec(hp));
  setSpan('dp', rdec(defense));
  setSpan('dm', rdec(damage));
}


//mutt2 node
function mutt2Node() {
  this.addInput("Defense","defence");
  this.addInput("Item 1","item");
  this.addInput("Item 2","item");
  this.addWidget("slider", "Input", 20, (value) => {
    console.log("Input value changed:", value);
    this.numvalw = value;
  }, {min: 40, max: 120});
  this.properties = {};
}
muttNode.title_color = "#345";
mutt2Node.title_color = "#345";
mutt2Node.title = "Angry Mutt";
mutt2Node.prototype.onExecute = function() {
  if (this.numvalw == NaN || this.numvalw == undefined) {
    this.numvalw = 40;
  }
  hp = this.numvalw
  if (this.getInputData(1) == "Sword" && this.getInputData(2) != "Hat" || this.getInputData(2) == "Sword" && this.getInputData(1) != "Hat") {
    setMuttType(3);
    damage = 15;
    defense = defenseBonus + armourBonus + 0;
    hp = this.numvalw;
    defenseBonus = 0;
  } else if (this.getInputData(1) == "Hat" && this.getInputData(2) != "Sword" || this.getInputData(2) == "Hat" && this.getInputData(1) != "Sword") {
    setMuttType(5);
    damage = 15;
    defense = defenseBonus + armourBonus + 0;
    defenseBonus = 2;
  } else if (this.getInputData(1) == "Sword" && this.getInputData(2) == "Hat" || this.getInputData(2) == "Sword" && this.getInputData(1) == "Hat") {
    setMuttType(6);
    damage = 10;
    defense = defenseBonus + armourBonus + 0;
    defenseBonus = 2;
  } else {
    setMuttType(4);
    damage = 10;
    defense = defenseBonus + armourBonus + 0;
    hp = this.numvalw;
    defenseBonus = 0;
  }
  if (this.getInputData(0) == "Simple Armour") {
    armourBonus = 4;
  } else if (this.getInputData(0) == "Decent Armour") {
    armourBonus = 8;
  } else {
    armourBonus = 0;
  }
  setSpan('hp', rdec(hp));
  setSpan('dp', rdec(defense));
  setSpan('dm', rdec(damage));
}

//hp node
function hpNode() {
  this.addWidget("number", "Input", 1, (value) => {
    console.log("Input value changed:", value);
    this.numvalw = value;
  });
  this.addOutput("Connector","number");
  this.properties = {};
}
hpNode.title = "Number";
hpNode.prototype.onExecute = function() {
  this.setOutputData(0, this.numvalw);
}


//item node
function itemNode() {
  this.addWidget("combo", "Combo", "Sword", (value) => {
    console.log("Selected value:", value); 
    this.numvalw = value;
  }, { values: ["Sword", "Hat"] }); 
  this.addOutput("Connector","item");
  this.properties = {};
}
itemNode.title = "Item";
itemNode.prototype.onExecute = function() {
  if (this.numvalw == undefined) {
    this.numvalw = "Sword";
  }
  this.setOutputData(0, this.numvalw);
}


//armour1 node
function armour1Node() {
  this.addOutput("Connector","defence");
  this.properties = {};
}
armour1Node.title = "Simple armour";
armour1Node.prototype.onExecute = function() {
  this.setOutputData(0, "Simple Armour");
}


//armour2 node
function armour2Node() {
  this.addOutput("Connector","defence");
  this.properties = {};
}
armour2Node.title = "Decent armour";
armour2Node.prototype.onExecute = function() {
  this.setOutputData(0, "Decent Armour");
}


//display node
function displayNode() {
  this.addInput("Input","number");
  this.properties = {};
}
displayNode.title = "Display node (number)";
displayNode.prototype.onExecute = function() {
  this.title = this.getInputData(0);
}

LiteGraph.registerNodeType("Mutt types/mutt", muttNode);
LiteGraph.registerNodeType("Mutt types/angrymutt", mutt2Node);
LiteGraph.registerNodeType("Values/number", hpNode);
LiteGraph.registerNodeType("Values/displayNumber", displayNode);
LiteGraph.registerNodeType("Defense/armourSimple", armour1Node);
LiteGraph.registerNodeType("Defense/armourDecent", armour2Node);
LiteGraph.registerNodeType("Items/item", itemNode);

// node.properties["propertyName"]; 

var node_watch = LiteGraph.createNode("Mutt types/mutt");
node_watch.pos = [150,150];
graph.add(node_watch);

graph.start()
