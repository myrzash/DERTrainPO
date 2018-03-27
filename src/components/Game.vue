<template>
    <div>
        <component class="white" :is="part.interactive.name" :items="part.interactive.items"></component>
        <router-view></router-view>
        <v-layout v-if="nextPart" class="black pa-5" text-xs-right row wrap>
            <v-flex xs3 md2 offset-md1 lg2 offset-lg2 xl1 offset-xl3
                    class="partimage"
                    :style="{background:'url('+`public/images/${nextPart.image}`+')'}">
                <!--<img height="120" width="160" :src="`public/images/${nextPart.image}`" alt=""/>-->
            </v-flex>
            <v-flex xs12 md8 lg6 xl4 class="blue">
                <v-card flat class="transparent">
                    <p class="headline white--text pa-2 mt-2 mr-5 ml-5"> {{nextPart.title}}</p>
                    <v-spacer></v-spacer>
                    <v-btn flat class="white--text" @click.native="$router.push(nextPart.route)">
                        {{$lang.string.nextSection}}
                    </v-btn>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    import Lecture from './games/Lect.vue'
    import Step from './games/Step.vue'
    import Pair from './games/Pair.vue'
    import Test from './games/Test.vue'
    import Selectable from './games/Selectable.vue'

    export default {
        data() {
            return {}
        },
        created() {
            let soundCorrect = new Audio();
            soundCorrect.src = 'public/sound/correct1.mp3';
            let soundWrong = new Audio();
            soundWrong.src = 'public/sound/error1.mp3';

            this.$on('game', (isCorrect) => {
                if (!this.$store.state.soundEffects) return;

                console.log('isCorrect: ', isCorrect);
                if (isCorrect) {
                    soundCorrect.play();
                } else {
                    soundWrong.play();
                }

            });
        },
        components: {
            Lecture, Test, Pair, Step,Selectable
        },
        methods: {
            shuffle: function (a) {
                var j, x, i;
                for (i = a.length; i; i--) {
                    j = Math.floor(Math.random() * i);
                    x = a[i - 1];
                    a[i - 1] = a[j];
                    a[j] = x;
                }
                return a;
            },
        },
        computed: {
            part() {
                return this.$lang.value.parts[this.$route.params.gameId];
            },
            nextPart() {
                let nextGameId = +this.$route.params.gameId + 1;
                let end = nextGameId < this.$lang.value.parts.length;
                if (!end) return null;
                return {
                    title: this.$lang.value.parts[nextGameId].info,
                    image: this.$lang.value.parts[nextGameId].image,
                    route: {
                        name: 'game',
                        params: {gameId: nextGameId}
                    }
                };
            }
        },
    }
</script>

<style lang="stylus">
    .mflex
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

    .partimage
        background-repeat: no-repeat !important;
        background-position center top;
        background-size: cover !important;
        min-height: 150px;

    .container-video
        position: relative;

    .container-video img
        position absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: no-repeat center cover !important;

    .btnPlay
        left: 50%;
        top: 50%;
        margin-left: -28px;
        margin-top: -28px;

    .btnPause
        left: 50%;
        top: 50%;
        margin-left: -28px;
        margin-top: -28px;
        opacity: 0;

    .btnPause:hover
        opacity: 1;

    .btnText
        min-height: 60px;
        font-size: 1.2em;
        height: auto !important;
        text-transform: none;

    .btnText > .btn__content
        white-space: inherit !important;
        line-height: 1.5em;
        flex: auto;
</style>