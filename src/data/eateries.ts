export interface EateryDetail {
      imageUrl: string;
      descriptionKey: string;
    }

    export interface Eatery {
      id: string;
      name: string;
      logoUrl: string;
      phone: string;
      details: EateryDetail[];
    }

    export const eateries: Eatery[] = [
      {
        id: "kfc", name: "KFC", logoUrl: "/brands/KFC edited.webp", phone: "+20-123-456-7890",
        details: [
          { imageUrl: "/dining/kfc-1.jpg", descriptionKey: "eateries.kfc.detail1" },
          { imageUrl: "/dining/kfc-2.jpg", descriptionKey: "eateries.kfc.detail2" },
          { imageUrl: "/dining/kfc-3.jpg", descriptionKey: "eateries.kfc.detail3" },
          { imageUrl: "/dining/kfc-4.jpg", descriptionKey: "eateries.kfc.detail4" }
        ]
      },
      {
        id: "pizza-hut", name: "Pizza Hut", logoUrl: "/brands/pizza hut edited.webp", phone: "+20-123-456-7891",
        details: [
          { imageUrl: "/dining/pizza-1.jpg", descriptionKey: "eateries.pizza_hut.detail1" },
          { imageUrl: "/dining/pizza-2.jpg", descriptionKey: "eateries.pizza_hut.detail2" },
          { imageUrl: "/dining/pizza-3.jpg", descriptionKey: "eateries.pizza_hut.detail3" },
          { imageUrl: "/dining/pizza-4.jpg", descriptionKey: "eateries.pizza_hut.detail4" }
        ]
      },
      {
        id: "hardees", name: "Hardees", logoUrl: "/brands/hardees edited.webp", phone: "+20-123-456-7892",
        details: [
          { imageUrl: "/dining/hardees-1.jpg", descriptionKey: "eateries.hardees.detail1" },
          { imageUrl: "/dining/hardees-2.jpg", descriptionKey: "eateries.hardees.detail2" },
          { imageUrl: "/dining/hardees-3.jpg", descriptionKey: "eateries.hardees.detail3" },
          { imageUrl: "/dining/hardees-4.jpg", descriptionKey: "eateries.hardees.detail4" }
        ]
      },
      {
        id: "feterty", name: "Ftirty", logoUrl: "/brands/feterty edited.webp", phone: "+20-123-456-7893",
        details: [
          { imageUrl: "/dining/feterty-1.jpg", descriptionKey: "eateries.feterty.detail1" },
          { imageUrl: "/dining/feterty-2.jpg", descriptionKey: "eateries.feterty.detail2" },
          { imageUrl: "/dining/feterty-3.jpg", descriptionKey: "eateries.feterty.detail3" },
          { imageUrl: "/dining/feterty-4.jpg", descriptionKey: "eateries.feterty.detail4" }
        ]
      },
      {
        id: "hans", name: "Hans", logoUrl: "/brands/hans edited.webp", phone: "+20-123-456-7894",
        details: [
          { imageUrl: "/dining/hans-1.jpg", descriptionKey: "eateries.hans.detail1" },
          { imageUrl: "/dining/hans-2.jpg", descriptionKey: "eateries.hans.detail2" },
          { imageUrl: "/dining/hans-3.jpg", descriptionKey: "eateries.hans.detail3" },
          { imageUrl: "/dining/hans-4.jpg", descriptionKey: "eateries.hans.detail4" }
        ]
      },
      {
        id: "blaban", name: "Blaban", logoUrl: "/brands/blaban edited.webp", phone: "+20-123-456-7895",
        details: [
          { imageUrl: "/dining/blaban-1.jpg", descriptionKey: "eateries.blaban.detail1" },
          { imageUrl: "/dining/blaban-2.jpg", descriptionKey: "eateries.blaban.detail2" },
          { imageUrl: "/dining/blaban-3.jpg", descriptionKey: "eateries.blaban.detail3" },
          { imageUrl: "/dining/blaban-4.jpg", descriptionKey: "eateries.blaban.detail4" }
        ]
      },
      {
        id: "ammar-auto", name: "Ammar Auto", logoUrl: "/brands/ammar-auto.webp", phone: "+20-123-456-7896",
        details: [
          { imageUrl: "/dining/ammar-auto-1.jpg", descriptionKey: "eateries.ammar-auto.detail1" },
          { imageUrl: "/dining/ammar-auto-2.jpg", descriptionKey: "eateries.ammar-auto.detail2" },
          { imageUrl: "/dining/ammar-auto-3.jpg", descriptionKey: "eateries.ammar-auto.detail3" },
          { imageUrl: "/dining/ammar-auto-4.jpg", descriptionKey: "eateries.ammar-auto.detail4" }
        ]
      },
      {
        id: "b-tech", name: "B-Tech", logoUrl: "/brands/b-tech.webp", phone: "+20-123-456-7897",
        details: [
          { imageUrl: "/dining/b-tech-1.jpg", descriptionKey: "eateries.b-tech.detail1" },
          { imageUrl: "/dining/b-tech-2.jpg", descriptionKey: "eateries.b-tech.detail2" },
          { imageUrl: "/dining/b-tech-3.jpg", descriptionKey: "eateries.b-tech.detail3" },
          { imageUrl: "/dining/b-tech-4.jpg", descriptionKey: "eateries.b-tech.detail4" }
        ]
      },
      {
        id: "balbaa-village", name: "Balbaa Village", logoUrl: "/brands/balbaa-village.webp", phone: "+20-123-456-7898",
        details: [
          { imageUrl: "/dining/balbaa-village-1.jpg", descriptionKey: "eateries.balbaa-village.detail1" },
          { imageUrl: "/dining/balbaa-village-2.jpg", descriptionKey: "eateries.balbaa-village.detail2" },
          { imageUrl: "/dining/balbaa-village-3.jpg", descriptionKey: "eateries.balbaa-village.detail3" },
          { imageUrl: "/dining/balbaa-village-4.jpg", descriptionKey: "eateries.balbaa-village.detail4" }
        ]
      },
      {
        id: "bright-store", name: "Bright Store", logoUrl: "/brands/bright-store.webp", phone: "+20-123-456-7899",
        details: [
          { imageUrl: "/dining/bright-store-1.jpg", descriptionKey: "eateries.bright-store.detail1" },
          { imageUrl: "/dining/bright-store-2.jpg", descriptionKey: "eateries.bright-store.detail2" },
          { imageUrl: "/dining/bright-store-3.jpg", descriptionKey: "eateries.bright-store.detail3" },
          { imageUrl: "/dining/bright-store-4.jpg", descriptionKey: "eateries.bright-store.detail4" }
        ]
      },
      {
        id: "dream-2000", name: "Dream 2000", logoUrl: "/brands/dream-2000.webp", phone: "+20-123-456-7900",
        details: [
          { imageUrl: "/dining/dream-2000-1.jpg", descriptionKey: "eateries.dream-2000.detail1" },
          { imageUrl: "/dining/dream-2000-2.jpg", descriptionKey: "eateries.dream-2000.detail2" },
          { imageUrl: "/dining/dream-2000-3.jpg", descriptionKey: "eateries.dream-2000.detail3" },
          { imageUrl: "/dining/dream-2000-4.jpg", descriptionKey: "eateries.dream-2000.detail4" }
        ]
      },
      {
        id: "fathalla-market", name: "Fathalla Market", logoUrl: "/brands/fathalla-market.webp", phone: "+20-123-456-7901",
        details: [
          { imageUrl: "/dining/fathalla-market-1.jpg", descriptionKey: "eateries.fathalla-market.detail1" },
          { imageUrl: "/dining/fathalla-market-2.jpg", descriptionKey: "eateries.fathalla-market.detail2" },
          { imageUrl: "/dining/fathalla-market-3.jpg", descriptionKey: "eateries.fathalla-market.detail3" },
          { imageUrl: "/dining/fathalla-market-4.jpg", descriptionKey: "eateries.fathalla-market.detail4" }
        ]
      },
      {
        id: "donia-el-gambary", name: "Donia El Gambary", logoUrl: "/brands/donia-el-gambary.webp", phone: "+20-123-456-7902",
        details: [
          { imageUrl: "/dining/donia-el-gambary-1.jpg", descriptionKey: "eateries.donia-el-gambary.detail1" },
          { imageUrl: "/dining/donia-el-gambary-2.jpg", descriptionKey: "eateries.donia-el-gambary.detail2" },
          { imageUrl: "/dining/donia-el-gambary-3.jpg", descriptionKey: "eateries.donia-el-gambary.detail3" },
          { imageUrl: "/dining/donia-el-gambary-4.jpg", descriptionKey: "eateries.donia-el-gambary.detail4" }
        ]
      },
      {
        id: "hamed-el-basiony", name: "Hamed El Basiony", logoUrl: "/brands/hamed-el-basiony.webp", phone: "+20-123-456-7903",
        details: [
          { imageUrl: "/dining/hamed-el-basiony-1.jpg", descriptionKey: "eateries.hamed-el-basiony.detail1" },
          { imageUrl: "/dining/hamed-el-basiony-2.jpg", descriptionKey: "eateries.hamed-el-basiony.detail2" },
          { imageUrl: "/dining/hamed-el-basiony-3.jpg", descriptionKey: "eateries.hamed-el-basiony.detail3" },
          { imageUrl: "/dining/hamed-el-basiony-4.jpg", descriptionKey: "eateries.hamed-el-basiony.detail4" }
        ]
      },
      {
        id: "khatab", name: "Khatab", logoUrl: "/brands/khatab.webp", phone: "+20-123-456-7904",
        details: [
          { imageUrl: "/dining/khatab-1.jpg", descriptionKey: "eateries.khatab.detail1" },
          { imageUrl: "/dining/khatab-2.jpg", descriptionKey: "eateries.khatab.detail2" },
          { imageUrl: "/dining/khatab-3.jpg", descriptionKey: "eateries.khatab.detail3" },
          { imageUrl: "/dining/khatab-4.jpg", descriptionKey: "eateries.khatab.detail4" }
        ]
      },
      {
        id: "ragab-perfumes", name: "Ragab Perfumes", logoUrl: "/brands/ragab-perfumes.webp", phone: "+20-123-456-7905",
        details: [
          { imageUrl: "/dining/ragab-perfumes-1.jpg", descriptionKey: "eateries.ragab-perfumes.detail1" },
          { imageUrl: "/dining/ragab-perfumes-2.jpg", descriptionKey: "eateries.ragab-perfumes.detail2" },
          { imageUrl: "/dining/ragab-perfumes-3.jpg", descriptionKey: "eateries.ragab-perfumes.detail3" },
          { imageUrl: "/dining/ragab-perfumes-4.jpg", descriptionKey: "eateries.ragab-perfumes.detail4" }
        ]
      },
      {
        id: "raya", name: "Raya", logoUrl: "/brands/raya.webp", phone: "+20-123-456-7906",
        details: [
          { imageUrl: "/dining/raya-1.jpg", descriptionKey: "eateries.raya.detail1" },
          { imageUrl: "/dining/raya-2.jpg", descriptionKey: "eateries.raya.detail2" },
          { imageUrl: "/dining/raya-3.jpg", descriptionKey: "eateries.raya.detail3" },
          { imageUrl: "/dining/raya-4.jpg", descriptionKey: "eateries.raya.detail4" }
        ]
      },
      {
        id: "smart-furniture", name: "Smart Furniture", logoUrl: "/brands/smart-furniture.webp", phone: "+20-123-456-7907",
        details: [
          { imageUrl: "/dining/smart-furniture-1.jpg", descriptionKey: "eateries.smart-furniture.detail1" },
          { imageUrl: "/dining/smart-furniture-2.jpg", descriptionKey: "eateries.smart-furniture.detail2" },
          { imageUrl: "/dining/smart-furniture-3.jpg", descriptionKey: "eateries.smart-furniture.detail3" },
          { imageUrl: "/dining/smart-furniture-4.jpg", descriptionKey: "eateries.smart-furniture.detail4" }
        ]
      },
      {
        id: "el-tahrir", name: "El Tahrir", logoUrl: "/brands/el-tahrir.webp", phone: "+20-123-456-7908",
        details: [
          { imageUrl: "/dining/el-tahrir-1.jpg", descriptionKey: "eateries.el-tahrir.detail1" },
          { imageUrl: "/dining/el-tahrir-2.jpg", descriptionKey: "eateries.el-tahrir.detail2" },
          { imageUrl: "/dining/el-tahrir-3.jpg", descriptionKey: "eateries.el-tahrir.detail3" },
          { imageUrl: "/dining/el-tahrir-4.jpg", descriptionKey: "eateries.el-tahrir.detail4" }
        ]
      },
      {
        id: "zizo-&-lavish", name: "Zizo & Lavish", logoUrl: "/brands/zizo-&-lavish.webp", phone: "+20-123-456-7909",
        details: [
          { imageUrl: "/dining/zizo-&-lavish-1.jpg", descriptionKey: "eateries.zizo-&-lavish.detail1" },
          { imageUrl: "/dining/zizo-&-lavish-2.jpg", descriptionKey: "eateries.zizo-&-lavish.detail2" },
          { imageUrl: "/dining/zizo-&-lavish-3.jpg", descriptionKey: "eateries.zizo-&-lavish.detail3" },
          { imageUrl: "/dining/zizo-&-lavish-4.jpg", descriptionKey: "eateries.zizo-&-lavish.detail4" }
        ]
      }
    ];