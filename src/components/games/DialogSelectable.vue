<template>
    <v-layout row justify-center style="position: relative;">
        <v-dialog v-model="dialog" lazy absolute width="auto" transition="bounceLeft">
            <!-- transition="fade"  transition="zoom"   transition="bounce" -->
            <v-btn :disabled="current && current.isTrue" primary round dark slot="activator"
                   :style="{backgroundImage:current?`url('${current.image}')`:''}"
                   style="height:100px; width:100px; overflow: hidden; background-size: contain">
                <!--<img v-if="current" :src="current.image" alt="">-->
                <v-icon v-if="!current" x-large>touch_app</v-icon>
            </v-btn>
            <v-card>
                <h5 class="primary--text text-xs-center pa-3 bolder">
                    {{$lang.string.choiceOneVariant}}
                </h5>
                <v-layout row wrap align-center justify-center text-xs-center class="pr-3">
                    <v-flex xs12 md6 v-for="item in items" class="pa-3">
                        <v-btn primary @click.native="clickBtn(item)" class="btn-select-image elevation-8"
                               :style="{backgroundImage:`url('${item.image}')`}">
                        </v-btn>
                    </v-flex>
                </v-layout>
                <!--<v-card-actions>-->
                <!--<v-spacer></v-spacer>-->
                <!--<v-btn class="green&#45;&#45;text darken-1" flat="flat" @click.native="dialog = false">Disagree</v-btn>-->
                <!--<v-btn class="green&#45;&#45;text darken-1" flat="flat" @click.native="dialog = false">Agree</v-btn>-->
                <!--</v-card-actions>-->
            </v-card>
        </v-dialog>

        <div v-if="current" style="position: absolute; top:100%;">
            <v-icon v-if="current.isTrue" large class="success--text">
                <!--done-->
                <!--insert_emoticon-->
                <!--control_point-->
                check_box
            </v-icon>
            <v-icon large class="error--text" v-else>
                <!--highlight_off-->
                indeterminate_check_box
            </v-icon>
        </div>
    </v-layout>
</template>

<script>
    export default {
        props: ['items', 'id'],
        data() {
            return {
                dialog: false,
                current: null,
            }
        },
        methods: {
            clickBtn(item) {
                this.current = item;
                this.dialog = false;
                this.$parent.$emit('setResult', item);
            }
        }
    }
</script>

<style lang="stylus">
    .btn-select-image
        width: 100%;
        height: 240px;
        max-height: 240px;
        max-width: 240px;
        background-repeat: no-repeat;
        background-position: 50%;
        background-size: 200px auto;

    /*

        */

</style>