<script>
    export let name = "Create";
    export let icon = "add";
</script>

<button class="mdc-fab mdc-fab--extended">
    <div class="mdc-fab__ripple"></div>
    <span class="material-icons mdc-fab__icon">{icon}</span>
    <span class="mdc-fab__label">{name}</span>
</button>

<style>
    .mdc-fab {
        position: fixed;
        bottom: 0;
        right: 0;
        margin: 20px;
        background-color: magenta;
    }
</style>