import {createSlice} from "@reduxjs/toolkit";
import initialState from "../data";
import TPortfolio from "../types/tportfolio.ts";
import SlideType from "../../enums/slide-type.ts";
import Direction from "../../enums/direction.ts";


const reducers = createReducer();

function createReducer() {
	return {
		changeSiteStep,
		changeSPAStep,
		changeType
	}

	function changeSiteStep(state: TPortfolio, action: { payload: Direction }) {
		let step: number = state.siteStep;
		if (action.payload === Direction.Add) {
			step = step >= 5 ? 0 : step + 1;
		} else if (action.payload === Direction.Sub) {
			step = step >= 1 ? step - 1 : 5;
		}
		state.siteStep = step;
	}

	function changeSPAStep(state: TPortfolio, action: { payload: Direction }) {
		let step: number = state.spaStep;
		if (action.payload === Direction.Add) {
			step = step >= 3 ? 0 : step + 1;
		} else if (action.payload === Direction.Sub) {
			step = step >= 1 ? step - 1 : 3;
		}
		state.spaStep = step;
	}

	function changeType(state: TPortfolio, action: { payload: SlideType }) {
		state.type = action.payload;
	}
}

const PortfolioSlice = createSlice({
	name: 'portfolioSlice',
	initialState,
	reducers
})

export default PortfolioSlice.reducer;
export const { changeSiteStep, changeSPAStep, changeType } = PortfolioSlice.actions;
