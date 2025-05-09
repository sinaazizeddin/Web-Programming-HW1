# ارزیاب فرمول داینامیک

این پروژه یک ارزیاب فرمول داینامیک است که با استفاده از HTML، CSS و JavaScript ساخته شده است. این برنامه نتیجه‌ی یک معادله را بر اساس ورودی‌های کاربر به صورت آنی محاسبه می‌کند و هر زمان که مقادیر ورودی تغییر کند، نتیجه نیز به صورت زنده به‌روزرسانی می‌شود. هدف اصلی پروژه بر روی کارایی، زیبایی و پاسخگویی طراحی بود.

## بخش‌های اصلی پیاده‌سازی

### 1. **ساختار HTML**

ساختار صفحه را تعریف می‌کند که شامل فیلدهای ورودی برای کد HTML است که نتیجه را به صورت داینامیک در تگ formula نمایش می‌دهد.

### 2. **عملکرد JavaScript**

کد JavaScript مسئول ارزیابی دینامیک فرمول است و نتیجه را به‌طور آنی هر بار که یکی از فیلدهای ورودی تغییر کند، به‌روزرسانی می‌کند. ویژگی evaluator در عنصر formula شامل عبارت ریاضی است و کد تضمین می‌کند که نتیجه به‌طور خودکار به‌روزرسانی شود. همچنین، اعتبارسنجی انجام می‌شود و در صورت وارد کردن فرمول نامعتبر، پیامی با عنوان "Invalid Formula" نمایش داده می‌شود.

این کد از متد eval() برای ارزیابی فرمول براساس id فیلدهای ورودی استفاده می‌کند و قابلیت انعطاف‌پذیری برای فرمول‌های مختلف را فراهم می‌آورد.

### 3. **طراحی CSS و پاسخگویی (Responsiveness)**

طراحی این صفحه بر اساس زیبایی و سادگی استوار است. از یک پس‌زمینه گرادیانت، مربع‌های ورودی گرد و افکت‌های هاور استفاده شده است تا ظاهر صفحه بهبود یابد. همچنین صفحه کاملاً پاسخگو است و تجربه‌ی کاربری راحتی را در تمام اندازه‌های صفحه‌نمایش ارائه می‌دهد.

کانتینر: محتوای صفحه در یک کانتینر قرار دارد که دارای گوشه‌های گرد و سایه نرم است تا ظاهر مدرن‌تری به صفحه بدهد. 

ورودی‌ها: فیلدهای ورودی به خوبی فاصله‌گذاری شده‌اند و با border-radius و افکت‌های فوکوس برای بهبود کارایی طراحی شده‌اند.

باکس نتیجه: نتیجه‌ای که در عنصر فرمول نمایش داده می‌شود با پس‌زمینه سبز و متنی برجسته و بزرگ، به‌راحتی قابل مشاهده است.

### 4. **مدیریت خطا**

در صورتی که کاربر فرمول نامعتبر وارد کند یا مقادیر غیر عددی را در فیلدها وارد کند، برنامه پیامی با عنوان "Invalid Formula" نمایش می‌دهد. این اقدام تجربه کاربری را بهبود می‌بخشد و از بروز خطا جلوگیری می‌کند.

