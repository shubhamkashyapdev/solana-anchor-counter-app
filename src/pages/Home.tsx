import React, { useEffect } from "react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
//redux
import { useSelector, useDispatch } from "react-redux";
import { setOpponent } from "../redux/Game/GameAction";
import { RootState } from "../redux/store";
import idl from '../utils/idl.json'
import { useAnchorWallet, ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { Connection } from '@solana/web3.js'

import { AnchorProvider, Program, web3, BN } from '@project-serum/anchor';
const Home = () => {

  const wallet = useAnchorWallet();
  const baseAccount = web3.Keypair.generate();
  const { game } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const getProvider = () => {
    if (!wallet) {
      return null
    }
    const connection = new Connection(web3.clusterApiUrl("devnet"), "processed")
    //@ts-ignore
    const provider = new AnchorProvider(
      connection, wallet, { "preflightCommitment": "processed" }
    )
    return provider;
  }

  const createCounter = async () => {
    const provider = getProvider();
    if (!provider) {
      throw ("Provider is null");
    }

    /* Bug with default importing, fixed with re-coverting to JSON */
    const a = JSON.stringify(idl)
    const b = JSON.parse(a);
    /* program will talk to the contract */
    const program = new Program(b, idl.metadata.address, provider);

    try {
      /* interface with the program via RPC */
      await program.rpc.initialize({
        accounts: {
          myAccount: baseAccount.publicKey,
          user: provider.wallet.publicKey,
          systemProgram: web3.SystemProgram.programId,
        },
        signers: [baseAccount]
      })

      const account = await program.account.myAccount.fetch(baseAccount.publicKey)
      console.log(`account: `, account)
    } catch (error) {
      console.error(`Transaction error: `, error)
    }


  }
  const incrementCounter = async () => {
    const provider = getProvider();
    if (!provider) {
      throw ("Provider is null");
    }
    const a = JSON.stringify(idl)
    const b = JSON.parse(a);
    const program = new Program(b, idl.metadata.address, provider);
    try {
      await program.rpc.increment({
        accounts: {
          myAccount: baseAccount.publicKey,
        },
      })
      const account = await program.account.myAccount.fetch(baseAccount.publicKey)
      console.log(`account: `, account.data.toString())
    } catch (error) {
      console.error(`Transaction error: `, error)
    }
  }
  const decrementCounter = async () => {
    const provider = getProvider();
    if (!provider) {
      throw ("Provider is null");
    }
    const a = JSON.stringify(idl)
    const b = JSON.parse(a);
    const program = new Program(b, idl.metadata.address, provider);
    try {
      await program.rpc.decrement({
        accounts: {
          myAccount: baseAccount.publicKey,
        },
      })
      const account = await program.account.myAccount.fetch(baseAccount.publicKey)
      console.log(`account: `, account.data.toString())
    } catch (error) {
      console.error(`Transaction error: `, error)
    }
  }
  const updateCounter = async () => {
    const provider = getProvider();
    if (!provider) {
      throw ("Provider is null");
    }
    const a = JSON.stringify(idl)
    const b = JSON.parse(a);
    const program = new Program(b, idl.metadata.address, provider);
    try {
      const value = new BN(100);
      await program.rpc.update(value, {
        accounts: {
          myAccount: baseAccount.publicKey,
        },
      })
      const account = await program.account.myAccount.fetch(baseAccount.publicKey)
      console.log(`account: `, account.data.toString())
    } catch (error) {
      console.error(`Transaction error: `, error)
    }
  }





  useEffect(() => {
    // @ts-ignore
    dispatch(setOpponent("Sourabh"));
  }, []);
  return (
    <div className="container pb-10 h-full">
      <div className="flex justify-center">
        <button onClick={createCounter} className="px-4 py-2 bg-indigo-700 shadow-md text-center">Initialize</button>
      </div>
      <div className="flex h-[60vh] items-center justify-center">
        <div className="flex h-[40px] items-center">
          <button onClick={incrementCounter} className="px-6 bg-zinc-600 h-full flex items-center text-center hover:bg-zinc-700 hover:shadow-lg hover:scale-105">
            <span>+</span>
          </button>
          <div className="px-6 text-xl">
            1
          </div>
          <button onClick={decrementCounter} className="px-6 bg-zinc-600 h-full flex items-center text-center hover:bg-zinc-700 hover:shadow-lg hover:scale-105">
            <span>-</span>
          </button>
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <button onClick={updateCounter} className="py-2 px-6 text-xl font-semibold shadow-md bg-zinc-800 text-white"> Set Counter To 100</button>
      </div>
    </div>
  );
};

export default Home;
