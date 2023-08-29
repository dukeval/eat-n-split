import { useState } from "react";
import BillDetail from "./components/billDetail";
import NewFriend from "./components/newFriend";
import FriendsList from "./components/friendsList";
import Button from "./components/button";

  const initialFriendList=[
    {name:"Sarah", imageURL:"https://i.pravatar.cc/45?u=74390",  isSelected:false, balance:0},
    {name:"Bill", imageURL:"https://i.pravatar.cc/45?u=73433", isSelected:true, balance:-20},
    {name:"Jane", imageURL:"https://i.pravatar.cc/45?u=15785", isSelected:false, balance:0},
    {name:"Joe", imageURL:"https://i.pravatar.cc/45?u=49943", isSelected:false, balance:10}
  ];

function App() {
  const [addingFriend, setAddingFriend] = useState(false);
  const [friendList, setFriendList] = useState(initialFriendList)
  const [selectedFriend,setSelectedFriend] = useState(null)

  function handleAddFriend(){
    setAddingFriend(currentState=>!currentState);
  }

  function handleAddingNewFriend(newFriendToAdd){
    setFriendList(friends=>[...friends, newFriendToAdd]);
    setAddingFriend(false);
  }

  function handleBillSplit(friendSplitWith){
    const newfriendList = friendList.find((f)=>f.name=== selectedFriend.name);
    newfriendList.billStatus = friendSplitWith.billStatus;    
    
    setFriendList([...friendList]);
    setSelectedFriend(null);
  }

  function handleSelectedFriend(friend){
    setSelectedFriend(curSelectedFriend=> curSelectedFriend?.name===friend.name?null:friend);
    setAddingFriend(false);    
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friendList={friendList} selectedFriend={selectedFriend} onSelectFriend={handleSelectedFriend}/>
        {addingFriend && <NewFriend friendsList={friendList} onAddingFriend={handleAddingNewFriend}/>}

        <Button handleClickEvent={handleAddFriend}>{addingFriend?"Close":"Add Friend"}</Button>
      </div>
      <div>
        {selectedFriend && <BillDetail splitWith={selectedFriend} onBillSplit={handleBillSplit} key={selectedFriend.name}/>}
      </div>
    </div>
  );
}

export default App;
