import Friend from "./friend"

export default function FriendsList({friendList, selectedFriend, onSelectFriend}){
    return <ul>
        {friendList.map(friend =>{
            return <Friend key={friend.name} friend={friend} friendSplittingWith={selectedFriend} onSelectFriend={onSelectFriend}></Friend>
        })}
    </ul>
}