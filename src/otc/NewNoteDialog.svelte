<script>
    export let title = "Untitled";
    export let open = false;

    var contentPlaceholder = "Write something here..."
    var content = "";

    var icon = "bookmark";

    var visStyle = "hidden";

    if (open) {
        visStyle = "visible";
    } else {
        visStyle = "hidden";
    }

    function save() {
        if (title == "") {
            title = "Untitled";
        }

        if (content == "") {
            contentPlaceholder = "Please write something here to save."
            return;
        }


    }

    console.log(open)
    document.documentElement.style.setProperty('--dialog-vis', visStyle);
</script>

<div class="dialog_container">
    <div class="dialog" id="dialog">
        <section class="dialog_title" style="display:inline;">
            
            <input bind:value={title} type="text" maxlength="45" id="title-input" name="title" placeholder="{title}">
            <hr>
        </section>
        <section class="dialog_content">
            <textarea bind:value={content} maxlength="4000" class="content" placeholder="{contentPlaceholder}" name="content" id="content-input" cols="30" rows="10"></textarea>
            <hr>
        </section>
        <section class="dialog_buttons" style="display:inline;">
            <div class="left_dialog_buttons">
                <button class="button close" on:click={save}>
                    <p class="material-icons">save</p>
                </button>
                <button class="button icon">
                    <p class="material-icons">add_reaction</p>
                </button>
            </div>
        </section>
    </div>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    @import url('https://fonts.cdnfonts.com/css/google-sans');

    .dialog_buttons {
        float: right;
        height: 7.5%;
        margin-top: 22px;
        width: 100%;
        display: inline;
    }

    .close {
        background-color: transparent;
        border: none;
        color: #000000;
        outline: none;
        margin: 0px;
        padding: 0px;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        float: right;
        margin-left: 470px;
    }

    .button {
        background-color: transparent;
        border: none;
        color: #000000;
        outline: none;
        margin: 0px;
        padding: 0px;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        margin-right: 5px;
    }

    .material-icons {
        margin: 0px!important;
        display: inline;
    }

    .button:hover {
        background-color: #2e2e2e24;
        cursor: pointer;
    }

    .left_dialog_buttons {
        float: left;
    }

    .dialog_container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        visibility: var(--dialog-vis);
    }
    .dialog {
        background-color: rgba(255, 255, 255, 0.764);
        border-radius: 15px;
        box-shadow: 0 0 300px rgba(0, 0, 0, 0.516);
        mix-blend-mode: multiply;
        padding: 20px;
        width: 500px;
        height: 500px;
        mix-blend-mode: multiply;
        visibility: var(--dialog-vis);
    }

    input {
        font-family: 'Poppins', sans-serif;
        margin-top: 0px;
        background: none;
        border: none;
        outline: none;
        width: 100%;
        font-size: 1.5em;
        font-weight: 450;
        display: inline;
    }

    .dialog_content {
        margin-top: 10px;
        height: 80%;
    }

    .content {
        font-family: 'Poppins', sans-serif;
        margin-top: 0px;
        background: none;
        border: none;
        outline: none;
        width: 100%;
        height: 100%;
        resize: none;
        font-size: 1em;
        font-weight: 450;                
    }


    h1 {
        margin-top: 0px;
        margin-bottom: 0px;
    }

    hr {
        border-top: 1px solid #00000020;
        border-bottom: 1px solid #00000000;
        border-left: 0px;
    }
</style>