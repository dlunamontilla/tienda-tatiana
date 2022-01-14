<script>
    export let offer = 0;
    export let product;
    export let path;
    export let prices = 0;

    const pricesShow =
        offer > 0
            ? `${(prices  / (offer / 100 + 1)).toFixed(2)}/kg<span>${prices.toFixed(2)}/kg</span>`
            : `${prices.toFixed(2)}/kg`;
</script>

<div class="cards__item">
    <div class="cards__item__offers">{offer}% dto.</div>
    <div class="cards__item__photo">
        {#if path && product}
            <img src={path} alt={product} />
        {/if}
    </div>

    <div class="cards__item__container">
        <h3>${@html pricesShow}</h3>

        {#if product}
            <p>{product}</p>
        {/if}
    </div>

    <div class="cards__item__buttons">
        <button class="button button--success">Agregar</button>
    </div>
</div>

<style>
    p {
        margin: 0;
        padding-top: 5px;
        padding-bottom: 5px;
        line-height: 1.6;
    }

    h3 {
        margin: 0;
    }
</style>