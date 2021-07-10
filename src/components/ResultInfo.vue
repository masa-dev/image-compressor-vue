<template>
  <div id="result-info">
    <p class="result-text" v-if="seen">
      合計で&nbsp;<span class="result-percent"
        >{{ totalSize.renamed }}({{
          differencePercent
        }}%)&nbsp;圧縮しました</span
      ><sup>（{{ quantity.finished }} / {{ quantity.total }}）</sup>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      seen: true,
      totalSize: {
        renamed: "totalSize.renamed",
      },
      differencePercent: "100",
      quantity: {
        finished: "finished",
        total: "total",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
#result-info {
  .result-text {
    padding: 5px;
    text-align: center;
    border: 1px solid rgb(191, 214, 191);
    border-radius: 5px;
    /*background-color: honeydew;*/
    background-color: rgba(225, 255, 225, 0.5);

    > sup {
      color: rgb(31, 128, 83);
    }

    .result-percent {
      color: rgb(56, 153, 56);
    }
  }
}
</style>
