import Button from "./button";

export default function Friend({friend,friendSplittingWith,onSelectFriend}){
    const isSelected = friendSplittingWith?.name===friend.name;
    return(
        <li className={isSelected?"selected":""}>
            <img src={`${friend.imageURL}`} alt={friend.name}/>
            <h3>{friend.name}</h3>
            <p className={friend.balance===0?"": friend.balance<0?"red":"green"}>{friend.balance===0?`You and ${friend.name} are even`:friend.balance>0?`${friend.name} owes you $${friend.balance}`:`You owe ${friend.name} $${Math.abs(friend.balance)}`}</p>
            <Button handleClickEvent={()=>onSelectFriend(friend)}>{isSelected?"Close":"Select"}</Button>            
        </li>
    );
}