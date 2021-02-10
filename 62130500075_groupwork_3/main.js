const app = new Vue({
    el: '#app',
    data() {
        return {
            pics: [
                { url: './images/1.png', title: 'Macbook Pro Intel', like: false },
                { url: './images/2.png', title: 'Macbook Air M1', like: false },
                { url: './images/3.png', title: 'Macbook Pro M1', like: false }
            ]
        }
    },
    methods: {
        likepics(index) {
            this.pics[index].like = !this.pics[index].like
        },
        calculated(){
            return this.pics.filter( p => p.like ).length
        }
    }
});

// Vue.createApp(app).mount('#app')