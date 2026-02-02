# แก้ปัญหาเข้าระบบไม่ได้ (Login Troubleshooting)

## ⚠️ ข้อผิดพลาด OAuth (เกิดข้อผิดพลาดในการเข้าสู่ระบบด้วย OAuth)

**สาเหตุหลัก:** `NEXTAUTH_URL` ไม่ตรงกับ URL ที่เปิดเว็บ

ถ้าเปิดเว็บที่ `http://localhost:4000` แต่ตั้ง `NEXTAUTH_URL=https://centxo.online` → OAuth จะ redirect ไป centxo.online แทน localhost → **ล้มเหลว**

**แก้ไขทันที:** ใน `.env.local` เปลี่ยนเป็น:

```env
# ถ้าเปิดเว็บที่ localhost:4000
NEXTAUTH_URL=http://localhost:4000

# ถ้าเปิดเว็บที่ localhost:3000
NEXTAUTH_URL=http://localhost:3000

# ถ้าเปิดเว็บที่ centxo.online (production)
NEXTAUTH_URL=https://centxo.online
```

**และต้องเพิ่ม Redirect URI ใน Google/Facebook:**
- Google Cloud Console → Credentials → Authorized redirect URIs: `http://localhost:4000/api/auth/callback/google`
- Facebook Developer → Valid OAuth Redirect URIs: `http://localhost:4000/api/auth/callback/facebook`

---

## สาเหตุที่พบบ่อยและวิธีแก้

### 1. NEXTAUTH_URL ไม่ตรงกับ URL ที่ใช้

**ปัญหา:** ถ้ารันบน localhost แต่ตั้ง `NEXTAUTH_URL=https://centxo.online` OAuth จะ redirect ไปผิดที่

**แก้ไข:** ใน `.env.local` ตั้งค่าให้ตรงกับที่เปิดเว็บ:

```env
# ถ้ารันบน localhost (npm run dev)
NEXTAUTH_URL=http://localhost:3000

# หรือถ้าใช้ server.js บนพอร์ต 4000
NEXTAUTH_URL=http://localhost:4000

# ถ้า deploy บน centxo.online
NEXTAUTH_URL=https://centxo.online
```

---

### 2. Rate Limit (ลองล็อกอินผิดเกิน 5 ครั้ง)

**ปัญหา:** ระบบจำกัด 5 ครั้ง / 5 นาที ถ้าลองผิดหลายครั้งจะถูกบล็อก

**แก้ไข:** รอ 5 นาที แล้วลองใหม่ หรือรีสตาร์ทเซิร์ฟเวอร์

---

### 3. ฐานข้อมูล MySQL ไม่เชื่อมต่อ

**ปัญหา:** `DATABASE_URL` ผิด หรือ MySQL ไม่รัน

**เช็ค:** เปิด `http://localhost:3000/api/debug/health` (หรือพอร์ตที่ใช้) ดู `database.status`

**แก้ไข:**
- ตรวจสอบว่า MySQL รันอยู่
- ตรวจสอบ `DATABASE_URL` ใน `.env.local`
- รัน `npx prisma db push` หรือ `npx prisma migrate deploy`

---

### 4. OAuth (Google/Facebook) - Redirect URI ไม่ตรง

**Google Cloud Console:**
- ไปที่ APIs & Services → Credentials → OAuth 2.0 Client
- เพิ่ม **Authorized redirect URIs**:
  - Production: `https://centxo.online/api/auth/callback/google`
  - Local: `http://localhost:3000/api/auth/callback/google` หรือ `http://localhost:4000/api/auth/callback/google`

**Facebook Developer:**
- ไปที่ App → Facebook Login → Settings
- เพิ่ม **Valid OAuth Redirect URIs**:
  - Production: `https://centxo.online/api/auth/callback/facebook`
  - Local: `http://localhost:3000/api/auth/callback/facebook` หรือ `http://localhost:4000/api/auth/callback/facebook`

---

### 5. ล็อกอินด้วย Email/Password แต่ไม่มีบัญชี

**ปัญหา:** ใช้ Email/Password แต่ยังไม่สมัคร หรือสมัครด้วย Google/Facebook (ไม่มี password)

**แก้ไข:**
- สมัครใหม่ที่ `/signup` ด้วย Email/Password
- หรือใช้ **Sign in with Google** / **Sign in with Facebook**

---

### 6. Content Security Policy (CSP) บล็อก OAuth

**ปัญหา:** CSP ใน `next.config.ts` อาจบล็อก frame/redirect ของ OAuth

**แก้ไข:** ตรวจสอบ `connect-src` และ `frame-src` ว่ามีโดเมนของ Google/Facebook

---

## วิธีเช็คระบบ

1. **รันเซิร์ฟเวอร์** แล้วเปิด:
   ```
   http://localhost:3000/api/debug/health
   ```
   หรือ
   ```
   http://localhost:4000/api/debug/health
   ```

2. **ดูผลลัพธ์:**
   - `database.status: "✓ Connected"` = DB เชื่อมต่อได้
   - `NEXTAUTH_SECRET: "✓ Set"` = มี secret
   - `NEXTAUTH_URL` = ต้องตรงกับ URL ที่เปิดเว็บ

3. **เปิด DevTools (F12)** ตอนล็อกอิน ดู Console และ Network ว่ามี error อะไร

---

## สรุป Checklist

- [ ] NEXTAUTH_URL ตรงกับ URL ที่เปิดเว็บ
- [ ] MySQL รันอยู่ และ DATABASE_URL ถูกต้อง
- [ ] Google/Facebook OAuth มี Redirect URI ถูกต้อง
- [ ] มีบัญชีผู้ใช้ (สมัครที่ /signup หรือใช้ OAuth)
- [ ] ไม่ถูก rate limit (รอ 5 นาที ถ้าลองผิดหลายครั้ง)
