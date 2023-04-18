import axios from "axios";

const serverUrl = `http://192.168.141.52:4000/api/v1`;
export const loadAllInteractionForAUser  = () => async(dispatch) => {
    try {
        
        dispatch({type:"loadInteractionsRequest"});
        console.log("HERE IN LOADING INTERACTIONS")
        const config = {  withCredentials: true};

        const {data} = await axios.post(
            `${serverUrl}/me/interactions/showall`, 
            config
        ) 

        dispatch({type:"loadInteractionsSuccess", payload:data });
        
    } catch (error) {
        dispatch({type:"loadInteractionsFail", payload:error.response.data.message});
    }
}

// load all message for an interaction 
// an interaction is between a user and another user

export const loadAMessageCompletely  = () => async(dispatch) => {
    try {
        
        dispatch({type:"loginRequest"});
        console.log("her2e")
        const config = {headers:{"Content-type":"application/json"},  withCredentials: true};

        const {data} = await axios.post(
            `${serverUrl}/login`, 
            {email, password},
            config
        ) 

        dispatch({type:"loginSuccess", payload:data });
        
    } catch (error) {
        dispatch({type:"loginFail", payload:error.response.data.message});
    }
}
