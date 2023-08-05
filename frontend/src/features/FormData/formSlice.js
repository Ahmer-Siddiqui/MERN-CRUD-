import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteData, getData, getSingleData, sendData, updateSingData } from "./formService";

const initialState = {
  myForm: [],
  editData: {},
  checkUpdate: false,
  isLoading: false,
  isSuccess: false,
  isReject: false,
  message: "",
};

export const addMyForm = createAsyncThunk(
  "MyForm/add",
  async (data, thunkAPI) => {
    try {
      const response = await sendData(data);
      console.log(thunkAPI.fulfillWithValue(response));
      return thunkAPI.fulfillWithValue(response);
    } catch (err) {
      console.log(thunkAPI.rejectWithValue(err.message));
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const getMyForm = createAsyncThunk(
  "MyForm/get",
  async (data, thunkAPI) => {
    try {
      const response = await getData();
      return thunkAPI.fulfillWithValue(response);
    } catch (err) {
      console.log(thunkAPI.rejectWithValue(err.message));
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
export const getSingleFormData = createAsyncThunk(
  "MyForm/getSingle",
  async (data, thunkAPI) => {
    try {
      // console.log(data);
      const response = await getSingleData(data);
      return thunkAPI.fulfillWithValue(response);
    } catch (err) {
      console.log(thunkAPI.rejectWithValue(err.message));
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
export const updateMyForm = createAsyncThunk(
  "MyForm/update",
  async (data, thunkAPI) => {
    try {
      // console.log(data);
      const response = await updateSingData(data);
      return thunkAPI.fulfillWithValue(response);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
export const deleteMyForm = createAsyncThunk(
  "MyForm/delete",
  async (data, thunkAPI) => {
    try {
      const response = await deleteData(data);
      return thunkAPI.fulfillWithValue(response);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const formSlice = createSlice({
  name: "formData",
  initialState,
  reducers: {
    reset: () => initialState,
    // updateData: (state, action) => {
    //   state.editData = action.payload;
    // },
    // updationCheck: (state, action) => {
    //   state.checkUpdate = !action.payload;
    // },
  },

  extraReducers: (builder) => {
    builder
      .addCase(addMyForm.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addMyForm.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(addMyForm.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
      })
      // 
      .addCase(getMyForm.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMyForm.fulfilled, (state, action) => {
        state.isLoading = false;
        state.myForm = action.payload;
      })
      .addCase(getMyForm.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
      })
      // 
      .addCase(getSingleFormData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleFormData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.editData = action.payload;
      })
      .addCase(getSingleFormData.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
      })
      // 
      .addCase(deleteMyForm.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteMyForm.fulfilled, (state, action) => {
        state.isLoading = false;
        // state.myForm = action.payload;
      })
      .addCase(deleteMyForm.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
      })
      // 
      .addCase(updateMyForm.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateMyForm.fulfilled, (state, action) => {
        // state.isLoading =  false
        console.log(action.payload);
        // state.myForm = action.payload;
      })
      .addCase(updateMyForm.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
      });
  },
});

export const { reset, updateData, updationCheck } = formSlice.actions;

export default formSlice.reducer;
