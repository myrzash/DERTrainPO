<template>
    <div>
        <v-layout v-if="excesses" row justify-center wrap text-xs-center>
            <v-flex xs12 md2 v-for="item in excesses">
                <v-btn class="pa-3 btnText" large style="width:100%; min-height:100px; max-height:100px;"
                       :primary="item==selected"
                       :disabled="checked && item!=selected"
                       :error="item==selected && checked==true"
                       :success="item==selected && item.isTrue && checked==true"
                       @click.native="clickBtnExcess(item)"
                >

                    <!--:error="checked==true"-->
                    {{item.data}}
                    <!-- @click.native="clickBtn(variant)"
                       :disabled="fulled && !basket.includes(variant)"
                       :class="[basket.includes(variant)?[ checked ?[ item.variants[0].includes(variant)?'success':'error']:'primary']:'']"-->
                    <!--<div class="image" v-bind:style="{background: `url(${variant})`}"></div>-->
                </v-btn>
            </v-flex>
            <v-flex class="ml-3 pa-0" xs12>
                <!--<v-slide-x-reverse-transition>-->
                <!--<v-alert v-if="checked && selected.isTrue" success value="true" class="headline">-->
                <!--{{$lang.string.correct}}-->
                <!--</v-alert>-->
                <!--<v-alert v-else-if="checked" error value="true" class="headline">-->
                <!--{{$lang.string.wrong}}-->
                <!--</v-alert>-->
                <!--</v-slide-x-reverse-transition>-->
                <v-btn :disabled="!selected || checked" @click.native="check()" large primary>
                    {{$lang.string.check}}
                </v-btn>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    export default {
        props: ['data'],
        data() {
            return {
                selected: null,
                checked: false,
                excesses: [],
            }
        },
        created() {
            this.data.forEach((item, index) => {
                this.excesses.push({
                    isTrue: index == 0,
                    data: item
                });
            });
            this.shuffle(this.excesses);

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
            clickBtnExcess(item) {
                if (this.checked) return;
                this.selected = (item == this.selected) ? null : item;
            },
            check() {
                this.checked = true;
                this.$parent.$emit('setResult', this.selected.isTrue);
            }
        }
    }
</script>

<!--<style lang="stylus"></style>-->