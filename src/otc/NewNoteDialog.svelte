<script>
    export let title = "Untitled";
    export let open = false;

    var visStyle = "hidden";

    if (open) {
        visStyle = "visible";
    } else {
        visStyle = "hidden";
    }

    console.log(open)
    document.documentElement.style.setProperty('--dialog-vis', visStyle);
</script>

<div class="dialog_container">
    <div class="dialog" id="dialog">
        <section class="dialog_title">
            <input type="text" maxlength="100" id="title-input" name="title" value="{title}">
            <hr>
        </section>
    </div>
</div>

<style>

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
        font-weight: 800;
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