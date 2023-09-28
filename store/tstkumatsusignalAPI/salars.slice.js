import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_salar_list = createAsyncThunk(
  "salars/api_v1_salar_list",
  async payload => {
    const response = await apiService.api_v1_salar_list(payload)
    return response.data
  }
)
export const api_v1_salar_create = createAsyncThunk(
  "salars/api_v1_salar_create",
  async payload => {
    const response = await apiService.api_v1_salar_create(payload)
    return response.data
  }
)
export const api_v1_salar_retrieve = createAsyncThunk(
  "salars/api_v1_salar_retrieve",
  async payload => {
    const response = await apiService.api_v1_salar_retrieve(payload)
    return response.data
  }
)
export const api_v1_salar_update = createAsyncThunk(
  "salars/api_v1_salar_update",
  async payload => {
    const response = await apiService.api_v1_salar_update(payload)
    return response.data
  }
)
export const api_v1_salar_partial_update = createAsyncThunk(
  "salars/api_v1_salar_partial_update",
  async payload => {
    const response = await apiService.api_v1_salar_partial_update(payload)
    return response.data
  }
)
export const api_v1_salar_destroy = createAsyncThunk(
  "salars/api_v1_salar_destroy",
  async payload => {
    const response = await apiService.api_v1_salar_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const salarsSlice = createSlice({
  name: "salars",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_salar_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_salar_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_salar_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_salar_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_salar_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_salar_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_salar_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_salar_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_salar_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_salar_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_salar_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_salar_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_salar_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_salar_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_salar_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_salar_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_salar_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_salar_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_salar_list,
  api_v1_salar_create,
  api_v1_salar_retrieve,
  api_v1_salar_update,
  api_v1_salar_partial_update,
  api_v1_salar_destroy,
  slice: salarsSlice
}
