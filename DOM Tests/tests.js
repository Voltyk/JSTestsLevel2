// 0. Создать функицю, которая принимает строку селектор и возвращает:
// 	 - undefined - если ничего не найдено
// 	 - найденную ноду - если она одна
// 	 - массив нод - если их несколько
// 	 - если в функцию передать ноду, функция возвращает ее тип (Node, Text, Comment etc)

function selectorString01(inp) {
  if (typeof inp === 'string') {
    let selector = inp.slice(0, inp.indexOf('('));
    let identifier = inp.slice(inp.indexOf('\'') + 1, inp.indexOf('\'', inp.indexOf('\'') + 1));
    let node;
    switch (selector) {
      case 'document.getElementById':
        node = document.getElementById(identifier);
        if (node != null) {
          return node;
        } else {
          return undefined;
        }
        break;
      case 'document.getElementsByClassName':
        node = document.getElementsByClassName(identifier);
        if (node != null) {
          if (node.length > 1) {
            return node;
          } else {
            return node[0];
          }
          return node;
        } else {
          return undefined;
        }
        break;
      case 'document.getElementsByTagName':
        node = document.getElementsByTagName(identifier);
        if (node != null) {
          if (node.length > 1) {
            return node;
          } else {
            return node[0];
          }
          return node;
        } else {
          return undefined;
        }
        break;
      case 'document.querySelectorAll':
        node = document.querySelectorAll(identifier);
        if (node != null) {
          if (node.length > 1) {
            return node;
          } else {
            return node[0];
          }
          return node;
        } else {
          return undefined;
        }
        break;
      default:
    }
  }
  if (inp.nodeType) {
    nodeTypesArr = [
      'ELEMENT_NODE',
      'ATTRIBUTE_NODE',
      'TEXT_NODE',
      'CDATA_SECTION_NODE',
      'ENTITY_REFERENCE_NODE',
      'ENTITY_NODE',
      'PROCESSING_INSTRUCTION_NODE',
      'COMMENT_NODE',
      'DOCUMENT_NODE',
      'DOCUMENT_TYPE_NODE',
      'DOCUMENT_FRAGMENT_NODE',
      'NOTATION_NODE'
    ];
    return nodeTypesArr[inp.nodeType - 1];
  }
}

// 1. Создать функцию, которая принимает строку селектор и возвращает:
//      - undefined - если ничего не найдено
// 	 - найденную ноду - если она одна
// 	 - первую найденную ноду - если их несколько

function selectorString02(inp) {
  if (typeof inp === 'string') {
    let selector = inp.slice(0, inp.indexOf('('));
    let identifier = inp.slice(inp.indexOf('\'') + 1, inp.indexOf('\'', inp.indexOf('\'') + 1));
    let node;
    switch (selector) {
      case 'document.getElementById':
        node = document.getElementById(identifier);
        if (node != null) {
          return node;
        } else {
          return undefined;
        }
        break;
      case 'document.getElementsByClassName':
        node = document.getElementsByClassName(identifier);
        if (node != null) {
          return node[0];
        } else {
          return undefined;
        }
        break;
      case 'document.getElementsByTagName':
        node = document.getElementsByTagName(identifier);
        if (node != null) {
          return node[0];
        } else {
          return undefined;
        }
        break;
      case 'document.querySelectorAll':
        node = document.querySelectorAll(identifier);
        if (node != null) {
          return node[0];
        } else {
          return undefined;
        }
        break;
      default:
    }
  }
}

// 2. Создать функцию аналог функции DOM insertBefore, но вставляет не до, а после
// указанного элемента.

function insAfter(newElement, refferenceElement) {
  refferenceElement.parentNode.insertBefore(newElement, refferenceElement.nextSibling);
}



