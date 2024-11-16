import { useReducer, createContext, ReactNode } from "react"

import { BudgetReducer, initialState, BudgetState, BudgetActions } from "../reducers/budget-reducer"

type BudgetContextProps = {
    state: BudgetState,
    dispatch: React.Dispatch<BudgetActions>
}

type BudgetProviderProps = {
    children: ReactNode
}

export const BudgetContext = createContext<BudgetContextProps>( {} as BudgetContextProps)

export const BudgetProvider = ({children} : BudgetProviderProps) =>{

    const [state, dispatch] = useReducer(BudgetReducer, initialState)

    return(
        <BudgetContext.Provider
        value={{
            state,
            dispatch
        }}
        >
            {children}
        </BudgetContext.Provider>
    )
}