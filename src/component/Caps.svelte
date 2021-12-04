<script>

    import Cap from './Cap.svelte';
    import getAll from '../modules/getAll';

    let All = getAll();
    
    setInterval(() => {
        All = getAll();
    }, 100);

</script>

<div class="flex flex-col">

    {#each All as cap}
        <Cap id={cap.id}/>
    {/each}

</div>

<style>

    div{
        min-width: 100%;
    }

</style>