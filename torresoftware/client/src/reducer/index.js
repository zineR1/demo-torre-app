


const initialState = {
    pokemon : [],
    allPokemons: [],
    types: [],
    detail:[]
    
}


function rootReducer(state = initialState, action){
   switch(action.type){
           default:
               return state;
   }
}
   
export default rootReducer;