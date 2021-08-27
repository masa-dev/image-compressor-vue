<template>
  <div id="files-info">
    <table class="file-info-table" v-if="seen">
      <tbody>
        <tr v-for="file in fileList" :key="file.id" v-bind:id="'tr_' + file.id">
          <td class="file-name" v-bind:title="file.name">{{ file.name }}</td>
          <td class="file-size">{{ file.size }}</td>
          <td class="compressed-size">{{ file.compressedSize }}</td>
          <td class="progress-info">
            <b-progress>
              <b-progress-bar
                :value="100"
                variant="info"
                striped
                :animated="animate"
                >{{ file.status }}</b-progress-bar
              >
            </b-progress>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animate: true,
    };
  },
  computed: {
    fileList() {
      return this.$store.state.filesInfo.fileList;
    },
    seen() {
      return this.$store.state.filesInfo.seen;
    },
  },
};
</script>

<style lang="scss" scoped>
#files-info {
  table {
    margin-bottom: 15px;

    &.file-info-table {
      width: 100%;
      border: solid 1px rgb(194, 194, 194);
      border-collapse: collapse;
      border-spacing: 0;
      /* #file-name の省略処理に必要 */
      table-layout: fixed;
      border-radius: 5px;

      td {
        padding: 5px 10px;
        border-top: solid 1px rgb(194, 194, 194);

        &.file-name {
          font-size: 14px;
          max-width: 37%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        &.file-size {
          width: 15%;
          font-size: 12px;
          color: rgb(64, 117, 113);
          text-align: center;
        }

        &.compressed-size {
          width: 25%;
          font-size: 12px;
          color: rgb(50, 155, 50);
          text-align: center;
        }

        &.progress-info {
          width: 23%;
          padding: auto 5px;
        }
      }
    }
  }
}
</style>
