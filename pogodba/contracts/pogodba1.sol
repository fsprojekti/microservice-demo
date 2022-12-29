// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.7.0 <0.9.0;


contract ipns {
    uint public value;
    address payable public seller;
    address payable public buyer;

    enum State {Deployed, Payed, Guarantee, Completed}
    State public state;

    constructor() payable {
        seller = payable(msg.sender);
        value = msg.value;

    }

    modifier isSeller() {
        require(msg.sender == seller);
        _; 
    }

    modifier isBuyer() {
        require(msg.sender == buyer);
        _;
    }

    modifier inState(State state_) {
        require(state == state_);
        _;
    }


    function pay() public payable inState(State.Deployed) {
        require(msg.value == value);
        buyer = payable(msg.sender);
        state = State.Payed;
    }

    function guarantee() public isSeller inState(State.Payed) {
        state = State.Guarantee;
    }

    function confirm() public isBuyer inState(State.Guarantee) {
        seller.transfer(2 * value);
        state = State.Completed;
    }
    
    function cancel() public isSeller {
        if (state == State.Deployed) {
            seller.transfer(value);
            state = State.Completed;
        }
        else if (state == State.Payed || state == State.Guarantee) {
            buyer.transfer(value);
            seller.transfer(value);
            state = State.Completed;
        }

    }


    
}
