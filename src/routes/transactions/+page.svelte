<script>
  export let data;
</script>

<h1>Transactions</h1>
{#each data.transactions as transaction}
  <a href="/transactions/{transaction}">Transaction {transaction}</a>
{/each}