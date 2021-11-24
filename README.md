# Geth node
Geth node extended environment. Follow node set up at [GethLab](https://github.com/natemiller1/GethLab).

## Extending your node
Build extensions and preload them as scripts:
```
geth --datadir ~/"path-to-project-root"/ethdata --networkid 1919 --rpc.allow-unprotected-txs --http.api eth,net,web3,personal --http --nodiscover --http.corsdomain "*" console --preload ~/"path-to-project-root"/scripts/get-transactions-by-account.js
```
