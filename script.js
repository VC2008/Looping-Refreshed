// Demo data array we will use in all examples
const foods = ['Pizza', 'Tacos', 'Ice Cream', 'Burgers', 'Pasta']

// helper function: will display whatever HTML/text we pass into the #out div
function render (html) {
  document.getElementById('out').innerHTML = html
}


function listFoods () {
 let output = ''
 for (const food of foods){
  output += `<p>${food}</p>` 
 }



  render(output)
}


function numberedFoods () {
  let output = `<ol class-"list-group list-group-numbered">`

  for(let i=0; i < foods.length; i++){
    output += `<li class="list-group-item">${foods[i]}</li>`
  }


  output += `</ol>`

  render(output)
}


function filterFoods () {
  const letter = prompt('choose a letter to filter by:')
  if (!letter){
    render(`<p class="text-muted m-0">Enter a REAL number idiot`)
    return
  }

  const lower = letter.toLowerCase()
  const matches = foods.filter(f => f.toLowerCase().startsWith(lower))


  if(matches.length = 0){
    render(
      `<p class="m-0> No foods found starting with '<strong>${letter}</strong>'</p>`
    )
    return
  }

  const list = matches.map(item => `<li class="list-group-item">${item}</li>`).join()
  render(`<ol class="list-group">${list}</ol>`)
}

/* 
  4) forEachFoods()
     - Use foods.forEach()
     - Output each food as a Bootstrap card
     - Cards should be placed in a centered row
*/
function forEachFoods () {
  const array = [foods];
  array.forEach((foods) =>

    render(
      `  <div class="row">
        <div class=" col-lg-3 col-md-6 col-sm-12">
          <div class="card card-block text-xs-center">
            <h4 class="card-title"><a href="https://www.njit.edu/academics/degrees#/" class="btn btn-danger btn-block">Learn more</a></h4>
            <p class="card-text">“.”</p>
          </div>
        </div>
        <div class=" col-lg-3 col-md-6 col-sm-12">
          <div class="card card-block text-xs-center">
            <h4 class="card-title"><a href="https://www.njit.edu/academics/degrees#/" class="btn btn-danger btn-block">Learn more</a></h4>
            <p class="card-text">“.”</p>
          </div>
        </div>
        <div class=" col-lg-3 col-md-6 col-sm-12">
          <div class="card card-block text-xs-center">
            <h4 class="card-title"><a href="https://www.njit.edu/academics/degrees#/" class="btn btn-danger btn-block">Learn more</a></h4>
            <p class="card-text">“."</p>
          </div>
        </div>
        <div class=" col-lg-3 col-md-6 col-sm-12">
          <div class="card card-block text-xs-center">
            <h4 class="card-title"><a href="https://www.njit.edu/academics/degrees#/" class="btn btn-danger btn-block">Learn more</a></h4>
            <p class="card-text">“.”</p>
          </div>
        </div>
      </div>
      </div>`
    )
}

// ---- Event listeners (buttons) ----
document.getElementById('btnList').addEventListener('click', listFoods)
document.getElementById('btnNums').addEventListener('click', numberedFoods)
document.getElementById('btnFilter').addEventListener('click', filterFoods)
document.getElementById('btnForEach').addEventListener('click', forEachFoods)

//  ---------------STUDENT WORK SECTION--------------

/* 
  Task 1 — Uppercase List
  -----------------------
  - Use .map() to create a new array with all foods in uppercase
  - Display the results as an unordered list (<ul>)
*/
function uppercaseList () {
 let output = ''
 for (const food of foods){
  output += `<p>${food}</p>` 
 }


/* 
  Task 2 — Reverse List
  ---------------------
  - Show the foods array in reverse order
  - You may use a backwards loop OR the built-in .reverse()
*/
function reverseList () {
  // TODO: Write your code here
}

/* 
  Task 3 — Random Food Picker
  ---------------------------
  - Use Math.random to pick a random food from the array
  - Display it in a Bootstrap card with a heading like "Today's Pick"
*/
function randomFoodPicker () {
  // TODO: Write your code here
}

/* 
  Task 4 — Word Lengths
  ---------------------
  - Loop through each food in the array
  - Count the number of characters in each one
  - Display results in the format: Food — X letters
*/
function wordLengths () {
  // TODO: Write your code here
}

// ---- Event listeners for the new buttons ----
// (Make sure to add matching buttons in index.html)
document.getElementById('btnUppercase').addEventListener('click', uppercaseList)
document.getElementById('btnReverse').addEventListener('click', reverseList)
document.getElementById('btnRandom').addEventListener('click', randomFoodPicker)
document.getElementById('btnLengths').addEventListener('click', wordLengths)
