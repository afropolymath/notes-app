<template>
  <div class="CreateNote u-absolute-flex-column">
    <header class="app-header">
      <div class="u-flex-row">
        <a class="back-button" @click="goBack()"><i class="el-icon-arrow-left"></i></a>
        <div class="menu-text u-elastic">{{ id ? 'Editing Note' : 'Create Note' }}</div>
      </div>
    </header>
    <ul class="u-scroller">
      <div class="note-create-form">
        <el-input
          type="textarea"
          autosize
          placeholder="Enter note content"
          v-model="note.text">
        </el-input>
      </div>
    </ul>
    <div class="app-controls">
      <div class="u-flex-row">
        <el-button type="primary" class="u-elastic" @click="saveNote()">Save</el-button>
      </div>
    </div>
  </div>
</template>

<script>
const uuidV4 = require('uuid/v4');

export default {
  props: ['id'],
  data() {
    return {
      note: {},
      noteIndex: -1,
    };
  },
  methods: {
    saveNote() {
      const notes = this.$localStorage.get('notes');
      if (this.note.text !== '') {
        const note = Object.assign({}, this.note, {
          id: this.note.id || uuidV4(),
          timestamp: Date.now(),
        });
        if (this.noteIndex >= 0) {
          notes[this.noteIndex] = note;
        } else {
          notes.push(note);
        }
      } else if (this.noteIndex >= 0) {
        notes.splice(this.noteIndex, 1);
      }
      this.$localStorage.set('notes', notes);
      this.$router.push('/');
    },
    loadNote() {
      const notes = this.$localStorage.get('notes');
      this.noteIndex = notes.findIndex(note => note.id === this.id);
      if (this.noteIndex >= 0) {
        this.note = notes[this.noteIndex];
      } else {
        this.$router.push('/');
      }
    },
    goBack() {
      this.$router.push('/');
    },
  },
  mounted() {
    if (this.id) {
      this.loadNote();
    }
  },
};
</script>

<style>
.note-create-form {
  padding: 20px 16px;
}

.el-textarea__inner {
  border: none;
}
</style>
