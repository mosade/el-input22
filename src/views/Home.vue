<template>
  <div style="padding: 40px;">
    <h1>Home</h1>

    <p>Default (maxlength=4000):</p>
    <el-input2 v-model="v1" placeholder="Default 4000 limit" style="width: 300px;" show-word-limit />

    <p>Override (maxlength=10):</p>
    <el-input2 v-model="v2" :maxlength="10" placeholder="Max 10 chars" style="width: 300px;" show-word-limit />

    <p>Disabled maxlength (null):</p>
    <el-input2 v-model="v3" :maxlength="null" placeholder="No limit" style="width: 300px;" />

    <p>Textarea (default maxlength=4000):</p>
    <el-input2 v-model="v4" type="textarea" placeholder="Textarea, 4000 limit" style="width: 300px;" show-word-limit />

    <el-button type="primary" style="margin-top: 10px;" @click="submitted = true">Submit</el-button>
    <p v-if="submitted">v1={{ v1 }} | v2={{ v2 }} | v3={{ v3 }}</p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return { v1: '', v2: '', v3: '', v4: '', submitted: false }
  }
}
</script>
