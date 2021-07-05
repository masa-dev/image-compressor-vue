<template>
  <div>
    <header>
      <h1>JPEG圧縮</h1>
    </header>
    <main>
      <div class="main-content">
        <DragAndDrop />
        <SettingInput />
      </div>
      <div class="side-content"></div>
    </main>
    <footer></footer>
    <!--
  <HelloWorld msg="Welcome to Your Vue.js App" />
  -->
    <div>
      {{ num }}
    </div>
  </div>
</template>

<script>
import DragAndDrop from "./components/DragAndDrop.vue";
import SettingInput from "./components/SettingInput.vue";

export default {
  name: "App",
  computed: {
    num() {
      return this.$store.getters.getFilesLength;
      //return this.$store.state.num;
    },
  },
  components: {
    DragAndDrop,
    SettingInput,
  },
};
</script>

<style lang="scss">
body {
  background-color: white;
  color: black;

  header {
    > h1 {
      font-size: 1.9rem;
      text-align: center;
      font-weight: bold;
      margin: 10px auto;
    }
  }

  main {
    width: 900px;
    margin: auto;
    overflow: hidden;
  }

  footer {
    width: 900px;
    margin: auto;
  }
}

@media screen and (max-width: 900px) {
  body {
    main {
      width: 500px;
    }

    footer {
      width: 500px;
    }
  }
}

@media screen and (max-width: 700px) {
  html {
    touch-action: manipulation;
  }
  body {
    header {
      > h1 {
        margin-top: 5px;
        margin-bottom: 0px;
      }
    }

    main {
      width: 100%;
    }

    footer {
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
