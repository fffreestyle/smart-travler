import * as actionType from './ActionType';

export const addCounter = () => ({
  type: actionType.ADD_COUNTER,
  payload: 1
});

export const removeCounter = () => ({
  type: actionType.REMOVE_COUNTER,
  payload: 1
});


export const addLocation = (place) => (
{
	type: actionType.ADD_LOCATION,
	payload: place
});

export const updateFocusDay = (dayID) => (
{
	type: actionType.UPDATE_FOCUS_DAY,
	payload: dayID
});

export const updateTripDuration = (startDate,endDate,duration) => (
{
  type: actionType.UPDATE_TRIP_DURATION,
  payload: {startDate: startDate, endDate: endDate, duration: duration}
});

// export const addDateInterval = (startDate,endDate) => ({
//   type: actionType.ADD_DATE_INTERVAL,
//   startDate: startDate,
//   endDate: endDate
// });