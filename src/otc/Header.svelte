<script>
  export let name = "";
  let greetings = [
    "Hey, {name}!",
    "Hi, {name}!",
    "Hello, {name}!",
    "Hiya, {name}!",
    "Hey there, {name}!",
    "Howdy, {name}!",
    "How's it going, {name}?",
    "What's up, {name}?",
    "What's new, {name}?",
    "What's happening, {name}?",
    "What's good, {name}?",
  ]

  let timeSensitiveGreetings = [
    "Good morning, {name}!",
    "Good afternoon, {name}!",
    "Good evening, {name}!",
    "Good night, {name}!",
  ]

    let date = new Date();
    let hour = date.getHours();

    let greeting = greetings[Math.floor(Math.random() * greetings.length)].replace("{name}", name);
    
   if (Math.random() < 0.5) {
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

   greeting = greeting.replace("{name}", name);
</script>

<!-- svelte-ignore a11y-img-redundant-alt -->
<div class="userspecific">
    <h1>{greeting}</h1>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

  .userspecific {
    display: inline;
  }

  h1 {
    font-family: "Poppins", sans-serif;
    display: inline;
    color: white;
    font-size: 60px;
    vertical-align: middle;

  }
</style>
