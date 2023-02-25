<script>
  import Header from "./otc/Header.svelte";
  import Note from "./lib/Note.svelte";
  import Fab from "./lib/Fab.svelte";

  let notes = []

  // TODO grab notes from backend
    function getNotes() {
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
            }
        ]
    }

    getNotes()

</script>

<main>
    <Header name = "Seailz" />
    <div class="notes">
        {#each notes as note}
            <div class="note_list_el">
                <Note name="{note.name}" />
            </div>
        {/each}
    </div>
    <Fab name="Create" icon="add" />
</main>

<style>
    main {
        margin-top: 8%;
        width: 90%;
        margin: 8% 5%;
    }

    /* note_list_el selector excluding the first element */
    .notes > :not(:first-child) {
        display: inline-block;
        margin: 10px 10px;
    }

    .note_list_el {
        display: inline-block;
        margin-right: 10px;
    }

    .notes {
        width: 70%;
    }
</style>