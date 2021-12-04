<script>
    import create from '../modules/create';

    let data = {
        text: null,
        password: null,
        label: null
    }

    function handleSubmit(){

        if(data.text == null || data.password == null || data.label == null){
            alert('Please Fill in all fields');
            return;
        }
        
        create(data);

        data.text = null;
        data.password = null;
        data.label = null;
    }

</script>


<div class="flex flex-col">

    <textarea bind:value={data.text} class="text" type="text" placeholder="Text..."></textarea>

    <input bind:value={data.password} class="password" type="password" placeholder="Password...">
    
    <div class="flex flex-row">

        <input bind:value={data.label} class="label" type="text" placeholder="Label">
        <button on:click={handleSubmit}>Create</button>
    </div>

</div>


<style>

    div{
        min-width: 70vw;
    }

    div textarea{
        min-width: 100%;
        padding: 6px 15px;
        min-height: 70px;
    }

    div input{
        min-height: 30px;
        padding: 6px 15px;
        font-weight: 700;
        outline: none;
    }

    div input:focus,
    div textarea:focus{
        outline: none;
    }

    div > .text{
        min-width: 100%;
    }

    div > div > input.label{
        min-width: 90%;
    }
    div > div > button{
        min-width: 10%;
    }

    div > div {
        display: flex;
        flex-direction: row;
        min-height: fit-content;
        min-width: 100%;
    }

</style>