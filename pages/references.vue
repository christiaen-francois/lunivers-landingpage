<template>
  <div class="container-wrapper">
    <div>
        <p>On croit en eux, ils croient en nous.</p>
        <ul class="list-refs">
            <li v-for="ref in refs" :key="ref">
                {{ref}}
            </li>
            <li>...</li>
        </ul>
        <nuxt-link class="btn btn-link" to="/">Retour</nuxt-link>
    </div>
  </div>
</template>

<script>

export default {
    data: function() {
        return {
            refs: [
                "Côté Rue",
                "EMSD",
                "Graziella Sablone",
                "Intermills",
                "Bodarwe",
                "Victor",
                "Jonathan Jamin",
                "JL Creation & Design",
                "MySteel",
                "Gehlen Immo",
                "Cols & Moreau",
                "Menuiserie Diffels",
                "Pour Liv",
                "Adrien Horward",
                "Divercity Record",
                "Coach2"
            ],
        }
    },
    components: {
    },
    head(){
        return {
            title: "Références | Lunivers"
        }
    },
    methods : {
      
    }
}
</script>

<style>
.list-refs{
    margin: 0;
    padding: 0;
    list-style: none;
}
@media screen and (max-height: 640px) {
  .list-refs {
    
  }
}
.refs{
    margin: 0;
    padding: 0;
    list-style: none;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    justify-content: center;
}
.refs li{
    position: relative;
    width: 20%;
}
.refs li:after {
    content: "";
    display: block;
    padding-bottom: 70%;
}
.refs li .content {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.refs li .content img {
    width: 100%;
    max-width: 70%;
    height: auto;
    max-height: 70%;
}
</style>
