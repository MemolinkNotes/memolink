<script>
    export let name = "d.jar docs"
    export let sub = "Note"
    export let icon = "bookmark"
    export let id = "note-1"
    export let favourited = false

    let displayName = name
    if (name.length > 19) {
        displayName = name.substring(0, 19) + "..."
    }

    function favourite() {
        console.log("Toggled favourite for " + id)
        favourited = !favourited

        // TODO Send request to backend
    }
</script>

<div class="note">
    <button class="star" on:click={favourite} style="padding: 0px; margin: 0px;">
        <p class='material-icons' style="padding: 0px; margin: 0px;">{favourited ? "star" : "star_border"}</p>
    </button>

    <div class="icon_container">
        <div class="icon_internal">
            <p class='icon_text material-icons'>{icon}</p>
        </div>
    </div>

    <div class="note_content">
        <h1 class="note_title" aria-label="{name}">{displayName}</h1>
        <p class="note_sub">{sub}</p>
    </div>
</div>

<style>
      @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
    .note {
        display: inline-block;
        height: 150px;
        width: 250px;
        background-color: white;
        border-radius: 15px;
        transition-property: all;
        transition-duration: 500ms;
        -webkit-user-select: none; /* Safari */
        -ms-user-select: none; /* IE 10 and IE 11 */
        user-select: none; /* Standard syntax */
        box-shadow: rgba(0, 0, 0, 0.11) 0px 0px 10px;
    }

    .note:hover .star {
        visibility: visible;
        opacity: 100%;
    }

    .note:hover {
        background-color: rgb(245, 245, 245);
        transform: scale(1.03);
        cursor: pointer;
        border-radius: 18px;
        box-shadow: rgba(0, 0, 0, 0.269) 0px 0px 50px;
    }

    .icon_container {
        background-color: rgb(235, 235, 235);
        width: 50px;
        height: 50px;
        border-radius: 15px;
        margin: 15px;
    }

    .icon_text {
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: rgb(154, 154, 154);
    }

    .note_content {
        font-family: 'Poppins', sans-serif;
        width: 100%;
        height: 50px;
        margin-left: 15px;
    }

    .note_title {
        font-size: 20px;
        width: 100%;
        color: rgb(154, 154, 154);
        margin-bottom: 0px;
    }

    .note_sub {
        font-size: 15px;
        width: 100%;
        color: rgb(154, 154, 154);
        opacity: 90%;
        margin-top: 0px;
    }

    .star {
        background-color: transparent;
        border: none;
        outline: none;
        margin: 0px;        
        top: 10px;
        visibility: hidden;
        opacity: 0%;
        transition-property: all;
        transition-duration: 500ms;
        color: rgb(154, 154, 154);
        position: absolute;
        left: 85%;
        /* add drop shadow */
    }

</style>