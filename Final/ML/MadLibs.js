$(document).ready(render());
export function render() {
    let root = $('#root'); 
   
    root.append(`
    <section class="section has-text-centered"> 

    <form autocomplete="off">

        <div class="autocomplete">

        <div class="field has-addons has-addons-centered" >
            <p class="control">
                <input id="name" class="input" type="text" placeholder="Name">
            </p>
        </div>

        <div class="field has-addons has-addons-centered" >
            <p class="control">
                <input id="pos" class="input" type="text" placeholder="Role at UNC">
            </p>
        </div>

        <div class="field has-addons has-addons-centered" >
            <p class="control">
                <input id="ad1" class="input" type="text" placeholder="Adjective">
            </p>
        </div>

        <div class="field has-addons has-addons-centered">
            <p class="control">
            <input id="v1" class="input" type="text" placeholder="Verb">
            </p>
        </div>

        <div class="field has-addons has-addons-centered">
            <p class="control">
            <input id="location" class="input" type="text" placeholder="Location">
            </p>
        </div>

        <div class="field has-addons has-addons-centered" >
            <p class="control">
                <input id="f1" class="input" type="text" placeholder="Food">
            </p>
        </div>

        <div class="field has-addons has-addons-centered" >
            <p class="control">
            <input id="o1" class="input" type="text" placeholder="Object 1">
            </p>
        </div>

        <div class="field has-addons has-addons-centered" >
            <p class="control">
            <input id="o2" class="input" type="text" placeholder="Object 2">
            </p>
        </div>

        <div class="field has-addons has-addons-centered" >
            <p class="control">
            <input id="o3" class="input" type="text" placeholder="Object 3">
            </p>
        </div>
    </div>
    
    </form>

</section>
    `);

    root.append(`<button class="button submitButton is-large"> Generate My Story! </button> `);

    root.on('click', '.submitButton', generateStory); 
}

function generateStory() {
    let root = $('#root');
     
    let name = document.getElementById("name").value;
    let pos = document.getElementById('pos').value;     
    let ad1 = document.getElementById("ad1").value;     
    let v1 = document.getElementById("v1").value; 
    let loc = document.getElementById('location').value; 
    let f1 = document.getElementById("f1").value; 
    let o1 = document.getElementById('o1').value; 
    let o2 = document.getElementById('o2').value;
    let o3 = document.getElementById('o3').value; 

    
    root.empty(); 

    root.append(`
    <p> 
        This is a story about ${name}, who is a ${pos} at UNC Chapel Hill. On one ${ad1} day, they 
        were ${v1} by the Spider on their way to ${loc}. But all of a sudden, ${name} developed a hankering for 
        ${f1}, sparking a new mission to satisfy their craving. Thankfully, ${name} ran into the Campus Whistler and Gary the Pit Stander 
        sharing a meal of ${f1} in front of the ${loc}. 
        <br> 
        "May I join your picnic?" asks ${name}.
        <br> 
        "Surely" replies Gary, but only in exchange for ${o1}, ${o2}, ${o3}.

        <br> <br> 

        Does ${name} have ${o1}, ${o2}, or ${o3} on hand? Will they ever resolve their hankering for ${f1}. The people may never know. 
    </p> 
    `);
}

var names = ["Aaron Smith", "Armando Bacot", "Angela", "Alex", "Alice", "Anthony Harris", "Aubrey", "Bob", "Bill", "Becca", "Chris", "Caleb Love", "Carly", "Drew", "Deirdre"];
names.push("Emily", "Evan", "Emma", "Eric", "Fred", "Fuchs", "Grace", "George", "Garrison Brooks", "Haley", "Hayley", "Harry", "Isabelle", "John", "Jake", "Julia");
names.push("KMP", "Kris Jordan", "KJezus", "Kevin Guskiewcz", "Kate", "Lauren", "Lizzie", "Mike", "Mary", "Margaret", "Meg", "Nancy", "Noelle", "Nick");
names.push("Odette", "Oliver", "Olivia", "Pete", "Peyton", "Quentin", "Ramses", "Rose", "Rob", "RJ Davis");
names.push("Steve", "Sam Howell", "Sarah", "Thomas", "Tara", "Ulysses", "Victoria", "Walter", "Warren", "Wendy", "Yang", "Zoe");

