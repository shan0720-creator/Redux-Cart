// Basically slicing is the process in which we divide the data and organise our data in small peices
const {createSlice, createAsyncThunk} = require('@reduxjs/toolkit')

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading'
});

const productSlice = createSlice({
    name: 'product',
    initialState:{
        data:[],
        status:STATUSES.IDLE
    },
    reducers:{
       // setProducts(state,action){
       //   state.data = action.payload;
       // },
       // setStatus(state,action){
        //    state.status = action.payload
      //  }
    },
    extraReducers:(builder)=>{
       builder
       .addCase(fetchProducts.pending, (state,action)=>{
            state.status = STATUSES.LOADING;

       }).addCase(fetchProducts.fulfilled,(state,action)=>{
        state.data = action.payload;
        state.status = STATUSES.IDLE;
       }).addCase(fetchProducts.rejected, (state,action)=>{
        state.status = STATUSES.ERROR
       })
    }
})


export const {setProducts, setStatus} = productSlice.actions;
export default productSlice.reducer;




//Thunks: - The word "Thunk" is a programming term that means "a piece of code that does some delayed work" Rather than execute some logic now, we can write
// a function body or code that can be used to perform the work later

export const fetchProducts = createAsyncThunk('products/fetch', async()=>{
    const res = await fetch('https://api.escuelajs.co/api/v1/products');
    const data = await res.json();
    return data;
})


//export function fetchProducts(){
   // return async function fetchProductThunk(dispatch,getState){
       // dispatch(setStatus(STATUSES.LOADING))
       // try{
        //    const res = await fetch('https://api.escuelajs.co/api/v1/products');
         //   const data = await res.json();
          //  dispatch(setProducts(data));
         //   dispatch(setStatus(STATUSES.IDLE))
       // }catch(err){
       //     console.log(err);
        //    dispatch(setStatus(STATUSES.ERROR))
       // }
   // }//
//}