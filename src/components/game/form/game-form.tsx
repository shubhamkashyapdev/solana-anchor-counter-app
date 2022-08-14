import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BetBalance, MainBalance } from '../balance';
import { board } from '../board-generator';
import { session } from '../game';
import './game-form.scss'

export interface IState {
    amount: number;
    mode: number;
    score: number;
}

export class game_form extends Component<{}, IState> {

    constructor(props: any) {
        super(props);
        this.state = {
            amount: BetBalance.Set(MainBalance.GetValue()),
            mode: 1,
            score: 0,
        };
        this.GetInputAmount = this.GetInputAmount.bind(this);
        this.onChangeValue = this.onChangeValue.bind(this);
        this.Submit = this.Submit.bind(this);
        this.HalfAmount = this.HalfAmount.bind(this);
        this.DoubleAmount = this.DoubleAmount.bind(this);
        this.MaxAmount = this.MaxAmount.bind(this);
    }


    GetInputAmount(event: any) {

        this.setState((pState) => ({
            amount: BetBalance.Set(MainBalance.CheckIfBalance(event.target.value)),
            mode: pState.mode
        }))

    }

    Submit() {
        if (!board.isActive) {
            session.StartSession(this);
            return;
        }
        session.EndSession();

    }

    onChangeValue(event: any) {
        this.setState((pState) => ({
            amount: BetBalance.Set(pState.amount),
            mode: event.target.value
        }))
    }

    HalfAmount(event: any) {
        this.setState((pState) => ({
            amount: BetBalance.Set(MainBalance.CheckIfBalance(pState.amount / 2)),
            mode: pState.mode
        }))
    }

    DoubleAmount(event: any) {
        this.setState((pState) => ({
            amount: BetBalance.Set(MainBalance.CheckIfBalance(pState.amount * 2)),
            mode: pState.mode
        }))
    }

    MaxAmount(event: any) {
        this.setState((pState) => ({
            amount: BetBalance.Set(MainBalance.GetValue()),
            mode: pState.mode
        }))
    }

    UpdateAmount() {
        this.setState((pState) => ({
            amount: BetBalance.GetValue(),
            mode: pState.mode
        }))
    }

    ActivateForm(isActive: boolean): void {
        if (isActive) {
            document.getElementById('form_container')?.classList.remove('disabled');
            return;
        }
        document.getElementById('form_container')?.classList.add('disabled');
        return;
    }


    render() {
        return (
            <div className="formBody">
                <div id='form_container' className="form_container">
                    {/* @ts-ignore */}
                    <span>Score: {this.props.score}</span>
                    <span className='label' >Bet Amount</span>
                    <div className="bedAmountBody">
                        <input id='betAmount' type="number" min='0' max='99999' value={this.state.amount} onChange={this.GetInputAmount} />
                        <a onClick={this.HalfAmount} id="halfAmount" className="changeAmount" ></a>
                        <a onClick={this.DoubleAmount} id="doubleAmount" className="changeAmount" ></a>
                        <a onClick={this.MaxAmount} id="maxAmount" className="changeAmount" ></a>
                    </div>

                    <span className='label'>Number Of Thieves</span>
                    <div className="numberOfThieves">
                        <div className="input_container">
                            <input onChange={this.onChangeValue} type="radio" id="fiveThieves" name="nThieves" value="1" defaultChecked></input>
                            <span className="checkmark">5</span>
                        </div>
                        <div className="input_container">
                            <input onChange={this.onChangeValue} type="radio" id="tenThieves" name="nThieves" value="2" ></input>
                            <span className="checkmark">10</span>
                        </div>
                        <div className="input_container">
                            <input onChange={this.onChangeValue} type="radio" id="fifteenThieves" name="nThieves" value="3" ></input>
                            <span className="checkmark">15</span>
                        </div>

                    </div>
                    <div>
                        <a onClick={this.Submit} id='start-cashout' className="bg-primary text-primaryBlack py-2 flex-1">Start Game</a>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state: any) {
    console.log({ state })
    return {
        score: state.game.score,
    }
}

export default connect(mapStateToProps)(game_form)
