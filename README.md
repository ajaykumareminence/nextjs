This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

import {Provider, FaucetClient, Network, AptosAccount, TxnBuilderTypes, BCS} from "aptos";
const provider = new Provider(Network.DEVNET);
const NODE_URL = "https://fullnode.devnet.aptoslabs.com";
const FAUCET_URL = "https://faucet.devnet.aptoslabs.com";
const faucetClient = new FaucetClient(NODE_URL, FAUCET_URL); 

async function main() {
    const alice = new AptosAccount();
    console.log("account created");
    await faucetClient.fundAccount(alice.address(), 100_000_000);
    console.log("account funded");
    const entryFunctionPayload = new TxnBuilderTypes.TransactionPayloadEntryFunction(
        TxnBuilderTypes.EntryFunction.natural("372facd49db7a5b87809ce066ae07d647289ef30aab10c99e60b3bb01867548b::see_my_message_store", "create_message", [], [BCS.bcsSerializeStr("hi, first message")]),
    );
    const rawTxn = await provider.generateSignSubmitTransaction(alice, entryFunctionPayload);
    console.log(rawTxn);

    const viewPayload = {
        function: "372facd49db7a5b87809ce066ae07d647289ef30aab10c99e60b3bb01867548b::see_my_message_store::see_message",
        type_arguments: [],
        arguments: [alice.address().hex()]
    };
    try{
        const message = await provider.view(viewPayload);
        console.log({message})
    }catch(e){
        console.log(e)
    }
}   



main()


