<template>
  <div class="NoteList u-absolute-flex-column">
    <header class="app-header">All Notes ({{ notesCount }})</header>
    <ul class="u-scroller">
      <li v-for="note in notes">
        <NoteListItem v-bind:note="note" />
      </li>
    </ul>
    <div class="app-controls">
      <div class="u-flex-row">
        <el-button type="primary" class="u-elastic" @click="createNote()">Add Note</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import NoteListItem from '@/components/NoteListItem';

export default {
  data() {
    return {
      notes: [],
    };
  },
  methods: {
    loadNotes() {
      this.notes = this.$localStorage.get('notes');
    },
    createNote() {
      this.$router.push('new');
    },
  },
  mounted() {
    this.loadNotes();
  },
  computed: {
    notesCount() {
      return this.notes.length;
    },
  },
  components: { NoteListItem },
};
</script>

<style>
.NoteList ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

.NoteList ul li {
  border-bottom: solid 1px #EFEFEF;
}
</style>
