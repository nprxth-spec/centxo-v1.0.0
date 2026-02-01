# Centxo - Google & Facebook Verification Checklist

คู่มือรวมสำหรับยื่นยืนยันแอป Centxo กับ **Google OAuth** และ **Meta (Facebook) App Review**

---

## 1. สิ่งที่พร้อมในโค้ดแล้ว ✅

| รายการ | Google | Facebook |
|--------|--------|----------|
| Privacy Policy (มี Google + Sheets + Facebook) | ✅ | ✅ |
| Terms of Service | ✅ | ✅ |
| Data Deletion Instructions | - | ✅ `/data-deletion` |
| Data Deletion Callback (ลบข้อมูลจริง) | - | ✅ `/api/facebook/data-deletion` |
| Purpose section (หน้าแรก) | ✅ | ✅ |
| JSON-LD schema | ✅ | - |
| Google API User Data Policy link | ✅ | - |

---

## 2. Google OAuth Verification

### URL ที่ต้องใช้ (ต้องตรงทุกตัวอักษร)
- Homepage: `https://www.centxo.com`
- Privacy Policy: `https://www.centxo.com/privacy`
- Terms: `https://www.centxo.com/terms`

### ขั้นตอนใน Google Cloud Console
1. ไปที่ [Google Cloud Console](https://console.cloud.google.com/) → เลือกโปรเจกต์ Centxo
2. **APIs & Services** → **OAuth consent screen**
3. ตรวจสอบ: Homepage URL, Privacy Policy URL ตรงกับด้านบน
4. **Submit for verification** (ถ้าใช้ scope sensitive เช่น spreadsheets)

### สิ่งที่ต้องทำเอง
- [ ] ยืนยันโดเมนใน Google Search Console (ตั้ง `GOOGLE_SITE_VERIFICATION` ใน Vercel)
- [ ] ส่งขอ verification ใน OAuth consent screen
- [ ] วิดีโอสาธิต (สำหรับ scope spreadsheets): บันทึกหน้าจอ Login + Export to Google Sheets → อัปโหลด YouTube (unlisted)

### Environment Variables (Production)
```
NEXTAUTH_URL=https://www.centxo.com
NEXT_PUBLIC_APP_URL=https://www.centxo.com
GOOGLE_SITE_VERIFICATION=xxx  # จาก Search Console (optional)
```

---

## 3. Meta (Facebook) App Review

### URL ที่ต้องตั้งใน Meta App Dashboard
- Privacy Policy URL: `https://www.centxo.com/privacy`
- Terms of Service: `https://www.centxo.com/terms`
- Data Deletion Instructions: `https://www.centxo.com/data-deletion`
- **Data Deletion Request Callback URL**: `https://www.centxo.com/api/facebook/data-deletion`

### ขั้นตอนตั้งค่า
1. ไปที่ [Meta for Developers](https://developers.facebook.com/) → เลือกแอป Centxo
2. **App Settings** → **Basic**:
   - Privacy Policy URL
   - Terms of Service URL
   - App Domains: `centxo.com`
3. **App Settings** → **Advanced**:
   - **Data Deletion Request Callback URL**: `https://www.centxo.com/api/facebook/data-deletion`
4. **Facebook Login** → **Settings**:
   - Valid OAuth Redirect URIs: `https://www.centxo.com/api/auth/callback/facebook`

### Permissions ที่ต้องยื่น App Review
- `pages_show_list`
- `pages_read_engagement`
- `ads_management`

### สิ่งที่ต้องทำเอง
- [ ] อัปโหลด Screenshots สำหรับแต่ละ permission (ดู META_APP_REVIEW_GUIDE.md)
- [ ] กรอกคำอธิบายการใช้งานแต่ละ permission
- [ ] Business Verification (ถ้า Meta ขอ - สำหรับ ads_management)

---

## 4. Pre-Submit Checklist

### ทดสอบก่อนยื่น
- [ ] เปิด https://www.centxo.com ใน Incognito → เห็น purpose + Privacy/Terms links (ไม่ต้อง login)
- [ ] คลิก Privacy Policy → เปิดได้
- [ ] คลิก Terms → เปิดได้
- [ ] คลิก Data Deletion → เปิดได้
- [ ] Data Deletion Callback: ทดสอบด้วยการ Remove app จาก Facebook → Send Request → ตรวจสอบว่า callback ทำงาน

### Production URLs ต้องใช้
- ใช้ `https://www.centxo.com` (มี www) - ตรงกับ vercel.json redirect

---

## 5. เอกสารอ้างอิง

- [GOOGLE_VERIFICATION.md](./GOOGLE_VERIFICATION.md) - รายละเอียด Google
- [META_APP_REVIEW_GUIDE.md](./META_APP_REVIEW_GUIDE.md) - รายละเอียด Meta App Review
