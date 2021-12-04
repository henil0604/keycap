<script>

    import Create from './Create.svelte';
    import Caps from './Caps.svelte';

</script>


<div>

    <h1 class="text-3xl">Keycap</h1>

    <Create />

    <hr>

    <Caps />

</div>


<style>

    div{
        min-width: fit-content;
        min-height: fit-content;
        background-color: #fff;
        padding: 30px 50px;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        color: #020303;
        transition: .3s all;
    }

    h1{
        width: 100%;
        text-align: center;
        margin-bottom: 40px;
    }


    @media only screen and (max-width: 747px) {
        div{
            padding: 20px;
            min-width: 100vw;
            min-height: 100vh;
        }
    }

    hr{
        margin: 30px 5px;
    }


</style>