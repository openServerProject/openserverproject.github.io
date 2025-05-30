/* 
Copyright 2024 AzureTecDevs
Use of this code comes with the Blue Oak Model license; if not included contact azuretecdevs@gmail.com.
*/

function hide(id) {
      var x = document.getElementById(id);
      x.style.display = "none";
    }
// Show function
function show(id) {
  var x = document.getElementById(id);
  x.style.display = "block";
}

function logToWindow(text) {
  console.log(text);
  document.getElementById('conlog').innerHTML = document.getElementById('conlog').innerHTML + `[logger@index.js]: <i>${text}</i><br>`;
}

function clearConsole() {
  document.getElementById('conlog').innerHTML = ``;
}


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
document.getElementById("Blocks").style.display = "block";
      document.getElementById("btn11").click();
      /*
  const selectElement = document.getElementById("mySelect");

  const options = [
    { value: "apple", text: "Apple" },
    { value: "banana", text: "Banana" },
    { value: "orange", text: "Orange" },
  ];

  options.forEach((option) => {
    const newOption = document.createElement("option");
    newOption.value = option.value;
    newOption.text = option.text;
    selectElement.add(newOption);
  });

  // Set the default selected option
  selectElement.value = "banana";
      */

      var draw = SVG().addTo('#canvas').size(210, 210);

      /*
      const playground = draw.group();
      var sprites = playground.group();
      */
      function clearCanvas() {
        var rect = draw.rect(210, 210).attr({ fill: '#fff' });
      }
      /*

      function newSprite(pic,scale) {
        return sprites.image(pic)
sprite.size(scale, scale).move(20, 20);
      };
      
      function spriteAt(sprite,x,y) {
        sprite.center(x, y)
      }
      */
      
      function openTab(evt, cityName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
      }
      document.getElementById('blocklyDiv').style.width = (window.innerWidth - 250) + 'px';
      
      document.getElementById('svgEditor').style.width = (window.innerWidth - 40) + 'px';
      
      document.getElementById('blocklyDiv').style.height = (window.innerHeight - 100) + 'px';
      
      document.getElementById('svgEditor').style.height = (window.innerHeight - 50) + 'px';
      
      //document.getElementById('canvas').style.height = (window.innerHeight - 100) + 'px';
      window.addEventListener('resize', function() {
        document.getElementById('blocklyDiv').style.width = (window.innerWidth - 250) + 'px';
      
      document.getElementById('svgEditor').style.width = (window.innerWidth - 40) + 'px';
      
      document.getElementById('blocklyDiv').style.height = (window.innerHeight - 100) + 'px';
      
      document.getElementById('svgEditor').style.height = (window.innerHeight - 50) + 'px';
      
      //document.getElementById('canvas').style.height = (window.innerHeight - 100) + 'px';
      });
