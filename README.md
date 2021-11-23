# Geth Node
Geth Node extended environment. Follow node set up at [GethLab](https://github.com/natemiller1/GethLab).

## Geth Node Options

Run node with http (for mining and account manangement tasks)
```geth --datadir ~/developer/Geth/ethdata --networkid 1919 --rpc.allow-unprotected-txs --http.api eth,net,web3,personal --http --nodiscover --http.corsdomain "*" console --preload ~/developer/Geth/scripts/get-transactions-by-account.js```
