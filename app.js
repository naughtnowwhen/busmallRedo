var arrayOfURL = [
  'images/bag.jpg',
  'images/banana.jpg',
  'images/bathroom.jpg',
  'images/boots.jpg',
  'images/.jpg',
  'images/breakfast.jpg',
  'images/bubblegum.jpg',
  'images/chair.jpg',
  'images/cthulu.jpg',
  'images/dog-duck.jpg',
  'images/dragon.jpg',
  'images/pen.jpg',
  'images/pet-sweetp.jpg',
  'images/scissors.jpg',
  'images/shark.jpg',
  'images/sweep.png',
  'images/tauntaun.jpg',
  'images/unicorn.jpg',
  'images/usb.gif',
  'images/water-can.jpg',
  'images/wine-glass.jpg',
];

var allPushedFromConstructor = [];

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

  totalCLicks++;

  var listGetter = document.getElementById('displayList');
  if (totalCLicks === 25){
    getImgDiv.removeEventListener('click', clickHandler);

    for (var i = 0; i < allPushedFromConstructor.length; i ++){
      var nameLi = document.createElement('li');
      nameLi.textContent = `${allPushedFromConstructor[i].name} received this many clicks ${allPushedFromConstructor[i].likes}`;
      console.log(nameLi);
      listGetter.appendChild(nameLi);
    }
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


// charts

var renderChart = function(){
//chart needs ctx

  //collect all data --- we need labels, dataValues, colors,

  //create a data object that gets passed all our other arrays, based off the example from chartjs



  //call a new chart and pass in ctx and our data.

};


var ctx = document.getElementById('myCanvas').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
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