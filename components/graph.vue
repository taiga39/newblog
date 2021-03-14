<template>
    <div>
        <h2 class="graph-h">Goal</h2>
        <div class="graph-row">
            <div class="graph-content">
                <p class="graph-p">Weight</p>
                <p class="graph-t">65 → 75</p>
                <div class="graph" v-on:mouseover="mouseover(1)" v-on:mouseleave="mouseleave(1)">
                    <div class="graph-bar" v-bind:style="{height:hweight}"></div>
                    <div class="target"><p class="target-moji" id="weightmoji">{{weight}}</p></div>
                    <span class="unit" id="weightunit">{{kgunit}}</span>
                </div>
            </div>
            <div class="graph-content">
                <p class="graph-p">BenchPress</p>
                <p class="graph-t">40 → 80</p>

                <div class="graph" v-on:mouseover="mouseover(2)" v-on:mouseleave="mouseleave(2)">
                    <div class="graph-bar" v-bind:style="{height:hbp}"></div>
                    <div class="target"><p class="target-moji">{{bp}}</p></div>
                    <span class="unit">{{bpunit}}</span>
                </div>
            </div>
            <div class="graph-content" style="display:none;">
                <p class="graph-p">LearningTime</p>
                <p class="graph-t">0 → 1500</p>
                <div class="graph" v-on:mouseover="mouseover(3)" v-on:mouseleave="mouseleave(3)">
                    <div class="graph-bar" v-bind:style="{height:hlt}"></div>
                    <div class="target"><p class="target-moji">{{lt}}</p></div>
                    <span class="unit">{{ltunit}}</span>
                </div>
            </div>
            <div class="graph-content" style="display:none;">
                <p class="graph-p">TOEFL iBT</p>
                <p class="graph-t">30 → 100</p>
                <div class="graph" v-on:mouseover="mouseover(4)" v-on:mouseleave="mouseleave(4)">
                    <div class="graph-bar" v-bind:style="{height:htoefl}"></div>
                    <div class="target"><p class="target-moji">{{toefl}}</p></div>
                    <span class="unit">{{ibtunit}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.graph-content{
    margin-bottom:20px;
}
.graph-h{
    text-align:center;
    padding-bottom:0.5rem;
    font-size:3em;
    font-weight:bold;
}
.graph-row{
    display:flex;
    flex-wrap:wrap;
    justify-content: space-around;
}
.graph-p{
    text-align: center;
    margin:0;
    font-size:25px;
}
.graph-t{
    text-align: center;
    margin:0;
    font-size:20px;
}
.graph {
    margin:5px 0 20px;
    width: 200px;
    height: 200px;
    min-width:200px;
    border: solid 7px black;
    border-radius: 8px;
    padding: 6px;
    background: white;
    position:relative;

}
.graph-bar{
    position:absolute;
    bottom:0;
    left:0;
    width: 186px;
    background: red;
    opacity:0.9;
}
.target{
    position:absolute;
    bottom:0;
    left:0;
    top:0;
    right:0;
    margin:auto;
    /* color:white; */
    font-size:50px;
}
.target-moji{
    line-height:186px;
    text-align:center;
}
.unit{
    font-size:2em;
    position:absolute;
    bottom:0;
    right:0;
    padding:0.2em;
}
@media screen and (max-width:921px) {
    .graph-p{
        text-align: center;
        margin:0;
        font-size:2em;
    }
    .graph-t{
        text-align: center;
        margin:0;
        font-size:1.5em;
    }
    .graph {
        width: 33vw;
        height: 33vw;
        min-width:33vw;
        border: solid 0.6vw black;

    }
    .graph-bar{
        position:absolute;
        bottom:0;
        left:0;
        width: 31.8vw;
        background: red;
        opacity:0.9;
    }
    .target{
        position:absolute;
        bottom:0;
        left:0;
        top:0;
        right:0;
        margin:auto;
    }
    .target-moji{
        line-height:33vw;
        text-align:center;
    }
    .unit{
        font-size:1em;
    }
}
@media screen and (max-width:550px) {
    .graph-content{
        margin-bottom:5vw;
    }
    .graph-row{
        display:flex;
    }
    .graph-p{
        font-size:1.5em;
    }
    .graph-t{
        font-size:1.2em;
    }
    .target-moji{
        line-height:33vw;
        text-align:center;
    }
    .target{
        font-size:2em;
    }
    .unit{
        font-size:1em;
    }
    .graph{
        margin: 0 auto;
    }
}
</style>

<script>
import {createClient} from '~/plugins/contentful.js'
const client = createClient()
export default {
    data(){
        return{
            weight:67,
            bp:45,
            lt:25,
            toefl:3,
            pweight:67/100,
            pbp:45/100,
            plt:25/100,
            ptoefl:30/100,
            hweight:0,
            hbp:0,
            hlt:0,
            htoefl:0,
            json:"",
            wh: 70 + 'vw',
            kgunit:'kg',
            bpunit:'kg',
            ltunit:'hours',
            ibtunit:'points'
        }
    },
    props:["jsondata","reports"],
    mounted() {
        if(this.reports[0].fields != null){
            this.weight = this.reports[0].fields.weight
            this.bp = this.reports[0].fields.bench
            this.lt = 0
            this.reports.forEach(function(a){
                this.lt = a.fields.alltime + this.lt
            }, this);
            this.toefl = this.reports[0].fields.toefl
            this.pweight = (this.reports[0].fields.weight - 65) / 10
            this.pbp = (this.reports[0].fields.bench -40) / 40
            this.plt = this.lt / 1500
            this.ptoefl = (this.reports[0].fields.toefl-30) /70
            if(window.innerWidth < 912){
                this.hweight = (this.reports[0].fields.weight -65) / 10 * 33 + "vw"
                this.hbp = (this.reports[0].fields.bench - 40) / 40 * 33 + "vw"
                this.hlt = this.lt / 1500 * 33 + "vw"
                this.htoefl = (this.reports[0].fields.toefl -30) /70  * 33 + "vw"
            }else{
                this.hweight = (this.reports[0].fields.weight -65) / 10 * 186 + "px"
                this.hbp = (this.reports[0].fields.bench - 40) / 40 * 186 + "px"
                this.hlt = this.lt / 1500 * 186 + "px"
                this.htoefl = (this.reports[0].fields.toefl - 30) /70  * 186 + "px"
            }
        }
    },
    methods:{
        mouseover: function(i){
            if(i ==  1){
                this.weight = this.pweight *  100
                this.kgunit = '%'
            }else if(i == 2){
                this.bp = this.pbp *  100
                this.bpunit = '%'
            }else if(i == 3){
                this.lt = (this.plt *  100).toFixed(1)
                this.ltunit = '%'
            }else if(i == 4){
                this.toefl = this.ptoefl *  100
                this.ibtunit = '%'
            }
        },
        mouseleave: function(i){
            if(i ==  1){
                this.weight = this.reports[0].fields.weight 
                this.kgunit = 'kg'
            }else if(i == 2){
                this.bp = this.reports[0].fields.bench
                this.bpunit = 'kg'
            }else if(i == 3){
                this.lt = 0
                this.reports.forEach(function(a){
                    this.lt = a.fields.alltime + this.lt
                }, this);
                this.ltunit = 'hours'
            }else if(i == 4){
                this.toefl = this.reports[0].fields.toefl
                this.ibtunit = 'points'
            }  
        }
    }
}
</script>