// استيراد مكتبة i18next لإدارة الترجمة
import i18n from "i18next";

// استيراد كاشف اللغة من المتصفح (يحدد اللغة من الكوكيز، URL، وغيرها)
import detector from "i18next-browser-languagedetector";

// دمج i18n مع React
import { initReactI18next } from "react-i18next";

// استيراد ملفات الترجمة للإنجليزية والإيطالية
import translationEN from "../../public/locales/en/translation.json";
import translationIT from "../../public/locales/it/translation.json";

// تعريف الموارد المتاحة (اللغات والترجمات المرتبطة بها)
const resources = {
  en: { translation: translationEN },
  it: { translation: translationIT },
} as const;

// دالة لتحميل ملفات الترجمة إذا كانت غير موجودة مسبقًا (لإضافة لغات ديناميكية مستقبلًا)
const loadLanguageResources = async (lng: string): Promise<void> => {
  try {
    // التحقق إذا كانت اللغة مدعومة
    if (!Object.keys(resources).includes(lng)) {
      console.warn(`Unsupported language: ${lng}`);
      return;
    }

    // عدم تحميل اللغة إذا كانت محملة مسبقًا
    if (i18n.hasResourceBundle(lng, "translation")) return;

    // تحميل ملف الترجمة ديناميكيًا
    const { default: translations } = await import(
      `../../public/locales/${lng}/translation.json`
    );

    // إضافة الترجمة إلى i18n
    i18n.addResourceBundle(lng, "translation", translations);
  } catch (error) {
    console.error(`Failed to load ${lng} translations:`, error);

    // في حالة الخطأ، نحاول التحميل باللغة الإنجليزية كاحتياطي
    if (lng !== "en") {
      await loadLanguageResources("en");
    }
  }
};

// تهيئة i18n
i18n
  .use(detector) // استخدام كاشف اللغة (من المتصفح، الكوكيز...)
  .use(initReactI18next) // دمج مع React
  .init({
    resources,      // الموارد (الترجمات المحملة يدويًا)
    lng: "it",       // اللغة الافتراضية
    fallbackLng: "en", // اللغة الاحتياطية إذا فشل تحميل اللغة الأصلية

    // إعدادات الكشف عن اللغة
    detection: {
      order: ["querystring", "cookie", "localStorage", "navigator"],
      caches: ["cookie"], // يخزن اللغة المختارة في الكوكيز
    },

    interpolation: {
      escapeValue: false, // نستخدم React للتأمين، لا نحتاج لهنا الهروب escape
    },

    react: {
      useSuspense: false, // نوقف استخدام Suspense لأن بعض التطبيقات لا تدعمه
    },
  });

// عند تغيير اللغة، نحدث اتجاه الصفحة ونحمّل الملف إذا لزم الأمر
i18n.on("languageChanged", (lng: string) => {
  try {
    // لأن اللغتين LTR (من اليسار لليمين)
    document.documentElement.dir = "ltr";
    document.documentElement.lang = lng;

    // تحميل ملف اللغة ديناميكيًا
    loadLanguageResources(lng);
  } catch (error) {
    console.error("Error changing language:", error);
  }
});

// تحميل اللغة الحالية عند بداية التشغيل
loadLanguageResources(i18n.language).catch(console.error);

// تصدير i18n لاستخدامه في أي مكان داخل مشروع React
export default i18n;
