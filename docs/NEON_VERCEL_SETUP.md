# ตั้งค่า Neon (PostgreSQL) กับ Vercel

โปรเจกต์ใช้ **Neon** เป็น PostgreSQL บน cloud และ deploy บน Vercel

## 1. สร้างฐานข้อมูลบน Neon

1. ไปที่ [Neon Console](https://console.neon.tech/)
2. สมัคร/ล็อกอิน แล้วสร้างโปรเจกต์ใหม่ (เลือก region ใกล้ผู้ใช้)
3. หลังสร้างเสร็จ จะเห็น **Connection string** ในหน้า Dashboard

## 2. ใช้ Connection String แบบ Pooled (แนะนำสำหรับ Vercel)

บน Vercel ใช้ **pooled** เพื่อไม่ให้ connection เยอะเกินไป:

- ใน Neon Dashboard เลือก **Connection string** → **Pooled connection**
- รูปแบบประมาณนี้:
  ```
  postgresql://USER:PASSWORD@ep-xxx-pooler.REGION.aws.neon.tech/DBNAME?sslmode=require
  ```

ถ้ามีให้เปิด **Use connection pooling** แล้ว copy connection string ที่มี `-pooler` ใน host

## 3. ตั้งค่า Environment Variables บน Vercel

1. ไปที่ [Vercel Dashboard](https://vercel.com/) → เลือกโปรเจกต์
2. **Settings** → **Environment Variables**
3. เพิ่มตัวแปร:

   | Name          | Value                    | Environment   |
   |---------------|--------------------------|---------------|
   | `DATABASE_URL`| `postgresql://...` จาก Neon (แบบ pooled) | Production (และ Preview ถ้าต้องการ) |

4. กด **Save**

## 4. สร้างตารางใน Neon (ครั้งแรกหรือหลังเปลี่ยน schema)

หลังตั้งค่า `DATABASE_URL` แล้ว รันคำสั่งจากเครื่องคุณ (ที่ชี้ `.env` ไปที่ Neon):

```bash
npx prisma db push
```

หรือใช้ migrations:

```bash
npx prisma migrate deploy
```

ถ้ามีข้อมูลเก่าจาก MySQL ต้อง migrate ข้อมูลเอง (export/import หรือ script) เพราะคนละ engine

## 5. Deploy ใหม่บน Vercel

- กด **Redeploy** ที่การ deploy ล่าสุด  
หรือ  
- push code ขึ้น Git แล้ว Vercel จะ build/deploy ใหม่

Build จะใช้ `DATABASE_URL` จาก Vercel ไม่ต้องมี DB ตอน build (ใช้แค่ `prisma generate`).

## หมายเหตุ

- **Local:** ใส่ `DATABASE_URL` ใน `.env.local` ชี้ไปที่ Neon (หรือ Postgres ตัวอื่น) แล้วรัน `prisma db push` / `prisma migrate dev` ตามปกติ
- **Neon ฟรี tier:** เหมาะสำหรับ dev และ traffic น้อย ถ้า traffic สูงอาจต้องอัปเกรด
