

export const DatatOneActions = {
  ADD_DATA1: 'ADD_DATA1',
  REMOVE_DATA1: 'REMOVE_DATA1',
  UPDATE_DATA1: 'UPDATE_DATA1'

}
export const addData1 = (data) => ({ type: DatatOneActions.ADD_DATA1, data})
export const removeData1 = (data) => ({type: DatatOneActions.REMOVE_DATA1,data})
export const updateData1 = (data) => ({type: DatatOneActions.UPDATE_DATA1,data})


export const DatataTwoActions = {
  ADD_DATA2: 'ADD_DATA2',
  REMOVE_DATA2: 'REMOVE_DATA2'
}
export const addData2 = (message) => ({type: DatataTwoActions.ADD_DATA2,message})
export const removeData2 = (message) => ({type: DatataTwoActions.REMOVE_DATA2,message})