<template>
    <div class="progress">
        <div ref="myBar" class="progressBar"></div>
    </div>
</template>

<script>
export default {
    name: 'Progress',
    props: {
        value: {
            type: Number,
            default: 0
        },
        maxValue: {
            type: Number,
            default: 100
        }
    },
    mounted(){
        setTimeout(this.render, 10);
    },
    computed: {
        progressValue: function(){
            return (this.value <= this.maxValue) ? Math.floor((this.value / this.maxValue) * 100) : 100;
        }
    },
    // Since the progress bar is made of only css and without input tag, we have to watch the value of the progress bar(innerHTML) until it reaches the given props.
    watch: {
        value: function () {
            this.render();
            this.$emit('valueChange', this.value);
        },
        maxValue: function () {
            this.render();
        },
    },
    methods: {
        render: function () {
            this.$refs.myBar.style.width = this.progressValue + '%';
        }
    },
};
</script>

<style lang="scss" scoped>
.progress {
  width: 100%;
  background-color: #ddd;
}

.progressBar {
  width: 0%;
  height: 20px;
  background: linear-gradient(#e66465, #9198e5);
  transition: all 1s ease;
  color: brown;
}
</style>

