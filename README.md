# 🏔️ Chitral Natural Nuts — E-Commerce Website

Premium nuts & dry fruits e-commerce platform built with Next.js 15, TypeScript, and Tailwind CSS.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL database
- npm or yarn

### 1. Clone & Install
```bash
git clone <your-repo>
cd chitral-nuts
npm install
```

### 2. Environment Setup
```bash
cp .env.example .env.local
# Fill in your DATABASE_URL, NEXTAUTH_SECRET, Stripe keys, etc.
```

### 3. Database Setup
```bash
npx prisma generate
npx prisma db push
npx prisma db seed   # optional: seed sample data
```

### 4. Run Development Server
```bash
npm run dev
# Open http://localhost:3000
```

---

## 📁 Project Structure

```
chitral-nuts/
├── app/                    # Next.js App Router
│   ├── page.tsx            # Home page
│   ├── shop/               # Shop listing page
│   ├── products/[slug]/    # Product detail page
│   ├── about/              # About us page
│   ├── blog/               # Blog listing page
│   ├── contact/            # Contact page
│   ├── faq/                # FAQ page
│   ├── cart/               # Cart page
│   ├── checkout/           # Checkout (3-step flow)
│   ├── wishlist/           # Wishlist page
│   ├── account/            # Customer account/dashboard
│   ├── admin/              # Admin dashboard
│   └── api/                # API routes
│       ├── products/
│       ├── orders/
│       ├── newsletter/
│       ├── contact/
│       └── coupon/
├── components/
│   ├── layout/             # Navbar, Footer, CartDrawer, etc.
│   ├── home/               # Home page sections
│   └── ui/                 # Reusable UI components
├── lib/
│   ├── utils.ts            # Utility functions
│   ├── data.ts             # Product/content data
│   └── store.ts            # Zustand state (cart, wishlist)
├── prisma/
│   └── schema.prisma       # Database schema
└── public/                 # Static assets
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary Green | `#1B4332` |
| Gold Accent | `#D4AF37` |
| Background Cream | `#FAF9F6` |
| Font Display | Cormorant Garamond |
| Font Serif | Playfair Display |
| Font Sans | Inter |

---

## 🛒 E-Commerce Features

- ✅ Product listing with filtering, sorting, search
- ✅ Product detail with gallery, reviews, nutritional info
- ✅ Shopping cart (Zustand, persists in session)
- ✅ 3-step checkout flow
- ✅ Wishlist
- ✅ Coupon system
- ✅ Guest checkout support
- ✅ Order confirmation flow

### Payment Methods (configured in checkout)
- Cash on Delivery (COD)
- Easypaisa
- JazzCash
- Stripe (credit/debit card)
- Bank Transfer

---

## 🗄️ Database Schema (Prisma)

Full schema in `prisma/schema.prisma` includes:
- Users, Sessions, Accounts (NextAuth)
- Products, Categories, ProductVariants
- Orders, OrderItems
- Cart, Wishlist
- Reviews, Coupons
- Blog, Newsletter
- SiteSettings, Analytics

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | List products (filterable) |
| POST | `/api/orders` | Create new order |
| POST | `/api/newsletter` | Subscribe to newsletter |
| POST | `/api/contact` | Submit contact form |
| POST | `/api/coupon` | Validate & apply coupon |

---

## 📱 Pages

| Page | Route | Features |
|------|-------|----------|
| Home | `/` | Hero slider, featured products, testimonials |
| Shop | `/shop` | Filters, sort, search, grid/list view |
| Product | `/products/[slug]` | Gallery, reviews, nutrition, add to cart |
| About | `/about` | Story, mission, sourcing process |
| Blog | `/blog` | Article grid, categories |
| Contact | `/contact` | Form, WhatsApp CTA, map |
| FAQ | `/faq` | Searchable accordion |
| Cart | `/cart` | Line items, coupon, shipping calc |
| Checkout | `/checkout` | 3-step: shipping → payment → review |
| Wishlist | `/wishlist` | Saved products |
| Account | `/account` | Dashboard, orders, addresses |
| Admin | `/admin` | Full admin panel |

---

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### Docker
```bash
docker build -t chitral-nuts .
docker run -p 3000:3000 chitral-nuts
```

### Environment Variables for Production
Set all variables from `.env.example` in your hosting provider's dashboard.

---

## 🔒 Security

- CSRF protection via NextAuth
- HTTP security headers in `next.config.ts`
- Input validation on all API routes
- SQL injection prevention via Prisma ORM
- XSS protection via React's built-in escaping
- Admin routes should be protected with middleware

---

## 📊 SEO

- Dynamic `metadata` on all pages
- `sitemap.ts` auto-generates `/sitemap.xml`
- `robots.ts` generates `/robots.txt`
- JSON-LD structured data (Organization schema)
- Open Graph tags on all pages
- Semantic HTML throughout

---

## 📞 Support

- 📧 hello@chitralnuts.pk
- 💬 WhatsApp: +92-xxx-xxxxxxx
- 🌐 chitralnuts.pk

---

*Built with ❤️ for the mountains of Chitral*
