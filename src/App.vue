<template>
  <div id="app">
    <header>
      <h1>JPEG圧縮</h1>
    </header>
    <main>
      <div id="main-content">
        <DragAndDrop />
        <SettingsInput />
        <SettingsModal />
        <ExecutionButtons />
        <ResultInfo />
        <FileInfo />
      </div>
      <div id="side-content">
        <CompareImage />
        <AdjustParameter />
      </div>
    </main>
    <footer></footer>
    <div>
      {{ num }}
    </div>
  </div>
</template>

<script>
import DragAndDrop from "@/components/DragAndDrop.vue";
import SettingsInput from "@/components/SettingsInput.vue";
import SettingsModal from "@/components/SettingsModal.vue";
import ExecutionButtons from "@/components/ExecutionButtons.vue";
import ResultInfo from "@/components/ResultInfo.vue";
import FileInfo from "@/components/FileInfo.vue";
import CompareImage from "@/components/CompareImage.vue";
import AdjustParameter from "@/components/AdjustParameter.vue";

export default {
  name: "App",
  computed: {},
  components: {
    DragAndDrop,
    SettingsInput,
    SettingsModal,
    ExecutionButtons,
    ResultInfo,
    FileInfo,
    CompareImage,
    AdjustParameter,
  },
};
</script>

<style lang="scss">
body {
  background-color: white;
  color: black;

  #app {
    > header {
      > h1 {
        font-size: 1.9rem;
        text-align: center;
        font-weight: bold;
        margin: 10px auto;
      }
    }

    > main {
      width: 900px;
      margin: auto;
      overflow: hidden;

      #main-content {
        width: 500px;
        float: left;
        margin: 0 auto;
        padding: 0 10px;
      }

      #side-content {
        width: 400px;
        height: auto;
        float: right;
      }
    }

    > footer {
      width: 900px;
      margin: auto;
    }
  }
}

@media screen and (max-width: 900px) {
  body #app {
    > main {
      width: 500px;
    }

    > footer {
      width: 500px;
    }
  }
}

@media screen and (max-width: 700px) {
  html {
    touch-action: manipulation;
  }
  body {
    > header {
      > h1 {
        margin-top: 5px;
        margin-bottom: 0px;
      }
    }

    > main {
      width: 100%;
    }

    > footer {
      width: 100%;
    }
  }
}

/*
@media (prefers-color-scheme: dark) {
  body {
    background-color: rgb(24, 26, 28);
    color: rgb(218, 215, 210);

    .form-control {
      color: rgb(202, 198, 190);
      background-color: rgb(24, 26, 28);
      border-color: rgb(60, 60, 60);

      &:focus {
        color: rgb(202, 198, 190);
        background-color: rgb(24, 26, 28);
        border-color: #0063cc;
      }
    }

    // input[range]のダークモード適用
    .custom-range {
      // chrome
      &::-webkit-slider-runnable-track {
        background-color: #272b30;
        color: gray;
      }
      &::-webkit-slider-thumb {
        &:active {
          background-color: #409cff;
        }
      }

      // firefox
      &::-moz-range-track {
        background-color: #272b30;
      }
      &::-moz-range-thumb {
        &:active {
          background-color: #409cff;
        }
      }
    }
    // End of input[range]のダークモード適用

    .btn-info {
      background-color: #1593a6;
    }

    .btn-primary {
      background-color: #0063cc;
    }
  }
}
*/
</style>
