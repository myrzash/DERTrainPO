<template>
    <div>
        <v-layout row wrap text-xs-center class="pt-5 pr-2 pl-2">
            <v-flex xs12 md6 offset-md3 class="mb-3">
                <h3>{{items.title}}</h3>
            </v-flex>
            <v-flex xs12 md4 v-for="(part,partId) in items.parts" class="mb-5">
                <h4 class="bolder mb-5"> {{part.title}}</h4>

                <div v-for="(tile,index) in part.tiles" class="mt-5">
                    <h4>{{tile.title}}</h4>
                    <div style="display:flex; flex-direction: row; justify-content: center; align-items: center;">


                        <dialog-selectable class="mr-2 ml-2" v-for="program in tile.programs" :id="partId+''+index"
                                           :items="getVariants(partId,index,program)">
                        </dialog-selectable>
                        <!--<div v-for="program in tile.programs">-->
                        <!--<img v-for="img in getVariants(partId,index,program)" :src="img.image" alt="">-->
                        <!--&lt;!&ndash;{{getVariants(partId,index,program)}}&ndash;&gt;-->
                        <!--{{partId + '' + index}}-->
                        <!--</div>-->

                    </div>
                </div>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    import DialogSelectable from './DialogSelectable.vue';

    export default {
        props: ['items'],
        data() {
            return {
                attempt: 0,
                correct: 0,
            }
        },
        created() {
            this.attempt = 0;
            this.correct = 0;
            this.$on('setResult', (item) => {
                this.attempt++;
                if (item.isTrue) this.correct++;

                setTimeout(() => {
                    if (this.maxProgress == this.correct) {
                        this.$router.push({
                            name: 'res',
                            params: {result: this.correct / this.attempt * 100, resId: this.$route.params.gameId}
                        });
                    }
                }, 800);
            });
        },
        components: {
            DialogSelectable,
        },
        computed: {
            programs() {
                let array = new Array();
                this.items.parts.forEach((part, index) => {
                    for (let id in part.tiles) {
                        let {programs} = part.tiles[id];
                        if (programs && programs.length > 0) array.push({
                            id: index + '' + id,
                            programs: programs
                        });
                    }

                });
                return array;
            },
            maxProgress() {
                let count = 0;
                this.items.parts.forEach((part) => {
                    for (let item of part.tiles) {
                        let {programs} = item;
                        if (programs)
                            count += programs.length;
                    }
                });
                return count;
            }
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
            getVariants(partId, tileId, program) {
                let variants = new Array();
                variants.push({isTrue: true, image: program});
                let shuffle = this.programs.slice();
                shuffle = this.shuffle(shuffle);

                outer: for (let item of shuffle) {

                    if (variants.length >= 4) break;
                    let {id} = item;
                    if (id != partId + '' + tileId) {
                        let {programs} = item;
                        for (let prog of programs) {
                            if (variants.length >= 4) break outer;
                            variants.push({isTrue: false, image: prog});
                        }
                    }
                }
                return this.shuffle(variants);
            }
        }
    }
</script>