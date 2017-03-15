<template>
  <div class="NoteListItem">
    <router-link :to="{ name: 'View Note', params: { id: note.id } }">
      <i class="el-icon-arrow-right"></i>
      <p class="note-title">{{ note.text }}</p>
      <p class="small">{{ parseTimestamp(note.timestamp) }}</p>
    </router-link>
  </div>
</template>

<script>
const moment = require('moment');

export default {
  props: ['note'],
  methods: {
    parseTimestamp(ts) {
      return moment(ts).fromNow();
    },
  },
};
</script>

<style>
.NoteListItem a {
  position: relative;
  display: block;
  padding: 12px 25px;
  cursor: pointer;
  color: #2c3e50;
  text-decoration: none;
}

.NoteListItem a:hover {
  color: #006699;
}

.NoteListItem a i {
  position: absolute;
  top: 22px;
  right: 25px;
  margin: auto 0;
}

.NoteListItem a .note-title {
  width: 90%;
  margin: 0;
  font-size: 14px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.NoteListItem a .small {
  margin: 0;
  margin-top: 3px;
  font-size: 11px;
}
</style>
