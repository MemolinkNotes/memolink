<script>
  export let name = "";
  export let img = "https://picsum.photos/1000/1000"
  export let func = () => { };
  let greetings = [
    "Hey, {name}",
    "Hi, {name}",
    "Hello, {name}",
    "Hiya, {name}",
    "Hey there, {name}",
    "Howdy, {name}",
    "How's it going, {name}?",
    "What's up, {name}?",
    "What's new, {name}?",
    "What's happening, {name}?",
    "What's good, {name}?",
  ]

  let timeSensitiveGreetings = [
    "Good morning, {name}",
    "Afternoon, {name}",
    "Good evening, {name}",
    "Good night, {name}",
  ]

    let date = new Date();
    let hour = date.getHours();

    let greeting = "Hi, " + name;
    
    let doCustomGreeting = Math.random() < 0.5;
    if (doCustomGreeting) {
    greeting = greetings[Math.floor(Math.random() * greetings.length)].replace("{name}", name);
    
   if (Math.random() < 0.8) {
    console.log("Time sensitive greeting")
    if (hour < 12) {
        greetings = timeSensitiveGreetings.slice(0, 1);
    } else if (hour < 18) {
        greetings = timeSensitiveGreetings.slice(1, 2);
    } else if (hour < 24) {
        greetings = timeSensitiveGreetings.slice(2, 3);
    } else {
        greetings = timeSensitiveGreetings.slice(3, 4);
    }
    greeting = greetings[0]
   }
  }

   greeting = greeting.replace("{name}", name);

   var isNewNoteDialogOpen = false;
   function newNote() {
    // make button flash
    let button = document.getElementsByClassName("button")[0];
    // @ts-ignore
    button.style.backgroundColor = "rgba(0,0,0,.5)";
    setTimeout(() => {
      // @ts-ignore
      button.style.backgroundColor = "rgba(0,0,0,.3)";
    }, 100);

    // open dialog
    func();
   }
</script>

<!-- svelte-ignore a11y-img-redundant-alt -->
<div class="container">
  <div class="userspecific">
    <h1>{greeting}</h1>
</div>

<div class="left_alligned">
    <button class="new_note button" on:click={newNote}>
      <p class="material-icons new_note_icon button_icon">add</p>
    </button>
    <img class="pfp" src="{img}" alt="User Profile Pic">
</div>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

  .pfp {
    width: 80px;
    height: 80px;
    border-radius: 100%;
    margin-left: 30px;
    box-shadow: rgba(0, 0, 0, 0.11) 0px 0px 10px;
    transform-origin: center center 0 0 0 0;
    transition-property: all;
    transition-duration: 500ms;
  }

  .pfp:hover {
    background-color: rgba(0,0,0,.5);
    cursor: pointer;
    transform: scale(1.1);
    box-shadow: rgba(0, 0, 0, 0.405) 0px 0px 90px;
  }

  .new_note {
    margin-top: 10px;
  }

  .left_alligned {
    display: flex;
    float: right;
  }

  .button:hover {
    background-color: rgba(0,0,0,.5);
    cursor: pointer;
    transform: scale(1.1);
    box-shadow: rgba(0, 0, 0, 0.405) 0px 0px 90px;
  }

  @media only screen and (max-width: 800px) {
    .left_alligned {
    }


    .container {
      display: block;
    }
  }

  .userspecific {
    display: inline;
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 8%;
    width: 70%;
    margin: 8% 12%;
  }

  h1 {
    font-family: "Poppins", sans-serif;
    display: inline;
    color: white;
    font-size: 50px;
    vertical-align: middle;
    /* set anchor point to center of element for transition */
    transform-origin: center center 0 0 0 0;
    transition-property: all;
    transition-duration: 500ms;
    text-shadow: 0px 0px 70px rgba(0, 0, 0, 0.352);
  }

  h1:hover {
    /* on hover, change font size */
    font-size: 50.2px;
    text-shadow: 0px 0px 70px rgba(0, 0, 0, 0.932);
    letter-spacing: .5px;
  }

  .button_icon {
    margin: 0px;
    margin-left: 1px;
    margin-top: 5px;
  }

  .button {
    display: inline;
    background-color: rgba(0,0,0,.3);
    color: white;
    border-radius: 50%;
    border: none;
    height: 50px;
    width: 50px;
    margin-left: 20px;
    margin-top: 15px;
    transition-property: all;
    transition-duration: 500ms;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
    box-shadow: rgba(0, 0, 0, 0.11) 0px 0px 10px;
  }
</style>
