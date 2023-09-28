import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_kuma001_list = createAsyncThunk(
  "kuma001s/api_v1_kuma001_list",
  async payload => {
    const response = await apiService.api_v1_kuma001_list(payload)
    return response.data
  }
)
export const api_v1_kuma001_create = createAsyncThunk(
  "kuma001s/api_v1_kuma001_create",
  async payload => {
    const response = await apiService.api_v1_kuma001_create(payload)
    return response.data
  }
)
export const api_v1_kuma001_retrieve = createAsyncThunk(
  "kuma001s/api_v1_kuma001_retrieve",
  async payload => {
    const response = await apiService.api_v1_kuma001_retrieve(payload)
    return response.data
  }
)
export const api_v1_kuma001_update = createAsyncThunk(
  "kuma001s/api_v1_kuma001_update",
  async payload => {
    const response = await apiService.api_v1_kuma001_update(payload)
    return response.data
  }
)
export const api_v1_kuma001_partial_update = createAsyncThunk(
  "kuma001s/api_v1_kuma001_partial_update",
  async payload => {
    const response = await apiService.api_v1_kuma001_partial_update(payload)
    return response.data
  }
)
export const api_v1_kuma001_destroy = createAsyncThunk(
  "kuma001s/api_v1_kuma001_destroy",
  async payload => {
    const response = await apiService.api_v1_kuma001_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const kuma001sSlice = createSlice({
  name: "kuma001s",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_kuma001_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_kuma001_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_kuma001_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_kuma001_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_kuma001_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_kuma001_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_kuma001_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_kuma001_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_kuma001_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_kuma001_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_kuma001_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_kuma001_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_kuma001_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_kuma001_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_kuma001_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_kuma001_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_kuma001_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_kuma001_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_kuma001_list,
  api_v1_kuma001_create,
  api_v1_kuma001_retrieve,
  api_v1_kuma001_update,
  api_v1_kuma001_partial_update,
  api_v1_kuma001_destroy,
  slice: kuma001sSlice
}
