<template>
  <div id="settings-modal">
    <b-button variant="link btn-sm" id="open-modal" v-b-modal.detailed-settings
      >詳細設定</b-button
    >

    <b-modal
      id="detailed-settings"
      v-bind:static="true"
      centered
      title="詳細設定"
    >
      <table class="config-list">
        <tr>
          <td class="config-text">ファイル選択時に処理する</td>
          <td class="config-switch">
            <b-form-checkbox
              id="process-when-file-input"
              switch
              size="lg"
            ></b-form-checkbox>
          </td>
        </tr>
        <tr>
          <td class="config-text">ファイルリストを非表示にする</td>
          <td class="config-switch">
            <b-form-checkbox
              id="hide-file-list"
              switch
              size="lg"
            ></b-form-checkbox>
          </td>
        </tr>
        <tr>
          <td class="config-text">起動時に設定履歴を呼び出す</td>
          <td class="config-switch">
            <b-form-checkbox
              id="call-history-on-setup"
              switch
              size="lg"
            ></b-form-checkbox>
          </td>
        </tr>
      </table>
      <template #modal-footer="{ ok, cancel }">
        <b-button variant="secondary" class="float-right" @click="cancel()"
          >キャンセル</b-button
        >
        <b-button
          variant="primary"
          class="float-right"
          @click="
            ok();
            updateSettings();
          "
          >適用</b-button
        >
      </template>
    </b-modal>
  </div>
</template>

<script>
import setSettingInStore from "@/util/setSettingInStore.js";

export default {
  methods: {
    updateSettings() {
      setSettingInStore(
        this.$store,
        "process-when-file-input",
        "processWhenFileInput",
        true
      );
      setSettingInStore(this.$store, "hide-file-list", "hideFileList", true);
      setSettingInStore(
        this.$store,
        "call-history-on-setup",
        "callHistoryOnStartup",
        true
      );
    },
  },
};
</script>

<style lang="scss">
#settings-modal {
  text-align: right;
  margin-bottom: 15px;

  button#open-modal {
    &:focus {
      box-shadow: none;
    }
  }
}

#detailed-settings {
  .modal-body {
    table.config-list {
      width: 100%;
      border-collapse: collapse;
      border-spacing: 0;

      td {
        padding-top: 5px;
        padding-bottom: 5px;
        user-select: none;
        height: 2.5rem;
        text-align: left;

        &.config-switch {
          width: 0;
          text-align: right;

          > .custom-switch {
            width: 0;
          }
        }

        input.toggle {
          float: right;
        }
      }
    }
  }
}
</style>
