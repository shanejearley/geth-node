// Modified from the stackexchange post:
// https://ethereum.stackexchange.com/questions/2531/common-useful-javascript-snippets-for-geth/3478#3478
function getTransactionsByAccount(myaccount, startBlockNumber, endBlockNumber) {
  if (endBlockNumber === null) {
    endBlockNumber = eth.blockNumber;
    console.log("Using endBlockNumber: " + endBlockNumber);
  }
  if (startBlockNumber === null) {
    startBlockNumber = endBlockNumber - 1000;
    console.log("Using startBlockNumber: " + startBlockNumber);
  }
  console.log(
    'Searching for transactions to/from account "' +
      myaccount +
      '" within blocks ' +
      startBlockNumber +
      " and " +
      endBlockNumber
  );

  for (let i = startBlockNumber; i <= endBlockNumber; i++) {
    if (i % 1000 === 0) {
      console.log("Searching block " + i);
    }
    const block = eth.getBlock(i, true);
    if (block !== null && block.transactions !== null) {
      block.transactions.forEach((transaction) => {
        if (myaccount === "*" || myaccount === transaction.from || myaccount === transaction.to) {
          console.log(
            "  tx hash          : " +
              transaction.hash +
              "\n" +
              "   nonce           : " +
              transaction.nonce +
              "\n" +
              "   blockHash       : " +
              transaction.blockHash +
              "\n" +
              "   blockNumber     : " +
              transaction.blockNumber +
              "\n" +
              "   transactionIndex: " +
              transaction.transactionIndex +
              "\n" +
              "   from            : " +
              transaction.from +
              "\n" +
              "   to              : " +
              transaction.to +
              "\n" +
              "   value           : " +
              transaction.value +
              "\n" +
              "   time            : " +
              block.timestamp +
              " " +
              new Date(block.timestamp * 1000).toUTCString() +
              "\n" +
              "   gasPrice        : " +
              transaction.gasPrice +
              "\n" +
              "   gas             : " +
              transaction.gas +
              "\n" +
              "   input           : " +
              transaction.input
          );
        }
      });
    }
  }
}