var roles = ["Student", "Professor", "TA", "Athlete", "Parent", "Fan"];

var verbList = ["biking", "chatting", "Dancing", "frolicking", "jogging", "promenading", "hiking", "marching", "roaming", "strutting"];
verbList.push("Running",  "Skipping", "Strolling", "Singing", "talking", "Walking", "Wandering","Yodeling");

var locations = ["Arboretum", "Alpine Bagels", "Brooks CS Building", "Bell Tower", "Carolina Coffee Shop","Campus Y", "Carolina Brewery", "Davis Library", "Ehringhaus", "FedEx"];
locations.push("Genome Sciences", "Hooker Fields", "Kenan Stadium", "Lenoir", "Med Deli", "Might As Well", "Old Well", "Phillips Hall");
locations.push("Que Chula",  "Sup Dawgs", "Spicy 9", "Student Union", "Target","TOPO", "Undergraduate Library", "Wilson Library", "YOPO");

var adjList = ["amazing", "average", "bad", "beautiful", "big", "cool", "crisp", "delightful", "eventful", 'exciting', "fateful", "fantastic" ,"frightening", "good", "great"]; 
adjList.push('hot', 'hard', 'intimidating', 'joyful', 'long', 'mediocre', 'meaningless', 'nice', 'outstanding');
adjList.push('poor', 'pretty', 'quiet', 'rainy', 'superb', 'stellar', 'typical', 'tricky', 'wonderful');

var foodList = ["apples", "bread", "burgers", "bananas", "broccoli", 'berries',"cookies", "corndogs", "chips", "coffee", "candy"];
foodList.push("donuts", "dippin dots", "edamame", "french fries", "grapes", "hotdogs", "ice cream", "jello");
foodList.push("kiwi", "lemons", "muffin", "nuts", "oranges", "oreos", "pie", "pancakes", "quesadilla", "raisins", "soup", "salad");
foodList.push("tacos", "tea", "water" );

var objList = ['apples', 'artichokes', 'berries', 'books', 'broccoli', 'bandaids','cats', 'cookies', 'corndogs', 'chips', 'coffee', 'candy'];
objList.push('d', 'envelopes', 'french fries', 'flowers', 'i', 'jello', 'jokes', 'keys', 'lemons', 'licorice', 'medals');
objList.push('notes', 'necklaces', 'oranges', 'pearls', 'paper', 'quesadillas', 'umbrella', "rocks");

function autocomplete(inp, arr) {
    let focused; 

    inp.addEventListener("input", function(e) {
      let docBody = this.value; 
      let autoList = this.value; 
      let currLetters = this.value; 
      let len = currLetters.length; 
      let i = this.value;
        closeAutoList();
        if (!currLetters) { 
          return false;
        }
        focused = -1; 
        docBody = document.createElement("div");
        docBody.setAttribute("id", this.id + "list"); 
        docBody.setAttribute("class", "items");

        this.parentNode.appendChild(docBody);
        let compValue = currLetters.toUpperCase();
   
        for (i = 0; i < arr.length; i++) {
          if (arr[i].substr(0, len).toUpperCase() == compValue) {
            autoList = document.createElement('div');

            autoList.innerHTML += arr[i];
            autoList.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            autoList.addEventListener("click", function(e) {
              inp.value = this.getElementsByTagName("input")[0].value;
              closeAutoList(); 
            });

            docBody.appendChild(autoList);
          }
        }
    });

    function closeAutoList(elmnt) {
      var x = document.getElementsByClassName("items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
  }



autocomplete(document.getElementById('name'), names);
autocomplete(document.getElementById('v1'), verbList);
autocomplete(document.getElementById('pos'), roles);
autocomplete(document.getElementById('ad1'), adjList);
autocomplete(document.getElementById('f1'), foodList);
autocomplete(document.getElementById('location'), locations);
autocomplete(document.getElementById('o1'), objList); 
autocomplete(document.getElementById('o2'), objList); 
autocomplete(document.getElementById('o3'), objList);
