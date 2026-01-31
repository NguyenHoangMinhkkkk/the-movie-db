export default {
  // =============================================== Base ===============================================
  getColorConfig: 'config/color-config',
  accountInfo: 'auth/me',
  verifyPhone: 'auth/verify-phone',
  verifyOTPCode: 'auth/validate-otp',
  loginSendPhoneOTP: 'auth/send-otp',
  forgotPassword: '/auth/forgot-password',
  loginVerifyPhoneOTP: 'auth/validate-otp',
  authConfig: (locale: string = 'en') => `auth/oauth/info?locale=${locale}`,
  authSSOLogin: 'auth/oauth/login',
  logOutUser: 'auth/logout',
  login: 'auth/login',
  verifyPassword: 'auth/check-password',
  loginVerifyWith2FA: 'auth/security-2fa',
  auth2FA: 'user/organization/security/2fa',
  auth2FASms: 'user/organization/security/2fa/sms',
  // ==============================================================================================
  changePassword: (userId: string) =>
    `user/organization/change-password/${userId}`,
  updateAccountInfo: (id: string) => `user/organization/profile/${id}`,
  deleteAccount: (id: string) => `user/organization/delete/${id}`,
  addFcmToken: 'user/fcm-token/add',
  removeFcmToken: 'user/fcm-token/remove',
  toggleFcmToken: 'user/fcm-token/toggle',
  readNotification: (notificationId: string) =>
    `calc/notifications/read/${notificationId}`,
  uploadAvatar: 'photo/uploadWithDirectory/profile',
  languages: 'calc/languages',
  userOrganization: 'user/organization',
  // ==============================================================================================
  languageConfig: 'config/language/list',
  getMultiLanguageContent: 'calc/languages',
  validateBELanguage: 'config/language/version-mobile/lasted',
  initPostBELanguage: 'config/language/initial-mobile/lasted',
  getBETranslate: 'config/language/mobile',
};
