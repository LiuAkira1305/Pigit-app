import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  vi: {
    translation: {
      "login_title": "Đăng nhập",
      "login_subtitle": "Chào mừng đến với Pigit",
      "email_label": "Địa chỉ Email",
      "email_placeholder": "Địa chỉ Email",
      "password_label": "Mật khẩu",
      "password_placeholder": "Nhập mật khẩu",
      "no_account": "Chưa có tài khoản? ",
      "sign_up_link": "Đăng ký",
      "forgot_password": "Quên mật khẩu?",
      "login_btn": "Đăng nhập",
      "or": "HOẶC",
      "sso_btn": "Đăng nhập bằng Single Sign-On (SSO)",
      
      "register_title": "Đăng ký",
      "register_subtitle": "Tham gia Pigit ngay hôm nay",
      "first_name_label": "Tên",
      "first_name_placeholder": "Tên",
      "last_name_label": "Họ",
      "last_name_placeholder": "Họ",
      "user_name_label": "Tên đăng nhập",
      "user_name_placeholder": "Tên đăng nhập",
      "confirm_password_label": "Xác nhận mật khẩu",
      "confirm_password_placeholder": "Xác nhận mật khẩu",
      "already_have_account": "Đã có tài khoản? ",
      "log_in_link": "Đăng nhập",
      "sign_up_btn": "Đăng ký",
      "google_btn": "Google",
      "facebook_btn": "Facebook",
      
      "val_req_firstname": "Tên không được để trống",
      "val_let_firstname": "Tên chỉ được chứa chữ cái",
      "val_req_lastname": "Họ không được để trống",
      "val_let_lastname": "Họ chỉ được chứa chữ cái",
      "val_req_username": "Tên đăng nhập không được để trống",
      "val_req_email": "Email không được để trống",
      "val_fmt_email": "Định dạng email không hợp lệ (phải chứa @)",
      "val_req_password": "Mật khẩu không được để trống",
      "val_fmt_password": "Mật khẩu phải từ 8 ký tự, gồm 1 chữ hoa & 1 chữ thường",
      "val_req_confirm": "Vui lòng xác nhận mật khẩu",
      "val_fmt_confirm": "Mật khẩu không khớp",
      "alert_success": "Đăng ký thành công!",
      "lang_label": "Ngôn ngữ"
    }
  },
  en: {
    translation: {
      "login_title": "Log in",
      "login_subtitle": "Welcome to Pigit",
      "email_label": "Email address",
      "email_placeholder": "Email address",
      "password_label": "Password",
      "password_placeholder": "Password",
      "no_account": "No Account? ",
      "sign_up_link": "Sign up",
      "forgot_password": "Forgot Password?",
      "login_btn": "Log in",
      "or": "OR",
      "sso_btn": "Use single sign-on (SSO)",
      
      "register_title": "Sign up",
      "register_subtitle": "Join Pigit today",
      "first_name_label": "First Name",
      "first_name_placeholder": "First name",
      "last_name_label": "Last Name",
      "last_name_placeholder": "Last name",
      "user_name_label": "User Name",
      "user_name_placeholder": "User name",
      "confirm_password_label": "Confirm Password",
      "confirm_password_placeholder": "Confirm password",
      "already_have_account": "Already have an account? ",
      "log_in_link": "Log in",
      "sign_up_btn": "Sign up",
      "google_btn": "Google",
      "facebook_btn": "Facebook",
      
      "val_req_firstname": "First Name is required",
      "val_let_firstname": "First Name must contain only letters",
      "val_req_lastname": "Last Name is required",
      "val_let_lastname": "Last Name must contain only letters",
      "val_req_username": "User Name is required",
      "val_req_email": "Email is required",
      "val_fmt_email": "Invalid email format (must contain @)",
      "val_req_password": "Password is required",
      "val_fmt_password": "Password must be at least 8 chars, contain 1 uppercase & 1 lowercase",
      "val_req_confirm": "Confirm Password is required",
      "val_fmt_confirm": "Passwords do not match",
      "alert_success": "Registration Successful!",
      "lang_label": "Language"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "vi", 
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
