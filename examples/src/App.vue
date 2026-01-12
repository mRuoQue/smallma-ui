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
  <MfSwitch v-model="value" label="开关:"></MfSwitch>

  <div>Collapse:</div>
  <MfCollapse>
    <MfCollapseItem name="1" title="标题1">内容1</MfCollapseItem>
    <MfCollapseItem name="2" title="标题2">内容2</MfCollapseItem>
    <MfCollapseItem name="3" title="标题3">内容3333</MfCollapseItem>
    <MfCollapseItem name="4" title="标题4">内容4</MfCollapseItem>
  </MfCollapse>
</template>
<style></style>