// 3. Создать функцию, которая выдает значение атрибута или ставит его значение.
// 	 Чтение.
// 	 Что имеется в виду - Допустим есть элемент:
// 	    <titanic style="float:none"></titanic>
// 	    Если передать в функцию 'style' - она должна выдать "float:none"
// 	    <ninja color="black" visibility="hidden"></ninja>
// 	    Если передать в функцию 'color' - она должна выдать "black"
//
// 	 Установка.
//      Что имеется в виду - Допустим есть элемент:
//         <lego></lego>
//         Если передать в функцию два параметра - атрибут и значение, то нода должна выглядеть
//         <lego style="display:block"></lego>
//         Если значение этого атрибута уже задано, устанавливается новое значение.
// 	    Было:
// 	    <chucknorris speed="5"></chucknorris>
// 	    После вызова функции с передачей атрибута и значения (speed Infinity):
// 	    <chucknorris speed="Infinity"></chucknorris>

function attrManipulate(elem, attr, attrValue) {
  if (attrValue === undefined) {
    return elem.getAttribute(attr);
  } else {
    elem.setAttribute(attr, attrValue);
  }
}

// 4. С помощью JS создайте шахматное поле:
//     - контейнер поля
//     - 64 ребёнка (ячейки) элементы (проще позиционировать с помощью float)
//     - ячейки раскрашены белым и черным
//     - нужные атрибуты и стили задавайте с помощью JS

var main = document.getElementsByTagName('main')[0];
var boardContainer = document.createElement('div');
boardContainer.setAttribute('id', 'chess-board');
boardContainer.setAttribute('style', 'height:400px; width:400px; border-style: double;');
insAfter(boardContainer, document.getElementById('chess-title'));
var chessCellsDivsArray = [];
let arr;
for (var i = 0; i < 8; i++) {
  arr = new Array(8);
  for (var j = 0; j < 8; j++) {
    arr[j] = document.createElement('div');
    arr[j].setAttribute('id', String.fromCodePoint(65 + j) + (8 - i));
    // arr[j].setAttribute('style','height:50px;width:50px')
    if ((i + j) & 1) {
      arr[j].setAttribute('style', 'background:black; height:50px; width:50px; float:left');
    } else {
      arr[j].setAttribute('style', 'background:#ededed; height:50px; width:50px; float:left');
    }
    boardContainer.appendChild(arr[j]);
  }
  chessCellsDivsArray.push(arr);
}


// 5. Реализовать игру Пятнашки. (Пример - http://scanvord.net/pyatnashki/)
//     - контейнер поля <div class=“battle-field”></div>
// - c помощью JS создать ячейки 1..15
//     - назначить необходимые обработчики событий
// - сохранять состояние игры при закрытии вкладки, возобновлять игру при повторном открытии

var fifteenContainer = document.createElement('div');
var stepsCounteText=document.getElementById('steps-counter');
var timeCounteText=document.getElementById('time-counter');
var buttonMixPazzle=document.getElementById('button-mix-puzzle');
var buttonWinPosition=document.getElementById('button-win-position');
fifteenContainer.setAttribute('id', 'fifteen-board');
fifteenContainer.setAttribute('style', 'height:400px; width:400px; border-style: double;');
insAfter(fifteenContainer, buttonMixPazzle);
var fifteenCellsDivsArray = [];
var imgArray = [];
var emptyCellPosition = [];
var gameState = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
const winState = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
var gameSteps = 0;
var gameTimer=[0,0];
var runTimer=false;

