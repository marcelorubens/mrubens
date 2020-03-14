<template>
  <div class="d-flex justify-between py-3">
    <h2 class="font-huge font-featured">
      Project Title
    </h2>
    <div class="device__frame">
      <div class="device__screen">
        <img src="@/assets/img/Estou-Perdida.gif" alt="">
      </div>
    </div>
  </div>
</template>
<style lang="scss">
$border-width: 2.5rem;
.device {
  &__frame {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 560px;
    background: $medium-blue;
    border-radius: 1rem;
    transform: skewY(30deg) rotateY(40deg);
  }
  &__screen {
    width: calc(100% - #{$border-width});
    height: calc(100% - #{$border-width});
    background: black;
    border-radius: .5rem;
    overflow: hidden;
  }
}
</style>
