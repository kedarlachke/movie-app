
//import {getDocconfig,getDocNo,searchDataList} from '../CommonLogic'
export function dynamicListHooks(items,searchfor,pageSize) {

    const reducer=(state,action)=>{
        
            
        switch (action.type) {
            
          case "ADDING_ITEM":
            return  {loading:true,ItemList:[...state.ItemList],error:'',hasMore:true}
      
          case "ADD_ITEM":      
          let itemlist=[]
            
            let endindex=state.ItemList.length+pageSize
            if(state.ItemList.length+pageSize>items.length){
              endindex=state.ItemList.length+(items.length-state.ItemList.length)
            }
            for(let i=state.ItemList.length;i<(endindex);i++){
            itemlist.push(items[i])
            }    
            
            return  {...state,loading:false,ItemList:[...state.ItemList,...itemlist],error:'',hasMore:((endindex)!==items.length)}
          case "SEARCH_ITEM":
              //('SEARCH_ITEM')
            return {loading:false,ItemList:searchDataList(action.payload.searchtext, items,searchfor),hasMore:false}
          case "ITEM_RESTORE":
           let itemlist1=[]            
           let endindex1=pageSize
          if(items.length<pageSize){
            endindex1=items.length
          }
          for(let i=0;i<(endindex1);i++){
          itemlist1.push(items[i])
          }    
         return  {loading:false,ItemList:[...itemlist1],error:'',hasMore:((endindex1)!==items.length)}
            default:return state

            
        }
      }
      return [reducer]
}

  

export const  searchDataList = (query,data_list,field) =>
{
  if (query === '') {
    //if the query is null then return blank
    return [];
  }
  const regex = new RegExp(`${query.trim()}`, 'i');
  return data_list.filter(item => {  if(item[field]==null)item[field]='';    
                                     return item[field].search(regex) >= 0 }) ;
}