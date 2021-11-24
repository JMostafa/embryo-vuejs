
import {languages, currencies} from "./data";

const state = {
	languages,
	selectedLocale: languages[1],
	currencies,
	selectedCurrency: currencies[0],
	rtlLayout: true
	
}

// getters
const getters = {
	languages: state => {
		return state.languages;
	},
	selectedLocale: state => {
		return state.selectedLocale;
	},
	currencies: state =>{
		return state.currencies;
	},
	selectedCurrency: state => {
		return state.selectedCurrency;
	},
	rtlLayout: state =>{
		return state.rtlLayout;
	}
}

// actions
const actions = {
	changeLanguage(context, payload) {
		context.commit('changeLanguageHandler', payload);
	},
	changeCurrency(context, payload){
		context.commit('changeCurrency', payload);
	},
	changeRtlLayout(context){
		context.commit('rtlLayoutHandler');
	}
}

// mutations
const mutations = {
	/**
    * method for setting language state
   */
	changeLanguageHandler(state, language) {
		state.selectedLocale = language;
	},
	/**
    * method for setting currency
   */
	changeCurrency(state, currencies){
		state.selectedCurrency = currencies;
	},
	/**
    * method for setting rtl layout
   */
	rtlLayoutHandler(state){
		if(state.selectedLocale.locale == "ar" || state.selectedLocale.locale == "fr")
			state.rtlLayout = true;
		else
			state.rtlLayout = false;
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}
