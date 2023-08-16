import { useState } from "react";
import Button from "./button";

export default function BillDetail({splitWith,onBillSplit}){
    const [billTotal,setBillTotal]= useState(0);
    const [myExpense,setMyExpens]= useState(0);
    const [whoIsPaying, setWhoIsPaying] = useState("user");
    
    const friendTotal = billTotal - myExpense;

    function calculateFromBillTotal(e){
        setBillTotal((value)=>e);
    }

    function handleRecordBillSpit(e){
        e.preventDefault();

        if(billTotal===0 && myExpense===0) return;

        splitWith.balance = whoIsPaying==="user"? (splitWith.balance + friendTotal) : (splitWith.balance + (-myExpense));
        //splitWith.billStatus= splitWith.balance===0?`You and ${splitWith.name} are even.`:  splitWith.balance>0? `${splitWith.name} owes you $${splitWith.balance}` :`You owe ${splitWith.name} $${Math.abs(splitWith.balance)}.`;
        onBillSplit(splitWith);
       //onBillSplit(whoIsPaying==="user"?friendTotal:-myExpense);
    }

    return(
        <form onSubmit={handleRecordBillSpit} className="form-split-bill">
            <h2>Split A Bill With {splitWith.name}</h2>
            
                <label>💰 Bill Value</label>
                <input type="number" value={billTotal} onChange={(e)=>calculateFromBillTotal(Number(e.target.value))}/>
           
                <label>🕴🏽 Your expense</label>
                <input type="number" value={myExpense} onChange={(e)=>setMyExpens(Number(e.target.value)>billTotal?myExpense:Number(e.target.value))}/>
            
                <label>👫 {splitWith.name}'s expense</label>
                <input type="number" value={friendTotal} readOnly={true} disabled/>
            
                <label>🤑 Who is paying the bill?</label>
                <select value={whoIsPaying} onChange={(e)=>setWhoIsPaying(e.target.value)}>
                    <option value='user'>You</option>
                    <option value='friend'>{splitWith.name}</option>
                </select>
            <Button>Split Bill</Button>
        </form>
    );
}