/*
      function contSave(value) {
        const state = Blockly.serialization.workspaces.save(demoWorkspace);
        localStorage.setItem('workspace-state-'+document.getElementById('pjn').value, JSON.stringify(state));
        var fl = localStorage.getItem('workspaces');
        var st = {};
        st['value'] = 'workspace-state-'+document.getElementById('pjn').value;
        st['text'] = document.getElementById('pjn').value;
        fl.push(st);
        document.getElementById('pjn').value = '';
      }
*/
      var toolbox = {
  "kind": "categoryToolbox",
  "contents": [
    {
      "kind": "category",
      "name": "Events",
      "categorystyle": "event_category",
      "contents": [
        {
          "kind": "block",
          "type": "init"
        },
        {
          "kind": "block",
          "type": "keypress"
        },
        {
          "kind": "block",
          "type": "onButtonPress"
        },
        {
          "kind": "block",
          "type": "onclick"
        },
        {
          "kind": "block",
          "type": "onmousemove"
        },
        {
          "kind": "block",
          "type": "delayRun"
        }
      ]
    },
    {
      "kind": "category",
      "name": "Stage",
      "categorystyle": "raw_category",
      "contents": [
        {
          "kind": "category",
          "name": "Looks",
          "categorystyle": "raw_category",
          "contents": [
            {
              "kind": "block",
              "type": "drawRect"
            },
            {
              "kind": "block",
              "type": "setbg"
            }
          ]
        },
        {
          "kind": "category",
          "name": "Data",
          "categorystyle": "raw_category",
          "contents": [
            {
              "kind": "block",
              "type": "mouse_X"
            },
            {
              "kind": "block",
              "type": "mouse_Y"
            }
          ]
        }
      ]
    },
    {
      "kind": "category",
      "name": "Sprites",
      "categorystyle": "raw_category",
      "contents": [
        {
          "kind": "category",
          "name": "Movement",
          "categorystyle": "raw_category",
          "contents": [
            {
              "kind": "block",
              "type": "placeAt"
            },
          ]
        },{
              "kind": "category",
              "name": "Looks",
              "categorystyle": "raw_category",
              "contents": [
                {
                  "kind": "block",
                  "type": "setcss"
                }
              ]
            },{
              "kind": "category",
              "name": "Data",
              "categorystyle": "raw_category",
              "contents": [
                {
                  "kind": "block",
                  "type": "newSprite"
                },
                {
                  "kind": "block",
                  "type": "pic"
                },
                {
                  "kind": "block",
                  "type": "gx22"
                },
                {
                  "kind": "block",
                  "type": "gy22"
                }
              ]
            }
      ]
    },
        {
          "kind": "category",
          "name": "Logic",
          "categorystyle": "logic_category",
          "contents": [
            {
              "kind": "block",
              "type": "controls_if"
            },
            {
              "kind": "block",
              "type": "logic_compare"
            },
            {
              "kind": "block",
              "type": "logic_operation"
            },
            {
              "kind": "block",
              "type": "logic_negate"
            },
            {
              "kind": "block",
              "type": "logic_boolean"
            },
            {
              "kind": "block",
              "type": "logic_null"
            }
          ]
        },
        {
          "kind": "category",
          "name": "Loops",
          "categorystyle": "loop_category",
          "contents": [
            {
              "kind": "block",
              "type": "controls_repeat_ext",
              "inputs": {
                "TIMES": {
                  "block": {
                    "type": "math_number",
                    "fields": {
                      "NUM": 10
                    }
                  }
                }
              }
            },
            {
              "kind": "block",
              "type": "controls_whileUntil"
            },
            {
              "kind": "block",
              "type": "controls_for"
            },
            {
              "kind": "block",
              "type": "controls_forEach"
            },
            {
              "kind": "block",
              "type": "controls_flow_statements"
            }
          ]
        },
        {
          "kind": "category",
          "name": "Math",
          "categorystyle": "math_category",
          "contents": [
            {
              "kind": "category",
              "name": "Functions",
              "categorystyle": "math_category",
              "contents": [
                {
                  "kind": "block",
                  "type": "math_arithmetic"
                },
                {
                  "kind": "block",
                  "type": "math_single"
                },
                {
                  "kind": "block",
                  "type": "math_trig"
                },
                {
                  "kind": "block",
                  "type": "math_constant"
                },
                {
                  "kind": "block",
                  "type": "math_on_list"
                },
                {
                  "kind": "block",
                  "type": "math_modulo"
                },
                {
                  "kind": "block",
                  "type": "math_tostr"
                },
                {
                  "kind": "block",
                  "type": "math_constrain"
                },
                {
                  "kind": "block",
                  "type": "math_random_int"
                },
                {
                  "kind": "block",
                  "type": "math_random_float"
                },
                {
                  "kind": "block",
                  "type": "math_atan2"
                }
              ]
            },
            {
              "kind": "category",
              "name": "Absolute",
              "categorystyle": "math_category",
              "contents": [
                {
                  "kind": "block",
                  "type": "math_number",
                  "fields": {
                    "NUM": 123
                  }
                },
                {
                  "kind": "block",
                  "type": "percent",
                  "fields": {
                    "PER": "100"
                  }
                },
                {
                  "kind": "block",
                  "type": "infinity"
                },
                {
                  "kind" : "block",
                  "type" : "negInfinity"
                }
              ]
            }
          ]
        },
        {
          "kind": "category",
          "name": "Text",
          "categorystyle": "text_category",
          "contents": [
            {
              "kind": "category",
              "name": "Functions",
              "categorystyle": "text_category",
              "contents": [
                {
                  "kind": "block",
                  "type": "text_length"
                },
                {
                  "kind": "block",
                  "type": "text_print"
                },
                {
                  "kind": "block",
                  "type": "slice_text"
                },
                {
                  "kind": "block",
                  "type": "text_join"
                },
                {
                  "kind": "block",
                  "type": "text_append"
                },
                {
                  "kind": "block",
                  "type": "text_isEmpty"
                },
                {
                  "kind": "block",
                  "type": "text_indexOf"
                },
                {
                  "kind": "block",
                  "type": "text_charAt"
                },
                {
                  "kind": "block",
                  "type": "text_getSubstring"
                },
                {
                  "kind": "block",
                  "type": "text_changeCase"
                },
                {
                  "kind": "block",
                  "type": "text_trim"
                },
                {
                  "kind": "block",
                  "type": "text_count"
                },
                {
                  "kind": "block",
                  "type": "text_replace"
                },
                {
                  "kind": "block",
                  "type": "text_reverse"
                },
                {
                  "kind": "block",
                  "type": "text_prompt_ext"
                }
              ]
            },
            {
              "kind": "category",
              "name": "Absolute",
              "categorystyle": "text_category",
              "contents": [
                {
                  "kind": "block",
                  "type": "text"
                },
                {
                  "kind": "block",
                  "type": "text_ms"
                }
              ]
            }
          ]
        },
        {
      "kind": "category",
      "name": "Lists",
      "categorystyle": "lists_category",
      "contents": [
        {
          "kind": "block",
          "type": "lists_create_empty"
        },
        {
          "kind": "block",
          "type": "lists_create_with"
        },
        {
          "kind": "block",
          "type": "lists_repeat"
        },
        {
          "kind": "block",
          "type": "lists_reverse"
        },
        {
          "kind": "block",
          "type": "lists_isEmpty"
        },
        {
          "kind": "block",
          "type": "lists_length"
        },
        {
          "kind": "block",
          "type": "lists_indexOf"
        },
        {
          "kind": "block",
          "type": "lists_setIndex"
        },
        {
          "kind": "block",
          "type": "lists_getSublist"
        },
        {
          "kind": "block",
          "type": "lists_split"
        },
        {
          "kind": "block",
          "type": "lists_sort"
        }
      ]
    },
    /*
        {
          "kind": "category",
          "name": "Array",
          "categorystyle": "array_category",
          "contents": [
            {
              "kind": "category",
              "name": "Functions",
              "categorystyle": "array_category",
              "contents": [
                {
                  "kind": "block",
                  "type": "text_length"
                },
                {
                  "kind": "block",
                  "type": "text_print"
                },
                {
                  "kind": "block",
                  "type": "slice_text"
                }
              ]
            },
            {
              "kind": "category",
              "name": "Absolute",
              "categorystyle": "array_category",
              "contents": [
                {
                  "kind": "block",
                  "type": "array"
                },
                {
                  "kind": "block",
                  "type": "arrayItem"
                }
              ]
            }
          ]
        },*/
        {
          "kind": "category",
          "name": "Variables",
          "custom": "VARIABLE",
          "categorystyle": "var_category"
        },
        {
          "kind": "category",
          "name": "Procedures",
          "custom": "PROCEDURE",
          "categorystyle": "proc_category"
        },
        {
          "kind": "category",
          "name": "Slavery",
          "categorystyle": "slave_category",
          "hidden": "true",
          "contents": [
            {
              "kind": "block",
              "type": "makeSlave"
            },
            {
              "kind": "block",
              "type": "slaveFollow"
            }
          ]
        },
        {
          "kind": "category",
          "name": "Color",
          "categorystyle": "color_category",
          "contents": [
            {
              "kind": "block",
              "type": "clr"
            },
            {
              "kind": "block",
              "type": "clrhex"
            }
          ]
        },
        {
          "kind": "category",
          "name": "Miscellaneous",
          "categorystyle": "misc_category",
          "contents": [
            {
              "kind": "block",
              "type": "eval1"
            },
            {
              "kind": "block",
              "type": "eval2"
            },
            {
              "kind": "block",
              "type": "logtoconsole"
            },
            {
              "kind": "block",
              "type": "1010pixelGrid"
            },
            {
              "kind": "block",
              "type": "55pixelGrid"
            }
          ]
        },
      ]
    };


      const theme2 = Blockly.Theme.defineTheme('light', {
        base: Blockly.Themes.Classic,
        startHats: true,
        categoryStyles : {
          "event_category": {
            "colour": 225
          },
          "var_category": {
            "colour": 330
          },
          "func_category": {
            "colour": 210
          },
          "raw_category": {
            "colour": 1
          },
          "lists_category": {
            "colour": 255
          },
          "proc_category": {
            "colour": 285
          },
          "slave_category": {
            "colour": "#ff0000"
          },
          "misc_category": {
            "colour": "#919191"
          }
      },
      }); 

      const theme = Blockly.Theme.defineTheme('dark', {
        base: Blockly.Themes.Classic,
        startHats: true,
        componentStyles: {
          workspaceBackgroundColour: '#1e1e1e',
          toolboxBackgroundColour: 'blackBackground',
          toolboxForegroundColour: '#fff',
          flyoutBackgroundColour: '#252526',
          flyoutForegroundColour: '#ccc',
          flyoutOpacity: 1,
          scrollbarColour: '#797979',
          insertionMarkerColour: '#fff',
          insertionMarkerOpacity: 0.3,
          scrollbarOpacity: 0.4,
          cursorColour: '#d0d0d0',
          blackBackground: '#333',
        },
        categoryStyles : {
          "event_category": {
            "colour": 225
          },
          "var_category": {
            "colour": 330
          },
          "func_category": {
            "colour": 210
          },
          "raw_category": {
            "colour": 1
          },
          "lists_category": {
            "colour": 255
          },
          "proc_category": {
            "colour": 285
          },
          "slave_category": {
            "colour": "#ff0000"
          },
          "misc_category": {
            "colour": "#919191"
          },
          "color_category": {
            "colour": "#000000"
          }
      },
      }); 
      
      var demoWorkspace = Blockly.inject('blocklyDiv', {
        toolbox: toolbox,
        theme: 'dark',
        grid:{spacing: 20,length: 3,colour: '#4d4d4d',snap: true},
        trashcan: true,
        zoom:
         {controls: true,
          wheel: true,
          startScale: 1.0,
          maxScale: 3,
          minScale: 0.3,
          scaleSpeed: 1.2,
          pinch: true}
      });

      function save() {
        const state = Blockly.serialization.workspaces.save(demoWorkspace);
        localStorage.setItem('workspace-state', JSON.stringify(state));
      }

      function load() {
        const state = localStorage.getItem('workspace-state');
        Blockly.serialization.workspaces.load(JSON.parse(state), demoWorkspace);
      }
      demoWorkspace.addChangeListener(Blockly.Events.disableOrphans);

      Blockly.common.defineBlocksWithJsonArray([{
        "type": "slice_text",
        "tooltip": "Slice text",
        "helpUrl": "",
        "message0": "Slice text %1 from %2 to %3",
        "args0": [
          {
            "type": "input_value",
            "name": "text",
            "align": "RIGHT",
            "check": "String"
            },
            {
            "type": "input_value",
            "name": "pos1",
            "align": "RIGHT",
            "check": "Number"
            },
            {
            "type": "input_value",
            "name": "pos2",
            "align": "RIGHT",
            "check": "Number"
            }
            ],
            "output": "String",
            "colour": 165
          },{
            "type": "init",
            "tooltip": "Runs at start of program",
            "helpUrl": "",
            "message0": "on start %1",
            "args0": [
              {
                "type": "input_dummy",
                "name": "NAME"
              }
            ],
            "nextStatement": null,
            "colour": 225
          },{
            "type": "text_print",
            "tooltip": "Alerts user",
            "helpUrl": "",
            "message0": "alert %1",
            "args0": [
              {
                "type": "input_value",
                "name": "TEXT",
                "align": "RIGHT"
              }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 165
          },{
            "type": "function",
            "tooltip": "Creates a JavaScript function",
            "helpUrl": "",
            "message0": "new function %1 %2 %3",
            "args0": [
              {
                "type": "field_input",
                "name": "FNAME",
                "text": "hello"
              },
              {
                "type": "input_dummy",
                "name": "NAME"
              },
              {
                "type": "input_statement",
                "name": "CODE"
              }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 210
          },{
            "type": "runfunction",
            "tooltip": "Runs a JavaScript function",
            "helpUrl": "",
            "message0": "run function %1 %2",
            "args0": [
              {
                "type": "field_input",
                "name": "FNAME",
                "text": "hello"
              },
              {
                "type": "input_dummy",
                "name": "NAME"
              }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 210
          },{
            "type": "array",
            "tooltip": "Creates a JavaScript array",
            "helpUrl": "",
            "message0": "array %1",
            "args0": [
              {
                "type": "input_statement",
                "name": "CODE"
              }
            ],
            "output": "Array",
            "colour": 55
          },{
            "type": "arrayItem",
            "tooltip": "Returns an array item",
            "helpUrl": "",
            "message0": "array item %1",
            "args0": [
              {
                "type": "field_input",
                "name": "FNAME",
                "text": "hello"
              },
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 55
          },{
            "type": "join",
            "tooltip": "Joins text",
            "helpUrl": "",
            "message0": "join %1 %2",
            "args0": [
              {
                "type": "input_value",
                "name": "1",
                "align": "RIGHT"
              },
              {
                "type": "input_value",
                "name": "2",
                "align": "RIGHT"
              },
            ],
            "output": null,
            "colour": 165
          },{
            "type": "keypress",
            "tooltip": "Runs code when a key is pressed",
            "helpUrl": "",
            "message0": "when key %1 is pressed %2 %3",
            "args0": [
              {
                "type": "field_dropdown",
                "name": "KEY",
                "options": [["a","a"],["b","b"],["c","c"],["d","d"],["e","e"],["f","f"],["g","g"],["h","h"],["i","i"],["j","j"],["k","k"],["l","l"],["m","m"],["n","n"],["o","o"],["p","p"],["q","q"],["r","r"],["s","s"],["t","t"],["u","u"],["v","x"],["w","w"],["x","x"],["y","y"],["z","z"],[{"src":"https://static.thenounproject.com/png/44496-200.png","width":15,"height":15,"alt":"enter"},"enter"]]
              },
              {
                "type": "input_dummy",
                "name": "NAME"
              },
              {
                "type": "input_statement",
                "name": "CODE"
              }
            ],
            "colour": 225
          },
          {
            "type": "onButtonPress",
            "tooltip": "Runs code when a button is pressed",
            "helpUrl": "",
            "message0": "when on-screen button %1 is pressed %2 %3",
            "args0": [
              {
                "type": "field_dropdown",
                "name": "KEY",
                "options": [
                  [
                    "a",
                    "a"
                  ],
                  [
                    "b",
                    "b"
                  ],
                  [
                    "x",
                    "x"
                  ],
                  [
                    "y",
                    "y"
                  ],
                  [
                    "1",
                    "1"
                  ],
                  [
                    "2",
                    "2"
                  ]
                ]
              },
              {
                "type": "input_dummy",
                "name": "NAME"
              },
              {
                "type": "input_statement",
                "name": "CODE"
              }
            ],
            "colour": 225
          },          
          {
            "type": "pic",
            "tooltip": "Returns a picture",
            "helpUrl": "",
            "message0": "picture %1 %2",
            "args0": [
              {
                "type": "field_dropdown",
                "name": "PIC",
                "options": [
                  [
                    "Mutt mutt",
                    "mutt.svg"
                  ],
                  [
                    "Whip",
                    "whip.svg"
                  ],
                  [
                    "Slave leader mutt",
                    "slaver.svg"
                  ]
                ]
              },
              {
                "type": "input_dummy",
                "name": "NAME"
              }
            ],
            "output": null,
            "colour": 0
          },{
            "type": "placeAt",
            "tooltip": "Places sprite at position",
            "helpUrl": "",
            "message0": "place sprite %1 sprite %2 %3 x %4 y %5",
            "args0": [
              {
                "type": "input_dummy",
                "name": "NAME"
              },
              {
                "type": "field_input",
                "name": "SPRITE",
                "text": "default"
              },
              {
                "type": "input_dummy",
                "name": "SPRITE",
                "align": "RIGHT"
              },
              {
                "type": "input_value",
                "name": "X",
                "align": "RIGHT",
                "check": "Number"
              },
              {
                "type": "input_value",
                "name": "Y",
                "align": "RIGHT",
                "check": "Number"
              }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 0
          },{
            "type": "newSprite",
            "tooltip": "Creates a new sprite",
            "helpUrl": "",
            "message0": "new sprite %1 %2 picture %3 scale %4",
            "args0": [
              {
                "type": "input_dummy",
                "name": "NAME"
              },
              {
                "type": "field_input",
                "name": "SPRITE",
                "text": "default"
              },
              {
                "type": "input_value",
                "name": "N2",
                "align": "RIGHT"
              },
              {
                "type": "input_value",
                "name": "SCALE",
                "align": "RIGHT"
              }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 0
          },{
            "type": "makeSlave",
            "tooltip": "Makes a sprite slave of another sprite.",
            "helpUrl": "",
            "message0": "make %1 slave of %2 %3",
            "args0": [
              {
                "type": "field_input",
                "name": "SLAVE",
                "text": "sprite1"
              },
              {
                "type": "field_input",
                "name": "LEADER",
                "text": "sprite2"
              },
              {
                "type": "input_dummy",
                "name": "NAME"
              }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": "#ff0000"
          },{
            "type": "slaveFollow",
            "tooltip": "Makes slave follow leader",
            "helpUrl": "",
            "message0": "make %1 follow owner %2",
            "args0": [
              {
                "type": "field_input",
                "name": "SLAVE",
                "text": "sprite1"
              },
              {
                "type": "input_dummy",
                "name": "NAME"
              }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": "#ff0000"
          },{
            "type": "drawRect",
            "tooltip": "Draws a rectangle at given position of given size.",
            "helpUrl": "",
            "message0": "draw rectangle %1 from X %2 from Y %3 to X %4 to Y %5 color %6 %7",
            "args0": [
              {
                "type": "input_dummy",
                "name": "NAME"
              },
              {
                "type": "input_value",
                "name": "X",
                "align": "RIGHT"
              },
              {
                "type": "input_value",
                "name": "Y",
                "align": "RIGHT"
              },
              {
                "type": "input_value",
                "name": "TX",
                "align": "RIGHT"
              },
              {
                "type": "input_value",
                "name": "TY",
                "align": "RIGHT"
              },
              {
                "type": "input_value",
                "name": "COLOR",
                "align": "RIGHT",
                "check": "Color"
              },
              {
                "type": "input_dummy",
                "name": "COLOR",
                "align": "RIGHT"
              }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 0,
            "inputsInline": false
          },{
            "type": "math_random",
            "tooltip": "Outputs a random number",
            "helpUrl": "",
            "message0": "random %1 minimum %2 maximum %3",
            "args0": [
              {
                "type": "input_dummy",
                "name": "NAME"
              },
              {
                "type": "input_value",
                "name": "MIN",
                "align": "RIGHT",
                "check": "Number"
              },
              {
                "type": "input_value",
                "name": "MAX",
                "align": "RIGHT",
                "check": "Number"
              }
            ],
            "output": null,
            "colour": 225,
            "inputsInline": true
          },{
            "type": "eval1",
            "tooltip": "Evaluates code",
            "helpUrl": "",
            "message0": "evaluate code %1",
            "args0": [
              {
                "type": "input_value",
                "name": "CODE"
              }
            ],
            "output": null,
            "colour": "#919191"
          },{
            "type": "eval2",
            "tooltip": "Evaluates code",
            "helpUrl": "",
            "message0": "evaluate code %1",
            "args0": [
              {
                "type": "input_value",
                "name": "CODE"
              }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": "#919191"
          },{
            "type": "math_tostr",
            "tooltip": "Converts numbers to a string",
            "helpUrl": "",
            "message0": "convert to string %1",
            "args0": [
              {
                "type": "input_value",
                "name": "STR"
              }
            ],
            "output": null,
            "colour": 225
          },{
            "type": "text_ms",
            "tooltip": "A letter, word, or line of text.",
            "helpUrl": "",
            "message0": "` %1 ` %2",
            "args0": [
              {
                "type": "field_input",
                "name": "TEXT",
                "text": ""
              },
              {
                "type": "input_dummy",
                "name": "NAME"
              }
            ],
            "output": null,
            "colour": 165
          },{
            "type": "text_ask",
            "tooltip": "Asks user for input",
            "helpUrl": "",
            "message0": "ask %1",
            "args0": [
              {
                "type": "input_value",
                "name": "TEXT"
              }
            ],
            "output": null,
            "colour": 165
          },{
            "type": "delayRun",
            "tooltip": "Runs code repeatedly until program is stopped.",
            "helpUrl": "",
            "message0": "forever %1 %2",
            "args0": [
              {
                "type": "input_dummy",
                "name": "NAME"
              },
              {
                "type": "input_statement",
                "name": "CODE"
              }
            ],
            "colour": 225
          },{
            "type": "infinity",
            "tooltip": "Returns Infinity",
            "helpUrl": "",
            "message0": "infinity (∞) %1",
            "args0": [
              {
                "type": "input_dummy",
                "name": "NAME"
              }
            ],
            "output": null,
            "colour": 225
          },{
            "type": "negInfinity",
            "tooltip": "Returns negative Infinity ",
            "helpUrl": "",
            "message0": "negative infinity (-∞)  %1",
            "args0": [
              {
                "type": "input_dummy",
                "name": "NAME"
              }
            ],
            "output": null,
            "colour": 225
          },{
            "type": "1010pixelGrid",
            "tooltip": "Returns a 10x10 pixel grid.",
            "helpUrl": "",
            "message0": "10x10 %1",
            "args0": [
              {
                type: 'field_bitmap',
                name: 'GRIDBLK',
                width: 10,
                height: 10,
                buttons: {
                  randomize: false,
                  clear: false,
                },
                colours: {
                  filled: '#000',
                  empty: '#fff',
                }
              }
            ],
            "output": null,
            "colour": "#919191"
          },{
            "type": "55pixelGrid",
            "tooltip": "Returns a 5x5 pixel grid.",
            "helpUrl": "",
            "message0": "5x5 %1",
            "args0": [
              {
                type: 'field_bitmap',
                name: 'GRIDBLK',
                width: 5,
                height: 5,
                buttons: {
                  randomize: false,
                  clear: false,
                },
                colours: {
                  filled: '#000',
                  empty: '#fff',
                }
              }
            ],
            "output": null,
            "colour": "#919191"
          },
          {
            "type": "gx22",
            "tooltip": "Gets sprite's X co-ordinate",
            "helpUrl": "",
            "message0": "X position of %1 %2",
            "args0": [
              {
                "type": "field_input",
                "name": "SPRITE",
                "text": "sprite"
              },
              {
                "type": "input_dummy",
                "name": "NAME"
              }
            ],
            "output": null,
            "colour": 0
          },
          {
            "type": "gy22",
            "tooltip": "Gets sprite's Y co-ordinate",
            "helpUrl": "",
            "message0": "Y position of %1 %2",
            "args0": [
              {
                "type": "field_input",
                "name": "SPRITE",
                "text": "sprite"
              },
              {
                "type": "input_dummy",
                "name": "NAME"
              }
            ],
            "output": null,
            "colour": 0
          },
          {
            "type": "setcss",
            "tooltip": "Sets the cursor shown when hovered over sprite",
            "helpUrl": "",
            "message0": "set cursor of %1 to %2 %3",
            "args0": [
              {
                "type": "field_input",
                "name": "SPRITE",
                "text": "sprite"
              },
              {
                "type": "field_dropdown",
                "name": "CURSOR",
                "options": [
                  [
                    "pointer",
                    "pointer"
                  ],
                  [
                    "default",
                    "default"
                  ],
                  [
                    "grab",
                    "grab"
                  ],
                  [
                    "grabbing",
                    "grabbing"
                  ]
                ]
              },
              {
                "type": "input_dummy",
                "name": "NAME"
              }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 0
          },
          {
            "type": "percent",
            "tooltip": "Outputs a percentage",
            "helpUrl": "",
            "message0": "%1 %2",
            "args0": [
              {
                "type": "field_dropdown",
                "name": "PER",
                "options": [
                  [
                    "200%",
                    "200"
                  ],
                  [
                    "150%",
                    "150"
                  ],
                  [
                    "100%",
                    "100"
                  ],
                  [
                    "75%",
                    "75"
                  ],
                  [
                    "50%",
                    "50"
                  ],
                  [
                    "25%",
                    "25"
                  ],
                  [
                    "15%",
                    "15"
                  ],
                  [
                    "10%",
                    "10"
                  ]
                ]
              },
              {
                "type": "input_dummy",
                "name": "NAME"
              }
            ],
            "output": null,
            "colour": 225
          },{
            "type": "setbg",
            "tooltip": "Sets the color of the stage.",
            "helpUrl": "",
            "message0": "set color of stage to %1",
            "args0": [
              {
                "type": "input_value",
                "name": "COLOR",
                "check": "Color"
              }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 0
          },
          {
            "type": "clr",
            "tooltip": "Returns a color.",
            "helpUrl": "",
            "message0": "color %1 %2",
            "args0": [
              {
                "type": "field_dropdown",
                "name": "COLOR",
                "options": [
                  [
                    "black",
                    "#000000"
                  ],
                  [
                    "white",
                    "#ffffff"
                  ],
                  [
                    "red",
                    "#ff0000"
                  ],
                  [
                    "green",
                    "#00ff00"
                  ],
                  [
                    "blue",
                    "#0000ff"
                  ],
                  [
                    "cyan",
                    "#00ffff"
                  ],
                  [
                    "pink",
                    "#ff00ff"
                  ],
                  [
                    "yellow",
                    "#ffff00"
                  ]
                ]
              },
              {
                "type": "input_dummy",
                "name": "COLOR",
                "align": "RIGHT"
              }
            ],
            "output": null,
            "colour": "#000000",
            "inputsInline": false
            },
            {
              "type": "clrhex",
              "tooltip": "Returns a color.",
              "helpUrl": "",
              "message0": "hex color %1 %2",
              "args0": [
                {
                  "type": "field_input",
                  "name": "COLOR",
                  "text": "00ff00"
                },
                {
                  "type": "input_dummy",
                  "name": "NAME"
                }
              ],
              "output": "Color",
              "colour": "#000000"
            },
            {
              "type": "onclick",
              "tooltip": "Runs code when sprite is clicked.",
              "helpUrl": "",
              "message0": "when %1 is clicked %2 %3",
              "args0": [
                {
                  "type": "field_input",
                  "name": "SPRITE",
                  "text": "sprite"
                },
                {
                  "type": "input_dummy",
                  "name": "NAME"
                },
                {
                  "type": "input_statement",
                  "name": "CODE"
                }
              ],
              "colour": 225
            },
            {
              "type": "onmousemove",
              "tooltip": "Runs code when mouse is moved.",
              "helpUrl": "",
              "message0": "when mouse is moved %1 %2",
              "args0": [
                {
                  "type": "input_dummy",
                  "name": "NAME"
                },
                {
                  "type": "input_statement",
                  "name": "CODE"
                }
              ],
              "colour": 225
            },
            {
              "type": "mouse_X",
              "tooltip": "Returns the X position of the mouse",
              "helpUrl": "",
              "message0": "mouse's X position %1",
              "args0": [
                {
                  "type": "input_dummy",
                  "name": "NAME"
                }
              ],
              "output": null,
              "colour": 0
            },
            {
              "type": "mouse_Y",
              "tooltip": "Returns the Y position of the mouse",
              "helpUrl": "",
              "message0": "mouse's Y position %1",
              "args0": [
                {
                  "type": "input_dummy",
                  "name": "NAME"
                }
              ],
              "output": null,
              "colour": 0
            },
            {
              "type": "logtoconsole",
              "tooltip": "Logs text to console",
              "helpUrl": "",
              "message0": "log to console %1",
              "args0": [
                {
                  "type": "input_value",
                  "name": "TEXT"
                }
              ],
              "previousStatement": null,
              "nextStatement": null,
              "colour": "#919191"
            }
        ]
      );

      function isInsideIframe(){try{return window.self!==window.top}catch(e){return true}}
      
      function getRandomInt(min,max){const minCeiled=Math.ceil(min);const maxFloored=Math.floor(max);return Math.floor(Math.random()*(maxFloored-minCeiled)+minCeiled)}
      
      var code2 = `function getRandomInt(min,max){const minCeiled=Math.ceil(min);const maxFloored=Math.floor(max);return Math.floor(Math.random()*(maxFloored-minCeiled)+minCeiled)} function isInsideIframe(){try{return window.self!==window.top}catch(e){return true}} function evalC(code){if(isInsideIframe()){console.warn("This website is running as an embed! Please got to https://muttcode.glitch.me to run 'eval' statements.");return eval("")}else{return eval(code)}} const playground=draw.group();var sprites=playground.group();function clearCanvas(){var rect=draw.rect(210,210).attr({fill:'#fff'})}function newSprite(pic,scale){let bbe=sprites.image(pic);bbe.size(scale,scale).move(20,20);return bbe}const background=draw.rect(300,200).fill('white');function changeBackgroundColor(color){background.fill(color)}background.backward();currentxPos3hj4f89h348h83=0;currentyPos3hj4f89h348h83=0;`;

      /*function evalC(code) {
        if (isInsideIframe()) {
          console.warn("This website is running in an IFrame/embed! Please got to https://azuretecdevsoffical.github.io or https://muttcode.glitch.me (old) to run 'eval' statements.");
          return eval("");
        } else {
          return eval(code);
        }
      }*/

      Blockly.Extensions.register('dynamic_menu_extension',
        function() {
          this.getInput('INPUT')
            .appendField(new Blockly.FieldDropdown(
              function() {
                var options = [];
                var now = Date.now();
                for(var i = 0; i < 7; i++) {
                  var dateString = String(new Date(now)).substring(0, 3);
                  options.push([dateString, dateString.toUpperCase()]);
                  now += 24 * 60 * 60 * 1000;
                }
                return options;
              }), 'DAY');
        });

      const Order = {
        ATOMIC: 0,
      };

      javascript.javascriptGenerator.forBlock['keypress'] = function(block) {
        const key = block.getFieldValue('KEY');
        const code = javascript.javascriptGenerator.statementToCode(block, 'CODE');
        return `
        document.addEventListener('keydown', function handler(event) {
        if (document.getElementById('handle').value === 'NO') {
        this.removeEventListener('keydown', handler);
        console.log('Removed event handler, project stopped/inactive.');
        } else if (event.key === '${key}' || event.key === '${key.toUpperCase()}') {${code}}; 
        }
        );`;
      };
      
      javascript.javascriptGenerator.forBlock['onButtonPress'] = function(block) {
        const key = block.getFieldValue('KEY');
        const code = javascript.javascriptGenerator.statementToCode(block, 'CODE');
        return `
        document.addEventListener('click', function handler(event) {
        if (document.getElementById('handle').value === 'NO') {
        this.removeEventListener('click', handler);
        console.log('Removed event handler, project stopped/inactive.');
        } else if (event.target.id === '${key}BTN' || event.target.id === '${key.toUpperCase()}BTN') {${code}}; 
        }
        );`;
      };

      javascript.javascriptGenerator.forBlock['setcss'] = function(block) {
        const key = block.getFieldValue('SPRITE');
        const code = block.getFieldValue('CURSOR');
        return `${key}.css('cursor', '${code}')`;
      };

      javascript.javascriptGenerator.forBlock['onclick'] = function(block) {
        const code = javascript.javascriptGenerator.statementToCode(block, 'CODE');
        const a1 = block.getFieldValue('SPRITE');
        return `${a1.replace("'","")}.click(() => {${code}});`;
      };
      
      javascript.javascriptGenerator.forBlock['onmousemove'] = function(block) {
        const code = javascript.javascriptGenerator.statementToCode(block, 'CODE');
        return `draw.on('mousemove', (event) => {${code}const element = document.getElementById("canvas");const rect2=element.getBoundingClientRect();const x22=rect2.y;const y22=rect2.x;const {x,y}=draw.bbox();currentxPos3hj4f89h348h83=event.clientX-y22;currentyPos3hj4f89h348h83=event.clientY-y-x22;});`;
      };
      
      javascript.javascriptGenerator.forBlock['delayRun'] = function(block) {
        const code = javascript.javascriptGenerator.statementToCode(block, 'CODE');
        var ft3 = getRandomInt(1111111111,9999999999);
        return `function func${ft3}() {if (rnu44238df83hh) {${code}} setTimeout(() => func${ft3}(), 10);} func${ft3}();`;
      };
      
      javascript.javascriptGenerator.forBlock['setbg'] = function(block) {
        const code = javascript.javascriptGenerator.valueToCode(block, 'COLOR', Order.ATOMIC);
        return `changeBackgroundColor('${code}');`;
      };
      
      javascript.javascriptGenerator.forBlock['logtoconsole'] = function(block) {
        const code = javascript.javascriptGenerator.valueToCode(block, 'TEXT', Order.ATOMIC);
        return `logToWindow(${code});`;
      };

      javascript.javascriptGenerator.forBlock['math_random'] = function(block) {
        const a1 = javascript.javascriptGenerator.valueToCode(block, 'MIN', Order.ATOMIC);
        const a2 = javascript.javascriptGenerator.valueToCode(block, 'MAX', Order.ATOMIC);
        return [`getRandomInt(${a1},${a2})`,Order.ATOMIC];
      };
      
      javascript.javascriptGenerator.forBlock['mouse_X'] = function(block) {
        return [`currentxPos3hj4f89h348h83`,Order.ATOMIC];
      };
      
      javascript.javascriptGenerator.forBlock['mouse_Y'] = function(block) {
        return [`currentyPos3hj4f89h348h83`,Order.ATOMIC];
      };

      javascript.javascriptGenerator.forBlock['math_tostr'] = function(block) {
        const a1 = javascript.javascriptGenerator.valueToCode(block, 'STR', Order.ATOMIC);
        return [`'${a1}'`,Order.ATOMIC];
      };
      
      javascript.javascriptGenerator.forBlock['percent'] = function(block) {
        const a1 = block.getFieldValue('PER');
        return [`${a1}`,Order.ATOMIC];
      };

      javascript.javascriptGenerator.forBlock['infinity'] = function(block) {
        return [`Number.POSITIVE_INFINITY`,Order.ATOMIC];
      };

      javascript.javascriptGenerator.forBlock['negInfinity'] = function(block) {
        return [`Number.NEGATIVE_INFINITY`,Order.ATOMIC];
      };

      
      javascript.javascriptGenerator.forBlock['text_ms'] = function(block) {
        const a1 = block.getFieldValue('TEXT');
        return [`\`${a1}\``,Order.ATOMIC];
      };

      function for55(grid) {
        let listChar = [];
        let currentIndex = 0;
        let currentCharIndex = 0;
        let currJoined = '';
        let currUnjoined = [];
        grid.forEach(element => {
          currentIndex = currentIndex + 1;
          currUnjoined.push(grid[currentIndex]);
          if (currentCharIndex === 4) {
            currentCharIndex = 0;
            currJoined.push(currUnjoined.join(''));
          } else {
            currentCharIndex = currentCharIndex + 1;
          }
        });
        return listChar.join(',');
      }
      // names.forEach((name, index) => rollCall(name, index)); 
      // x and y getters
      stuff = [];

      javascript.javascriptGenerator.forBlock['gx22'] = function(block) {
        const a1 = block.getFieldValue('SPRITE');
        return [`${a1}.cx()`,Order.ATOMIC];
      };
      
      javascript.javascriptGenerator.forBlock['clr'] = function(block) {
        const a1 = block.getFieldValue('COLOR');
        return [`${a1}`,Order.ATOMIC];
      };

      javascript.javascriptGenerator.forBlock['gy22'] = function(block) {
        const a1 = block.getFieldValue('SPRITE');
        return [`${a1}.cy()`,Order.ATOMIC];
      };

      javascript.javascriptGenerator.forBlock['1010pixelGrid'] = function(block) {
        const a1 = block.getFieldValue('GRIDBLK');
        return [`${a1}`,Order.ATOMIC];
      };

      javascript.javascriptGenerator.forBlock['55pixelGrid'] = function(block) {
        const a1 = block.getFieldValue('GRIDBLK');
        return [`${a1}`,Order.ATOMIC];
      };

      javascript.javascriptGenerator.forBlock['eval1'] = function(block) {
        const a1 = javascript.javascriptGenerator.valueToCode(block, 'CODE', Order.ATOMIC);
        return [`evalC(${a1})`,Order.ATOMIC];
      };
      
      javascript.javascriptGenerator.forBlock['clrhex'] = function(block) {
        const a1 = block.getFieldValue('COLOR');
        return [`#${a1}`,Order.ATOMIC];
      };

      javascript.javascriptGenerator.forBlock['eval2'] = function(block) {
        const a1 = javascript.javascriptGenerator.valueToCode(block, 'CODE', Order.ATOMIC);
        return `evalC(${a1});`;
      };

      javascript.javascriptGenerator.forBlock['init'] = function(block) {
        return '';
      };

      javascript.javascriptGenerator.forBlock['newSprite'] = function(block) {
        const name = block.getFieldValue('SPRITE');
        const pic = javascript.javascriptGenerator.valueToCode(block, 'N2', Order.ATOMIC);
        const scale = javascript.javascriptGenerator.valueToCode(block, 'SCALE', Order.ATOMIC);
        const drag = false //javascript.javascriptGenerator.valueToCode(block, 'DRAG', Order.ATOMIC);
        if (drag) {
          return `var ${name.replace("'","")} = newSprite(${pic},${scale});${name.replace("'","")}.draggable=true\n`;
        } else {
          return `var ${name.replace("'","")} = newSprite(${pic},${scale});${name.replace("'","")}.draggable=false\n`;
        }
      };

      javascript.javascriptGenerator.forBlock['drawRect'] = function(block) {
        const color = javascript.javascriptGenerator.valueToCode(block, 'COLOR', Order.ATOMIC);
        const x = javascript.javascriptGenerator.valueToCode(block, 'X', Order.ATOMIC);
        const y = javascript.javascriptGenerator.valueToCode(block, 'Y', Order.ATOMIC);
        const tx = javascript.javascriptGenerator.valueToCode(block, 'TX', Order.ATOMIC);
        const ty = javascript.javascriptGenerator.valueToCode(block, 'TY', Order.ATOMIC);
        return `var rect = draw.rect(${tx}, ${ty}).attr({fill: '${color}'});\nrect.center(${x}, ${y});\n`;
      };

      javascript.javascriptGenerator.forBlock['join'] = function(block) {
        const a1 = javascript.javascriptGenerator.valueToCode(block, '1', Order.ATOMIC);
        const a2 = javascript.javascriptGenerator.valueToCode(block, '2', Order.ATOMIC);
        return [`${a1}+${a2}`,Order.ATOMIC];
      };

      javascript.javascriptGenerator.forBlock['pic'] = function(block) {
        const pic = block.getFieldValue('PIC');
        return [`'${pic}'`,Order.ATOMIC];
      };

      /*javascript.javascriptGenerator.forBlock['sprite'] = function(block) {
        const name = javascript.javascriptGenerator.valueToCode(block, 'NAME', Order.ATOMIC);
        const pic = javascript.javascriptGenerator.valueToCode(block, 'PIC', Order.ATOMIC);
        return `sprites.push([${name},${pic},0,0]);`;
      };*/

      javascript.javascriptGenerator.forBlock['placeAt'] = function(block) {
        const name = block.getFieldValue('SPRITE');
        const x = javascript.javascriptGenerator.valueToCode(block, 'X', Order.ATOMIC);
        const y = javascript.javascriptGenerator.valueToCode(block, 'Y', Order.ATOMIC);
        return `${name.replace("'","")}.center(${x},${y});`;
      };

      javascript.javascriptGenerator.forBlock['array'] = function(block) {
        const code = javascript.javascriptGenerator.statementToCode(block, 'CODE');
        return [`[${code}]`,Order.ATOMIC];
      };

      javascript.javascriptGenerator.forBlock['function'] = function(block) {
        const textValue = block.getFieldValue('FNAME');
        const code = javascript.javascriptGenerator.statementToCode(block, 'CODE');
        return `function ${textValue}() {\n${code}\n}\n`;
      };

      javascript.javascriptGenerator.forBlock['arrayItem'] = function(block) {
        const textValue = block.getFieldValue('FNAME');
        return `${textValue},`;
      };

      javascript.javascriptGenerator.forBlock['runfunction'] = function(block) {
        const textValue = block.getFieldValue('FNAME');
        return `${textValue}();\n`;
      };

      javascript.javascriptGenerator.forBlock['slice_text'] = function(block) {
        const textValue = javascript.javascriptGenerator.valueToCode(block, 'text', Order.ATOMIC);
        const pos1 = javascript.javascriptGenerator.valueToCode(block, 'pos1', Order.ATOMIC);
        const pos2 = javascript.javascriptGenerator.valueToCode(block, 'pos2', Order.ATOMIC);
        const code = `"${textValue}".slice(${pos1},${pos2})`;
        console.log(`"${textValue}".slice(${pos1},${pos2})`);
        return [code, Order.ATOMIC];
      };

      // setTimeout(() => code(), delay);

      var rnu44238df83hh = false;
      
      var startBlocks = {
        blocks: {
          languageVersion: 0,
          blocks: [
            {
              type: 'init',
              inline: false,
              inputs: {
              }
            }
          ]
        }
      };
      Blockly.serialization.workspaces.load(startBlocks, demoWorkspace);

      function showCode() {
        // Generate JavaScript code and display it.
        javascript.javascriptGenerator.INFINITE_LOOP_TRAP = null;
        var code =
          javascript.javascriptGenerator.workspaceToCode(demoWorkspace);
        console.log(code2 + code);
        document.getElementById('jsv').innerHTML = code2 + code;
      }
      function stop() {
        document.getElementById('handle').value = 'NO';
        rnu44238df83hh = false;
        clearCanvas()
      }
      
      function runCode() {
        window.LoopTrap = 1000;
        javascript.javascriptGenerator.INFINITE_LOOP_TRAP =
          'if (--window.LoopTrap < 0) throw "Infinite loop, cannot run code. Try using the delay block.";\n';
        var code =
          javascript.javascriptGenerator.workspaceToCode(demoWorkspace);
        javascript.javascriptGenerator.INFINITE_LOOP_TRAP = null;
        try {
          clearCanvas()
          document.getElementById('handle').value = 'YES';
          code = code2 + code;
          rnu44238df83hh = true;
          console.log("Running code:\n"+code);
          eval(code);
        } catch (e) {
          clearCanvas()
          document.getElementById('handle').value = 'NO';
          console.error(e);
        }
      }
