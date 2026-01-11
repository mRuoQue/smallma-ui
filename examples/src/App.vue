<script setup></script>

<template>
  <div>Button:</div>
  <MfButton type="primary">primary </MfButton>
  <MfButton autofocus type="primary">primary autofocus </MfButton>

  <MfButton plain type="primary">primary plain </MfButton>

  <MfButton type="success">success </MfButton>
  <MfButton type="danger">danger</MfButton>
  <MfButton round type="info">danger round</MfButton>

  <div>Switch:</div>
  <MfSwitch v-model="value"></MfSwitch>
</template>
<style></style>
