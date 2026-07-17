import emailjs from "@emailjs/browser";

const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const ADMIN_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID;
const USER_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_USER_TEMPLATE_ID;
const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL;

emailjs.init(PUBLIC_KEY);

// Admin ko mail (to email ab .env se aayega, template me nahi)
export function sendAdminMail({ formType, name, email, phone, details }) {
  return emailjs.send(SERVICE_ID, ADMIN_TEMPLATE_ID, {
    admin_email: ADMIN_EMAIL,
    form_type: formType,
    user_name: name,
    user_email: email,
    user_phone: phone || "-",
    details,
  });
}

// User ko thank-you mail
export function sendUserMail({ pageName, name, email, details }) {
  return emailjs.send(SERVICE_ID, USER_TEMPLATE_ID, {
    to_email: email,
    user_name: name,
    page_name: pageName,
    details,
  });
}
