import axios from "axios"
const tstkumatsusignalAPI = axios.create({
  baseURL: "https://tst-kumatsu-signal-118869.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return tstkumatsusignalAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_kuma001_list(payload) {
  return tstkumatsusignalAPI.get(`/api/v1/kuma001/`)
}
function api_v1_kuma001_create(payload) {
  return tstkumatsusignalAPI.post(`/api/v1/kuma001/`, payload)
}
function api_v1_kuma001_retrieve(payload) {
  return tstkumatsusignalAPI.get(`/api/v1/kuma001/${payload.id}/`)
}
function api_v1_kuma001_update(payload) {
  return tstkumatsusignalAPI.put(`/api/v1/kuma001/${payload.id}/`, payload)
}
function api_v1_kuma001_partial_update(payload) {
  return tstkumatsusignalAPI.patch(`/api/v1/kuma001/${payload.id}/`, payload)
}
function api_v1_kuma001_destroy(payload) {
  return tstkumatsusignalAPI.delete(`/api/v1/kuma001/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return tstkumatsusignalAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return tstkumatsusignalAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return tstkumatsusignalAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return tstkumatsusignalAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return tstkumatsusignalAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return tstkumatsusignalAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return tstkumatsusignalAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return tstkumatsusignalAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return tstkumatsusignalAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return tstkumatsusignalAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload
  )
}
function rest_auth_user_retrieve(payload) {
  return tstkumatsusignalAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return tstkumatsusignalAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return tstkumatsusignalAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_kuma001_list,
  api_v1_kuma001_create,
  api_v1_kuma001_retrieve,
  api_v1_kuma001_update,
  api_v1_kuma001_partial_update,
  api_v1_kuma001_destroy,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