for (let i = 0; i < 4; i++) {
  arr = new Array(4);
  for (let j = 0; j < 4; j++) {
    arr[j] = document.createElement('div');
    arr[j].setAttribute('id', i + '-' + j);
    arr[j].setAttribute('style', 'height:100px; width:100px; float:left');
    arr[j].onclick = function() {
      let currPosition = this.id.split('-').map(x => {
        return parseInt(x)
      });
      if (Math.abs(currPosition[0] - emptyCellPosition[0]) + Math.abs(currPosition[1] - emptyCellPosition[1]) === 1) {
        fifteenCellsDivsArray[emptyCellPosition[0]][emptyCellPosition[1]].appendChild(this.firstChild);
        this.appendChild(imgArray[15]);
        gameState[emptyCellPosition[0]*4+emptyCellPosition[1]] = gameState[currPosition[0]*4+currPosition[1]];
        gameState[currPosition[0]*4+currPosition[1]]=16;
        gameSteps++;
        stepsCounteText.innerHTML = 'Game steps: ' + gameSteps;
        try {
          localStorage.setItem('fifteenGameState',gameState);
        } catch (e) {console.log('unable to store game state in local storage');}
        if (currPosition[0] === emptyCellPosition[0]) {
          if (currPosition[1] > emptyCellPosition[1]) {
            animateElement(fifteenCellsDivsArray[emptyCellPosition[0]][emptyCellPosition[1]], 'move-right', 0.2);
          } else {
            animateElement(fifteenCellsDivsArray[emptyCellPosition[0]][emptyCellPosition[1]], 'move-left', 0.2);
          }
        } else {
          if (currPosition[0] > emptyCellPosition[0]) {
            animateElement(fifteenCellsDivsArray[emptyCellPosition[0]][emptyCellPosition[1]], 'move-top', 0.2);
          } else {
            animateElement(fifteenCellsDivsArray[emptyCellPosition[0]][emptyCellPosition[1]], 'move-bottom', 0.2);
          }
        }
        emptyCellPosition = currPosition.slice(0);
      } else {
        animateElement(fifteenCellsDivsArray[currPosition[0]][currPosition[1]], 'shake', 0.2);
      }


    }
    fifteenContainer.appendChild(arr[j]);

  }
  fifteenCellsDivsArray.push(arr);
}

for (let i = 0; i < 16; i++) {
  imgArray.push(document.createElement('img'));
  imgArray[i].setAttribute('id', (i + 1) + '-pad');
  imgArray[i].setAttribute('style', 'height:100px;width:100px');
  imgArray[i].setAttribute('src', 'img/' + (i + 1) + '.png');
}
try {
  if (localStorage.getItem('fifteenGameState')!=null) {
    gameState=localStorage.getItem('fifteenGameState').split(',').map(x => {
      return parseInt(x)
    });
  }else {
    localStorage.setItem('fifteenGameState',gameState);
  }
} catch (e) {
  console.log('Unable to access local storge to save last game state');
}

fillPuzzle();

var timerId = setInterval(function() {
  if (runTimer) {
    gameTimer[1]++;
    if (gameTimer[1]>59) {
      gameTimer[0]++;
      gameTimer[1]=0;
    }
    timeCounteText.innerHTML = '0'.repeat(2 - gameTimer[0].toString().length) + gameTimer[0] + ':' + '0'.repeat(2 - gameTimer[1].toString().length) + gameTimer[1];
  }

},1000);

buttonMixPazzle.onclick = function(){
  mixPuzzle();
}

buttonWinPosition.onclick = function(){
  gameState=winState.slice(0);
  fillPuzzle();

}


function fillPuzzle() {
  for (let i = 0; i < 16; i++) {
    fifteenCellsDivsArray[Math.floor(i / 4)][i % 4].appendChild(imgArray[gameState[i]-1]);
    if (gameState[i]===16) {
        emptyCellPosition[0]= Math.floor(i / 4);
        emptyCellPosition[1]= Math.floor(i % 4);
    }
    try {
      localStorage.setItem('fifteenGameState',gameState);
    } catch (e) {console.log('unable to store game state in local storage');}
  }
  gameSteps = 0;
  stepsCounteText.innerHTML = 'Game steps: ' + gameSteps;
  gameTimer=[0,0];
  timeCounteText.innerHTML='00:00';
  runTimer=true;
}

function mixPuzzle() {
  gameState.sort((a, b) => Math.random() - 0.5);
  fillPuzzle();
}

function checkWin() {
  for (var i = 0; i < 16; i++) {
    if (winState[i]!=gameState[i]) {
      return false;
    }
  }
  runTimer=false;
  return true;
}

function animateElement(obj, animationName, duration) {
  obj.style.animationName = animationName;
  obj.style.animationDuration = duration + 's';
  obj.style.animationIteration = '1';
  setTimeout(function() {
    obj.style.animationName = null;
    if (checkWin()) {
      alert('You won!');
    }
  }, duration * 1000);

}
