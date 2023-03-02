<main>
    <div class="center">
        <h1>Please log in</h1>
        <a class="withdiscord" href="https://discord.com/api/oauth2/authorize?client_id=1079489475165573170&redirect_uri=https%3A%2F%2Fmemolink.info&response_type=token&scope=identify%20email">
            Discord
        </a>
    </div>
</main>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
    main {
        width: 100%;
        height: 100%;
        background: linear-gradient(0deg, rgba(224,173,221,1) 0%, rgba(255,204,134,1) 100%);
        position: absolute;
        top: 0;
        left: 0;
        margin: 0;
        padding: 0;
    }

    h1 {
        font-family: 'Poppins', sans-serif;
        font-size: 50px;
        color: white;
        margin-top: 10%;
        margin-bottom: 10px;
    }

    .center {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .withdiscord {
        background-color: rgba(0, 0, 0, 0.125);
        border: none;
        color: white;
        padding: 10px 20px;
        font-family: 'Poppins', sans-serif;
        font-size: 20px;
        border-radius: 10px;
        margin-top: 30px;
        cursor: pointer;
        margin-left: 30%;
        text-underline-offset: 9000px;
        transition-property: all;
        transition-duration: 0.5s;
    }

    .withdiscord:hover {
        background-color: rgba(0, 0, 0, 0.25);
        letter-spacing: 0.2px;
    }
</style>