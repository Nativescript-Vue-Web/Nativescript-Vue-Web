<template>
    <div id="myProgress">
        <div ref="myBar" id="myBar">
            {{ progressValue }}
        </div>
    </div>
</template>

<script>
export default {
    name: "Progress",
    props: [
        "value",
        "valueChange"
    ],
    data () {
        return {
            progressValue: 0,
            id: setInterval(this.frame,50)
        };
    },
    // Since the progress bar is made of only css and without input tag, we have to watch the value of the progress bar(innerHTML) until it reaches the given props.
    watch: {
        progressValue: function () {
            this.valueChange(this.progressValue);
        }  
    },
    methods: {
        frame: function () {
            if(this.progressValue >= this.value) {
                return clearInterval(this.id);
            }
            this.progressValue++;
            this.$refs.myBar.style.width = this.progressValue+ "%";
            this.$refs.myBar.innerHTML = this.progressValue * 1 + "%";
        },
    },
};
</script>

<style lang="scss" scoped>
#myProgress {
  width: 100%;
  background-color: #ddd;
}

#myBar {
  width: 10%;
  height: 30px;
  background: linear-gradient(#e66465, #9198e5);
  text-align: center;
  line-height: 30px;
  color: brown;
}
</style>

