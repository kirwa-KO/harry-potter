import { createStore } from "redux";

const intialeState = {
	characters: []
};

const favoriteReducer = (state = intialeState, action) => {
	if (action.type === 'ADD_CHARACTER')
	{
		const existingCharacterIndex = state.characters.findIndex(character => character.name === action.character.name);
		const existingCharacter = state.characters[existingCharacterIndex];

		if (!existingCharacter)
		{
			const updatedCharacters = state.characters.concat(action.character);
			console.log(updatedCharacters)
			return {
				characters: updatedCharacters
			}
		}
		else
			return state;
	}

	if (action.type === 'REMOVE_CHARACTER')
	{
		const updatedCharacters = state.characters.filter(character => character.name !== action.name);
		return {
			characters: updatedCharacters
		}
	}

	return state;
}

const store = createStore(favoriteReducer);

export default store;