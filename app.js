var arrayOfURL = [
  'images/bag.jpg',
  'images/banana.jpg',
  'images/bathroom.jpg',
  'images/boots.jpg',
  'images/breakfast.jpg',
  'images/bubblegum.jpg',
  'images/chair.jpg',
  'images/cthulhu.jpg',
  'images/dog-duck.jpg',
  'images/dragon.jpg',
  'images/pen.jpg',
  'images/pet-sweep.jpg',
  'images/scissors.jpg',
  'images/shark.jpg',
  'images/sweep.png',
  'images/tauntaun.jpg',
  'images/unicorn.jpg',
  'images/usb.gif',
  'images/water-can.jpg',
  'images/wine-glass.jpg',
];


// var testGet = document.getElementById('test');
// testGet.width = 100;
// testGet.height = 100;
// testGet.src = arrayOfURL[20];
// console.log(arrayOfURL[7]);


let likesArrStringy;

// globbies
var allPushedFromConstructor = [];
var namesArr = [];

// var foundRelevantLocalStorage = false;


var getter = localStorage.getItem('setting', likesArrStringy);
var parser = JSON.parse(getter);

if(parser){
  // likes = parser;

}

else{
  var likes = [];
}


//for testing
let firstCheckArr = [];
let secondCheckArr = [];
var tester;
var matches = [];
// end of testing

//DOMMY
var getImgDiv = document.getElementById('mainDisplay');
var getFirstImg = document.getElementById('first');
var getSecondImg = document.getElementById('second');
var getThirdImg = document.getElementById('third');
var domImgGetters = [getFirstImg,getSecondImg,getThirdImg];


var Image = function(src){
  this.src = src;
  this.name = src.slice(7, -4);
  this.likes = 0;
  namesArr.push(this.name);
  // int for ease of tracking
  allPushedFromConstructor.push(this);

};

for (var source in arrayOfURL){
  new Image(arrayOfURL[source]);
}


let RandosGrabbed = [];
let HowManyDoIWantToDisplay = 3;
let GoingToBeSplicedImages = allPushedFromConstructor.map(ele => ele);


var randoImgGrabberFun = function(){
  let singleGrab = GoingToBeSplicedImages[Math.floor(Math.random() * GoingToBeSplicedImages.length)];
  RandosGrabbed.push(singleGrab);

  //   if (tester === 0){
  //     firstCheckArr.push(singleGrab);
  //   }
  //   if(tester === 1){
  //     secondCheckArr.push(singleGrab);
  //   }
  let singleGrabIndexVal = GoingToBeSplicedImages.indexOf(singleGrab);
  GoingToBeSplicedImages.splice(singleGrabIndexVal, 1);
};

var shuffleDeck = function(){
  for (var i = 0; i < HowManyDoIWantToDisplay; i ++){
    randoImgGrabberFun();
  }
};
shuffleDeck();

var displayerFun = function (){
  domImgGetters[0].src = RandosGrabbed[0].src;
  domImgGetters[1].src = RandosGrabbed[1].src;
  domImgGetters[2].src = RandosGrabbed[2].src;
};
displayerFun();

for (let get in domImgGetters){
  domImgGetters[get].height = '200';
  domImgGetters[get].width = '200';
}


var testForDuplicates = function(){
  for (let i = 0; i < 2; i ++){
    var tester = (i % 2);
    randoImgGrabberFun(tester);
    randoImgGrabberFun(tester);
    randoImgGrabberFun(tester);
  }
  // example code
  //   testingArr1.forEach(item => {
  //     if (testingArr2.includes(item)) {
  //       matches.push(item);
  //       console.log('found one');
  //     }
  //   });
  firstCheckArr.forEach(item => {if (secondCheckArr.includes(item)){
    matches.push(item);
    console.log('found a match');
  }});
};

//test passes so commenting out the call
// testForDuplicates();

/////////////////////////////////////////////////////////////////////////////////////
//testing
var forTestingPurposes = function(){

  let sourceArr = [];
  let testingArr1 = [];
  let testingArr2 = [];
  let matches = [];

  for (let i = 0; i < 100; i ++){
    sourceArr.push(i);
  }
  for (let j = 0; j < 10; j ++){
    testingArr1.push(Math.floor(Math.random() * sourceArr.length));
    testingArr2.push(Math.floor(Math.random() * sourceArr.length));
  }
  console.log(testingArr1);
  console.log(testingArr2);

  // for(let i = 0; i < testingArr1.length; i ++){
  //   for(let j = 0; j < testingArr2.length; j ++){
  //     if(testingArr1[i] === testingArr2[j]){
  //       matches.push(testingArr1[i]);
  //       console.log('found a match');
  //     }
  //   }
  // }

  //herehere
  testingArr1.forEach(item => {
    if (testingArr2.includes(item)) {
      matches.push(item);
      console.log('found one');
    }
  });

};


//increment all current images appeared
// test if we have clicked 25 times

//ok, the following is hard coded version, just to get up and running i suppose, but really it shouldn't increment an arbitrary image counter, it should increment this.likes.


// var allPushedFromConstructor = [];
// var likes = [];
// var namesArr = [];



var renderChart = function(){
  //chart needs ctx

  //collect all data --- we need labels, dataValues, colors,

  //create a data object that gets passed all our other arrays, based off the example from chartjs



  //call a new chart and pass in ctx and our data.

  var ctx = document.getElementById('canvas').getContext('2d');
  ctx.canvas.height = 300;
  ctx.canvas.width = 300;
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: namesArr,
      datasets: [{
        label: '# of Votes',
        data: likes,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(155, 159, 90, 0.2)',
          'rgba(255, 59, 164, 0.2)',
          'rgba(55, 159, 264, 0.2)',
          'rgba(55, 59, 190, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(155, 159, 90, 0.2)',
          'rgba(255, 59, 164, 0.2)',
          'rgba(55, 159, 264, 0.2)',
          'rgba(55, 59, 190, 0.2)',

        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });
};



var totalCLicks = 0;


var clickHandler = function(event){

  var whatWasClicked = (event.target);

  if(whatWasClicked.id === 'first'){
    RandosGrabbed[0].likes++;

  }
  else if(whatWasClicked.id === 'second'){
    RandosGrabbed[1].likes++;
  }

  else if (whatWasClicked.id === 'third'){
    RandosGrabbed[2].likes++;
  }

  
if (totalCLicks > 5){
  

}

  totalCLicks++;

  if (totalCLicks === 25){

    for (var i = 0; i < allPushedFromConstructor.length; i ++){
      likes.push(allPushedFromConstructor[i].likes);
    }

    getImgDiv.removeEventListener('click', clickHandler);

    likesArrStringy = JSON.stringify(likes);
    var localSetter = localStorage.setItem('setting', likesArrStringy);

    renderChart();




  }



  //resets Randos to an empty slate.
  RandosGrabbed = [];
  //reassigns to initial value

  shuffleDeck();
  displayerFun();
  GoingToBeSplicedImages = allPushedFromConstructor.map(ele => ele);
};



getImgDiv.addEventListener('click', clickHandler);





// shut listener off
//make chart appear


// chart