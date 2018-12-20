import { fetch, addTask } from 'domain-task';
import { Action, Reducer } from 'redux';
import { AppThunkAction } from './';

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface EntryState {
    isLoading: boolean;
    entryDateId?: number;
    entry: Entry;
}

export interface Entry {
    thumbnailPath: string;
    title: string;
    blogJsx: string;
}

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.
// Use @typeName and isActionType for type detection that works even after serialization/deserialization.

interface RequestBlogEntryAction {
    type: 'REQUEST_BLOG_ENTRY';
    entryDateId: number;
}

//interface RequestAllBlogEntriesAction {
//    type: 'REQUEST_ALL_BLOG_ENTRIES';
//}

interface ReceiveBlogEntryAction {
    type: 'RECEIVE_BLOG_ENTRY';
    entryDateId: number;
    entry: Entry;
}

//interface ReceiveAllBlogEntriesAction {
//    type: 'RECEIVE_ALL_BLOG_ENTRIES';
//    entries: Entry[];
//}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
type KnownAction = RequestBlogEntryAction | /*RequestAllBlogEntriesAction |*/ ReceiveBlogEntryAction /*| ReceiveAllBlogEntriesAction*/;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    requestBlogEntry: (entryDateId: number): AppThunkAction<KnownAction> => (dispatch, getState) => {
        // Only load data if it's something we don't already have (and are not already loading)
        if (entryDateId !== getState().blogEntry.entryDateId) {
            let fetchTask = fetch(`api/BlogData/BlogEntry?entryDateId=${entryDateId}`)
                .then(response => response.json() as Promise<Entry>)
                .then(data => {
                    dispatch({ type: 'RECEIVE_BLOG_ENTRY', entryDateId: entryDateId, entry: data });
                });

            addTask(fetchTask); // Ensure server-side prerendering waits for this to complete
            dispatch({ type: 'REQUEST_BLOG_ENTRY', entryDateId: entryDateId });
        }
    }
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

const unloadedState: EntryState = { entry: {} as Entry, isLoading: false };


export const reducer: Reducer<EntryState> = (state: EntryState, incomingAction: Action) => {
    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'REQUEST_BLOG_ENTRY':
            return {
                isLoading: true,
                entryDateId: action.entryDateId,
                entry: state.entry
            };
        case 'RECEIVE_BLOG_ENTRY':
            // Only accept the incoming data if it matches the most recent request. This ensures we correctly
            // handle out-of-order responses.
            if (action.entryDateId === state.entryDateId) {
                return {
                    isLoading: false,
                    entryDateId: action.entryDateId,
                    entry: action.entry
                };
            }
            break;
        default:
            // The following line guarantees that every action in the KnownAction union has been covered by a case above
            const exhaustiveCheck: never = action;
    }

    // For unrecognized actions (or in cases where actions have no effect), must return the existing state
    //  (or default initial state if none was supplied)
    return state || unloadedState;
};
