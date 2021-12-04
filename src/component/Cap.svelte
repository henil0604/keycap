<script>

    import getAll from "../modules/getAll";
    import deleteCap$ from '../modules/deleteCap'

    export let id;

    let maxLength = 25;

    let state = {
        showUnlock: false,
        unlockPassword: "",
        unlocked: false
    };

    let Data$ = {
        id: id,
        data: null,
        label: null,
    }

    let All = getAll();

    All.forEach(cap => {
        if(cap.id == id){
            Data$.data = cap.data;
            Data$.label = cap.label;
        }
    });

    Data$.dataToShow = (Data$.data != null && Data$.data.length > maxLength) ? Data$.data.substring(0, maxLength) + '...' : Data$.data;


    function handleUnlock(){

        try{
            const unlocked = CryptoJS.AES.decrypt(Data$.data, state.unlockPassword).toString(CryptoJS.enc.Utf8);
            
            Data$.dataToShow = unlocked;
            
            state.unlocked = true;
            state.showUnlock = false;
            state.unlockPassword = "";
        }catch(e){
            alert("Wrong password");
        }
    }

    function lock(){
        Data$.dataToShow = Data$.data;
        Data$.dataToShow = (Data$.data != null && Data$.data.length > maxLength) ? Data$.data.substring(0, maxLength) + '...' : Data$.data;
        state.unlocked = false;
    }

    function deleteCap(){
        deleteCap$(Data$.id);
    }

</script>

<div class="cap flex flex-row">

    {#if !state.showUnlock}
    <div class="data flex flex-col">
        <p class="data">{Data$.dataToShow}</p>
        <p class="label">{Data$.label}</p>
    </div>
    {:else}
    <div class="unlock">
        <input type="password" bind:value={state.unlockPassword}>
        <button on:click={handleUnlock}>Unlock</button>
    </div>
    {/if}


    <div class="actions flex flex-row">
        {#if !state.unlocked}
            <button on:click={()=>{state.showUnlock = !state.showUnlock}}>
                <i class="fas fa-unlock"></i>
            </button>
        {:else}
            <button on:click={lock}>
                <i class="fas fa-lock"></i>
            </button>
        {/if}
        <button on:click={deleteCap}>
            <i class="fas fa-trash"></i>
        </button>
    </div>

</div>

<style>

    div.cap{
        width: 100%;
        height: fit-content;
        min-height: 30px;
        padding: 10px 10px;
        border-radius: 4px;
        box-shadow: 0 2px 4px #ddd;
        color: #333;
        margin: 5px 0;
        position: relative;
    }

    div.data,
    div.unlock{
        min-width: 90%;
    }

    div > .data > .label {
        font-size: 13px;
        color: #999;
    }

    div > .unlock > input{
        min-width: 60%;
    }
    div > .unlock > button{
        min-width: 10%;
    }

    div.actions{
        align-items: center;
        min-width: 10%;
    }

    button{
        background-color: transparent;
    }
</style>