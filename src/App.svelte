<script>
  import Header from "./otc/Header.svelte";
  import Note from "./lib/Note.svelte";

  let notes = []
  let morePages = true
  let page = 0
  let maxPage = 0

  // TODO grab notes from backend
    function getNotes(pageNumber) {
        console.log(pageNumber)
        notes = [
            {
                name: "d.jar docs",
                icon: "bookmark",
                id: "note-1"
            },
            {
                name: "memolink",
                icon: "bookmark",
                id: "note-1"
            },
            {
                name: "i cant think of placeholder names",
                icon: "bookmark",
                id: "note-1"
            },
            {
                name: "i cant think of placeholder names",
                icon: "bookmark",
                id: "note-1"
            },
            {
                name: "i cant think of placeholder names",
                icon: "bookmark",
                id: "note-1"
            },
            {
                name: "d.jar docs",
                icon: "bookmark",
                id: "note-1"
            },
            {
                name: "memolink",
                icon: "bookmark",
                id: "note-1"
            },
            {
                name: "i cant think of placeholder names",
                icon: "bookmark",
                id: "note-1"
            },
            {
                name: "i cant think of placeholder names",
                icon: "bookmark",
                id: "note-1"
            },
            {
                name: "i cant think of placeholder names",
                icon: "bookmark",
                id: "note-1"
            }
        ]

        page = 1;
        morePages = true;
        maxPage = 4;
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function loadNotes() {
        await sleep(2000);
        // check if there is a page number in the url
        const urlParams = new URLSearchParams(window.location.search);
        const loadPage = urlParams.get('page');

        getNotes(loadPage == null ? 1 : loadPage);
        // @ts-ignore
        page = loadPage == null ? 1 : loadPage;
    }

    function goRight() {
        let newpage = page + 1; 
        if (newpage > maxPage) {
            newpage = maxPage;
        }
        notes = []
        getNotes(newpage);
        page = newpage;
        
        history.pushState(null, null, `?page=${page}`);
    }

    function goLeft() {
        let newpage = page - 1; 
        if (newpage < 1) {
            newpage = 1;
        }
        notes = []
        getNotes(newpage);
        page = newpage;

        history.pushState(null, null, `?page=${page}`);
    }

    loadNotes();

</script>

<div class="fullpage">
<main>
    <Header name = "Seailz" />
    <div class="notes">
        <!-- When not loaded yet, (or the notes array is empty), then put a loading icon -->

        {#if notes.length == 0}
                <div class="note_list_el">
                    <!-- Center under middle of header -->
                    <div class="headercenter">
                        <div class="lds-ripple"><div></div><div></div></div>
                    </div>

                    <style>
                        .headercenter {
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                        }
                    </style>
                </div>
        {/if}

        {#each notes as note}
            <div class="note_list_el">
                <Note name="{note.name}" />
            </div>
        {/each}

        {#if morePages && notes.length > 0}
        <div class="page_switcher no_select">
            <button on:click={goLeft} class="ps_arrow ps_arrow_left">
                <p class="material-icons ps_icon">chevron_left</p>
            </button>
            <p class="page_status no_select">{page} / {maxPage}</p>
            <button on:click={goRight}  class="ps_arrow ps_arrow_right">
                <p class="material-icons ps_icon">chevron_right</p>
            </button>
        </div>
        {/if}
    </div>
</main>
</div>

<style>

.no_select {
    -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
}

.ps_arrow {
    background: none;
    border: none;
    color: white;
    font-size: 2em;
    cursor: pointer;
    outline: none;
    height: 10px;
    margin: 0px!important;
    display: inline;
    position: relative;
    top: 5px;
}

.ps_icon {
    margin-bottom: 0px;
}

.page_status {
    color: white;
    font-size: 1em;
    font-family: 'Poppins', sans-serif;
    display: inline;
    margin-top: 0px;
}



.lds-ripple {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid #fff;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  4.9% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  5% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}

    main {
        margin-top: 8%;
        width: 70%;
        margin: 8% 12%;
    }

    /* note_list_el selector excluding the first element of each line */
    .note_list_el:not(:first-child) {
        margin-top: 10px;
    }

    .note_list_el {
        display: inline-block;
        margin-right: 10px;
    }

    .notes {
        /*width: 70%;*/
    }

    .fullpage {
        width: 100%;
        height: 100%;
        background: linear-gradient(0deg, rgba(224,173,221,1) 0%, rgba(255,204,134,1) 100%);
        position: absolute;
        top: 0;
        left: 0;
        margin: 0;
        padding: 0;
    }
</style>